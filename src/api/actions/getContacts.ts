import prisma from "@/server/prisma";
import getSession from "./getSession";

export default async function getContacts() {
  const sessionData = await getSession();

  if (!sessionData) {
    return [];
  }

  try {
    const userContacts = await prisma.profile.findFirst({
      where: {
        userId: sessionData.id,
        selected : true
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
