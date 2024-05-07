import getCurrentProfile from "@/backend/actions/getCurrentProfile";
import prisma from "@/server/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const currentProfile = await getCurrentProfile();
    const body = await request.json();
    const { name, image, description, displayEmail } = body;

    if (!currentProfile?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const checkProfile = await prisma.profile.findMany({
      where: {
        name: name,
        userId: currentProfile.userId,
      },
    });

    if (checkProfile.length !== 0) {
      return new NextResponse("Duplicated profile name", { status: 502 });
    }

    const createProfile = await prisma.profile.create({
      data: {
        user: { connect: { id: currentProfile.userId } },
        name: name,
        image: image,
        description: description,
        displayEmail: displayEmail,
        selected: false,
      },
    });

    return NextResponse.json(createProfile);
  } catch (error: any) {
    console.log(error, "ERROR_SETINGS");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
