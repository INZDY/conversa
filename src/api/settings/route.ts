//Incomplete
import { NextResponse } from "next/server";
import getCurrentProfile from "../actions/getCurrentProfile";

export default async function POST(request: Request) {
  try {
    const currentProfile = await getCurrentProfile();
    const body = await request.json();
    const { name, image } = body;
  } catch (error: any) {
    console.log(error, "ERROR_SETINGS");
    return new NextResponse("Internal Error", { status: 500 });
  }78
}
