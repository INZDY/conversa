import prisma from "@/server/prisma";
import getCurrentUser from "./getCurrentUser";

export default async function getProfiles() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return null;
  }

  const userProfiles = await prisma.profile.findMany({
    where: {
      userId: currentUser.id,
    },
  });

  if (!userProfiles) {
    return null;
  }

  return userProfiles;
}
