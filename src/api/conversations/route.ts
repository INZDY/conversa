import getCurrentProfile from "../../backend/actions/getCurrentProfile";
import { NextResponse } from "next/server";
import prisma from "@/server/prisma";

export async function POST(request: Request) {
  try {
    const currentProfile = await getCurrentProfile();
    const body = await request.json();
    const { profileId, isGroup, members, name } = body;

    if (!currentProfile?.userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (isGroup && (!members || members.length < 2 || !name)) {
      return new NextResponse("Invalid Data", { status: 400 });
    }

    if (isGroup) {
      const newConversation = await prisma.conversation.create({
        data: {
          name,
          isGroup,
          people: {
            // current using userId, name of the profile to identify
            // may change to id of the profile if it is hard
            connect: [
              ...members.map((members: { id: number }) => ({
                id: members.id,
              })),
              {
                id: currentProfile.id,
              },
            ],
          },
        },
        include: {
          people: true,
        },
      });

      return NextResponse.json(newConversation);
    }

    const existingConversations = await prisma.conversation.findMany({
      where: {
        AND: [
          { people: { some: { id: currentProfile.id } } },
          { people: { some: { id: profileId } } },
        ],
      },
    });

    const singleConversation = existingConversations[0];

    if (singleConversation) {
      return NextResponse.json(singleConversation);
    }

    const newConversation = await prisma.conversation.create({
      data: {
        people: {
          connect: [
            {
              id: currentProfile.id,
            },
            {
              id: profileId,
            },
          ],
        },
      },
      include: {
        people: true,
      },
    });

    return NextResponse.json(newConversation);
  } catch (error: any) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
