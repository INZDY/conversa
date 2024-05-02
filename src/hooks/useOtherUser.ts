//User cannot add their own profiles as friends!
//Difference from original: is an async function
import getCurrentUser from "@/api/actions/getCurrentUser";
import { useMemo } from "react";
import { FullConversationType } from "@/types";
import { Profile } from "@prisma/client";

export default async function useOtherUser(
  conversation: FullConversationType | { people: Profile[] }
) {
  const currentUser = await getCurrentUser();

  const otherUser = useMemo(() => {
    //either this or currentProfile works because
    //all profiles have same userId
    //this covers all profiles in one go
    const currentUserId = currentUser?.id;

    const otherUser = conversation.people.filter(
      (user) => user.userId !== currentUserId
    );

    return otherUser[0];
  }, [currentUser?.id, conversation.people]);

  return otherUser;
}
