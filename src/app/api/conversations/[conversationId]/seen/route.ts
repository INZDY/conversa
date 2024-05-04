import getCurrentProfile from "@/backend/actions/getCurrentProfile";
import prisma from "@/server/prisma";
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
        id: conversationId,
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
    const upadatedMessage = await prisma.message.update({
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

    return NextResponse.json(upadatedMessage);
  } catch (error: any) {
    console.log(error, "ERROR_MESSAGES_SEEN");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
