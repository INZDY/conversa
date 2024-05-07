import getCurrentProfile from "@/backend/actions/getCurrentProfile";
import prisma from "@/server/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const currentProile = await getCurrentProfile();
    const body = await request.json();
    const { name } = body;

    if (!currentProile?.userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const searchedResult = await prisma.profile.findMany({
      where: {
        name: name,
        // not already a friend & not have the same userId
        NOT: {
          OR: [
            { contactsOf: { some: { id: currentProile.id } } },
            { userId: currentProile.userId },
          ],
        },
      },
    });

    return NextResponse.json(searchedResult);
  } catch (error: any) {
    console.log(error, "ERROR_SETINGS");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
