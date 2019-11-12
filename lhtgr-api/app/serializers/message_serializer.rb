class MessageSerializer < ActiveModel::Serializer
  attributes :id, :chat_room_id, :text, :created_at
end
