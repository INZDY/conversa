import prisma from "@/server/prisma";
import getCurrentProfile from "./getCurrentProfile";

export default async function getConversations() {
  const currentProfile = await getCurrentProfile();

  if (!currentProfile?.userId) {
    return [];
  }

  try {
    const conversations = await prisma.conversation.findMany({
      orderBy: {
        lastMessageAt: "desc",
      },
      where: {
        people: { some: { id: currentProfile.id as number } },
      },
      include: {
        people: true,
        messages: {
          include: {
            sender: true,
            seen: true,
          },
        },
      },
    });

    return conversations;
    
  } catch (error: any) {
    return [];
  }
}
