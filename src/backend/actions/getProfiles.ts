import prisma from "@/server/prisma";
import getCurrentUser from "./getCurrentUser";

export default async function getProfiles() {
  const currentUser = await getCurrentUser();

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
