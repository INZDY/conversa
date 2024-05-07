import getCurrentProfile from "@/backend/actions/getCurrentProfile";
import prisma from "@/server/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const currentProile = await getCurrentProfile();
    const body = await request.json();
    const { id } = body;

    if (!currentProile?.userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const ownFriendAdded = await prisma.profile.update({
      where: {
        id: currentProile.id,
      },
      data: {
        contacts: {
          connect: { id: id },
        },
      },
    });

    if (!ownFriendAdded) {
      return new NextResponse("Something is wrong with adding a friend", {
        status: 500,
      });
    }

    const otherFriendAdded = await prisma.profile.update({
      where: {
        id: id,
      },
      data: {
        contacts: {
          connect: { id: currentProile.id },
        },
      },
    });

    if (!otherFriendAdded) {
      return new NextResponse("Something is wrong with the other friend add", {
        status: 500,
      });
    }

    return NextResponse.json({ ownFriendAdded, otherFriendAdded });
  } catch (error: any) {
    console.log(error, "ERROR_SETINGS");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
