import getCurrentProfile from "@/backend/actions/getCurrentProfile";
import prisma from "@/server/prisma";
import { pusherServer } from "@/server/pusher";
import { NextResponse } from "next/server";

interface IParams {
  conversationId?: number;
}

export async function POST(request: Request, { params }: { params: IParams }) {
  try {
    const currentProfile = await getCurrentProfile();
    const { conversationId } = params;

    if (!currentProfile?.userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    //Find existing conversations
    const conversation = await prisma.conversation.findUnique({
      where: {
        id: Number(conversationId),
      },
      include: {
        messages: {
          include: { seen: true },
        },
        people: true,
      },
    });

    if (!conversation) {
      return new NextResponse("Invalid ID", { status: 400 });
    }

    //Find last message
    const lastMessage = conversation.messages[conversation.messages.length - 1];

    if (!lastMessage) {
      return NextResponse.json(conversation);
    }

    //Updata seen of last message
    const updatedMessage = await prisma.message.update({
      where: {
        id: lastMessage.id,
      },
      include: {
        sender: true,
        seen: true,
      },
      data: {
        seen: {
          connect: {
            id: currentProfile.id,
          },
        },
      },
    });

    //Pusher
    await pusherServer.trigger(currentProfile.userId, "conversation:update", {
      id: conversationId,
      messages: [updatedMessage],
    });

    if (
      lastMessage.seen.some((user) => user.userId === currentProfile.userId)
    ) {
      return NextResponse.json(conversation);
    }

    await pusherServer.trigger(
      String(conversationId!),
      "message:update",
      updatedMessage
    );

    return NextResponse.json(updatedMessage);
  } catch (error: any) {
    console.log(error, "ERROR_MESSAGES_SEEN");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
