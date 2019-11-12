class ChatRoomsChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "chat_rooms_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
