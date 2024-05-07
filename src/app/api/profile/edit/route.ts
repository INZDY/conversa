import getCurrentProfile from "@/backend/actions/getCurrentProfile";
import prisma from "@/server/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const currentProfile = await getCurrentProfile();
    const body = await request.json();
    const { name, image, desciption ,profileId } = body;
   
    if(!currentProfile?.id){
      return new NextResponse('Unauthorized',{status:401});
    }
    console.log("here",body)
    const checkProfile = await prisma.profile.findMany({
      where:{
        name: name,
        userId: currentProfile.userId,
      }
      
     })
    
     if (checkProfile.length !== 0){
      return new NextResponse("Duplicated profile name", { status: 502 });
     }
    console.log("here2")
    const updatedProfile = await prisma.profile.update({
      where:{
        id: profileId
      },
      data: {
        image: image,
        name: name,
        description: desciption,
      }
    });

    return NextResponse.json(updatedProfile)
  } catch (error: any) {
    console.log(error, "ERROR_SETINGS");
    return new NextResponse("Internal Error", { status: 500 });
  }
  
}
