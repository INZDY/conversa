import prisma from "@/server/prisma";
import getCurrentProfile from "./getCurrentProfile";

export default async function getConversationById(conversationId: number) {
  try {
    const currentProfile = await getCurrentProfile();

    if (!currentProfile?.userId) {
      return null;
    }

    const conversation = await prisma.conversation.findUnique({
      where: {
        id: conversationId,
      },
      include: {
        people: true,
      },
    });

    return conversation;
  } catch (error: any) {
    return null;
  }
}
