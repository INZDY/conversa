import createSupabaseApiRouteClient from "@/backend/supabase/api";
import { pusherServer } from "@/server/pusher";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const supabase = createSupabaseApiRouteClient(request, response);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const session = user;

  if (!session?.id) {
    return response.status(401);
  }

  const socketId = request.body.socket_id;
  const channel = request.body.channel_name;
  const data = {
    user_id: session.id,
  };

  const authResponse = pusherServer.authorizeChannel(socketId, channel, data);

  return response.send(authResponse);
}
