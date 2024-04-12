import prisma from "@/server/prisma";
import getCurrentUser from "./getCurrentUser";

export default async function getCurrentProfile() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return null;
  }

  const currentProfile = await prisma.profile.findFirst({
    where: {
      userId: currentUser.id as string,
      selected: true,
    },
  });

  if (!currentProfile) {
    return null;
  }

  return currentProfile;
}
