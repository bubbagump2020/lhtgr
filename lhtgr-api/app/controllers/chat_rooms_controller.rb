class ChatRoomsController < ApplicationController
    def index
        chat_rooms = ChatRoom.all
        render json: chat_rooms
    end

    def create
        chat_room = ChatRoom.new(chat_room_params)
        if chat_room.save
            serialized_data = ActiveModelSerializers::Adapter:Json.new(
                ChatRoomSerializer.new(chat_room)
            ).serializable_hash
            ActionCable.server.broadcast 'chat_rooms_channel', serialized_data
            head :ok
        end
    end

    def chat_room_params
        params.require(:chat_room).permit(:title)
    end
end
