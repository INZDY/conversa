import getCurrentProfile from "@/backend/actions/getCurrentProfile";
import prisma from "@/server/prisma";
import { pusherServer } from "@/server/pusher";
import { NextResponse } from "next/server";

interface IParams {
  conversationId?: number;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  try {
    const { conversationId } = params;
    const currentProfile = await getCurrentProfile();

    if (!currentProfile?.userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const existingConversation = await prisma.conversation.findUnique({
      where: {
        id: Number(conversationId),
      },
      include: {
        people: true,
      },
    });

    if (!existingConversation) {
      return new NextResponse("Invalid ID", { status: 400 });
    }

    const deletedConversation = await prisma.conversation.deleteMany({
      where: {
        id: Number(conversationId),
        people: { some: { id: currentProfile.id } },
      },
    });

    //Pusher
    existingConversation.people.forEach((user) => {
      if (user.userId) {
        pusherServer.trigger(
          user.userId,
          "conversation:remove",
          existingConversation
        );
      }
    });

    return NextResponse.json(deletedConversation);
  } catch (error: any) {
    console.log(error, "ERROR_CONVERSATION_DELETE");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
