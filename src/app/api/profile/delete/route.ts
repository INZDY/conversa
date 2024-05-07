import getCurrentProfile from "@/backend/actions/getCurrentProfile";
import prisma from "@/server/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const currentProfile = await getCurrentProfile();
    const body = await request.json();
    const { id } = body;
   
    if(!currentProfile?.id){
      return new NextResponse('Unauthorized',{status:401});
    }

    

   

    const deleteProfile = await prisma.profile.delete({
      where:{
        id: id
      },
      
    });

    return NextResponse.json(deleteProfile)
  } catch (error: any) {
    console.log(error, "ERROR_SETINGS");
    return new NextResponse("Internal Error", { status: 500 });
  }
  
}
