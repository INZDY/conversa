import getCurrentProfile from "@/backend/actions/getCurrentProfile";
import prisma from "@/server/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const currentProfile = await getCurrentProfile();
    const body = await request.json();
    const { name, image, description, profileId, displayEmail } = body;

    if (!currentProfile?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
  
    //removed check same name because we already check before calling this
    const updatedProfile = await prisma.profile.update({
      where: {
        id: profileId,
      },
      data: {
        image: image,
        name: name,
        description: description,
        displayEmail: displayEmail,
      },
    });

    return NextResponse.json(updatedProfile);
  } catch (error: any) {
    console.log(error, "ERROR_SETINGS");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
