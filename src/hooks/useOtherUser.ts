//User cannot add their own profiles as friends!
import getCurrentUser from "@/backend/actions/getCurrentUser";
import { useMemo } from "react";
import { FullConversationType } from "@/types";
import { Profile } from "@prisma/client";
import useSession from "./useSession";

export default function useOtherUser(
  conversation: FullConversationType | { people: Profile[] }
) {
  const currentUser = useSession();

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
