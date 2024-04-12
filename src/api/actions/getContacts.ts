import prisma from "@/server/prisma";
import getSession from "./getSession";

export default async function getContacts(profileName: string) {
  const sessionData = await getSession();

  if (!sessionData) {
    return [];
  }

  try {
    const userContacts = await prisma.profile.findFirst({
      where: {
        userId: sessionData.id,
        name: profileName,
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
