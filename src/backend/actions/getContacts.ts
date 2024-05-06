import prisma from "@/server/prisma";
import getCurrentUser from "./getCurrentUser";

export default async function getContacts() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return [];
  }

  try {
    const userContacts = await prisma.profile.findFirst({
      where: {
        userId: currentUser.id,
        selected: true,
      },
      include: {
        contacts: true,
      },
    });

    if (!userContacts) {
      return [];
    }

    return userContacts.contacts;
  } catch (error: any) {
    return [];
  }
}
