class Player < ApplicationRecord
    has_secure_password
    belongs_to :dungeon_master
    has_many :characters
    has_many :messages
end
