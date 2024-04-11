import prisma from "@/server/prisma";
import getSession from "./getSession";

export default async function getProfiles() {
  try {
    const sessionData = await getSession();

    if (!sessionData) {
      return null;
    }

    const userProfiles = await prisma.profile.findMany({
      where: {
        userId: sessionData.id as string,
      },
    });

    if (!userProfiles) {
      return null;
    }

    return userProfiles;
  } catch (error: any) {
    return null;
  }
}
