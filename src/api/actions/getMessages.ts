import prisma from "@/server/prisma";

export default async function getMessages(conversationId: number) {
  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId: conversationId,
      },
      include: {
        sender: true,
        seen: true,
      },
      orderBy: {
        created: "asc",
      },
    });

    return messages;
  } catch (error: any) {
    return [];
  }
}
