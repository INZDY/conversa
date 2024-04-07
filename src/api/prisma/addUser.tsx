import prisma from "@/server/prisma";

export default async function addUser(userId: string, userEmail: string) {
  const user = await prisma.user.create({
    data: {
      accountId: userId,
      email: userEmail,
      profiles: { create: { name: "User 1" } },
    },
  });

  return user;
}
