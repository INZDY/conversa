import prisma from "@/server/prisma";
import getCurrentUser from "./getCurrentUser";

export default async function getProfiles() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return [];
  }

  try {
    const userProfiles = await prisma.profile.findMany({
      where: {
        userId: currentUser.id,
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
