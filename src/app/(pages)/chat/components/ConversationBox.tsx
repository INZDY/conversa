"use client";

import getCurrentUser from "@/api/actions/getCurrentUser";
import useOtherUser from "@/hooks/useOtherUser";
import { FullConversationType } from "@/types";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { useCallback, useMemo } from "react";

interface ConversationBoxProps {
  data: FullConversationType;
  selected?: boolean;
}

export default async function ConversationBox({
  data,
  selected,
}: ConversationBoxProps) {
  const otherUser = await useOtherUser(data);
  const currentUser = await getCurrentUser();
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/chat/${data.id}`);
  }, [data.id, router]);

  const lastMessage = useMemo(() => {
    const messages = data.messages || [];

    return messages[messages.length - 1];
  }, [data.messages]);

  const userId = useMemo(() => {
    return currentUser?.id;
  }, [currentUser?.id]);

  const hasSeen = useMemo(() => {
    if (!lastMessage) {
      return false;
    }

    const seenArray = lastMessage.seen || [];

    if (!userId) {
      return false;
    }

    return seenArray.filter((user) => user.userId === userId).length !== 0;
  }, [userId, lastMessage]);

  const lastMessageText = useMemo(() => {
    if (lastMessage?.image) {
      return "Sent an image";
    }

    if (lastMessage?.body) {
      return lastMessage.body;
    }

    return "Started a conversation";
  }, [lastMessage]);

  return (
    <div
      onClick={handleClick}
      className={clsx(
        `
        w-full
        relative
        flex
        items-center
        space-x-3
        hover:bg-neutral-100
        rounded-lg
        transition
        cursor-pointer
        p-3
        `,
        selected ? "block" : "hidden"
      )}
    >
      {/* <Avatar user={otherUser}/> */}
      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <div
            className="
                flex
                justify-between
                item-center
                mb-1
          "
          >
            <p
              className="
                text-md
                font-medium
                text-gray-900
            "
            >
              {data.name || otherUser.name}
            </p>
            {lastMessage?.created && (
              <p
                className="
                    text-xs
                    text-gray-400
                    font-light
                "
              >
                {format(new Date(lastMessage.created), "p")}
              </p>
            )}
          </div>
          <p
            className={clsx(`
            truncate
            text-sm
            `,
              hasSeen ? "text-gray-500" : "text-black font-medium"
            )}
          >
            {lastMessageText}
          </p>
        </div>
      </div>
    </div>
  );
}
