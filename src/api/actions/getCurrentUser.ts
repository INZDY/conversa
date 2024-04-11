import prisma from "@/server/prisma";

import getSession from "./getSession";

export default async function getCurrentUser() {
  try {
    const sessionData = await getSession();

    if (!sessionData) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        id: sessionData.id as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;

  } catch (error: any) {
    return null;
  }
}
