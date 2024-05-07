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

    const unselectedCurrentProfile = await prisma.profile.update({
      where: { id: currentProile.id },
      data: { selected: false },
    });

    if (!unselectedCurrentProfile) {
      return new NextResponse(
        "Something is wrong with unselecting current profile",
        { status: 500 }
      );
    }

    const selectedAnotherProfile = await prisma.profile.update({
      where: { id: id },
      data: { selected: true },
    });

    if (!selectedAnotherProfile) {
      return new NextResponse(
        "Something is wrong with selecting another profile",
        { status: 500 }
      );
    }

    return NextResponse.json({
      unselectedCurrentProfile,
      selectedAnotherProfile,
    });
  } catch (error: any) {
    console.log(error, "ERROR_SETINGS");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
