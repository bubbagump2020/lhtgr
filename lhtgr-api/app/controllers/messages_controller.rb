class MessagesController < ApplicationController

    def index
        messages = Message.all
        render json: messages
    end

    def create
        message = Message.create(message_params)
        ActionCable.server.broadcast 'messages_channel'
        render json: message
    end

    def message_params
        params.permit(:text, :player_id, :dungeon_master_id, :created_at)
    end

end
