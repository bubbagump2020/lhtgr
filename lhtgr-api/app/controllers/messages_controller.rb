class MessagesController < ApplicationController

    def index
        messages = Message.all
        render json: messages
    end

    def create
        message = Message.create(message_params)
        # byebug
        render json: message
        ActionCable.server.broadcast 'messages_channel', message
       
    end

    def message_params
        params.permit(:text)
    end

end
