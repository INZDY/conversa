import prisma from "@/server/prisma";
import getSession from "./getSession";

export default async function getProfiles() {
  const sessionData = await getSession();

  if (!sessionData) {
    return [];
  }

  try {
    const userProfiles = await prisma.profile.findMany({
      where: {
        userId: sessionData.id,
       
      },
     
    });

    if (!userProfiles) {
      return [];
    }

    return userProfiles;
  } catch (error: any) {
    return [];
  }
}
