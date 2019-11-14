class Message < ApplicationRecord
  belongs_to :player
  belongs_to :dungeon_master
end
