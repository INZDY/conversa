import { useParams } from "next/navigation";
import { useMemo } from "react";

export default function useConversation() {
  const params = useParams();

  const conversationId = useMemo(() => {
    if (!params?.conversationId) {
      return null;
    }
    return +params.conversationId;
  }, [params?.conversationId]);

  const isOpen = useMemo(() => !!conversationId, [conversationId]);

  return useMemo(
    () => ({
      isOpen,
      conversationId,
    }),
    [isOpen, conversationId]
  );
}
