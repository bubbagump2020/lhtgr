class ConversationsController < ApplicationController
    def index 
        conversations = Conversation.all
        render json: conversations
    end

    def create
        conversation = Conversation.create(conversation_params)
        ActionCable.server.broadcast 'conversations_channel'
        render json: conversation
    end

    private
    def conversation_params
        params.require(:conversation).permit(:title)
    end
end
