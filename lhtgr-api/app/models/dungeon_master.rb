class DungeonMaster < ApplicationRecord
    has_secure_password
    has_many :players
    has_many :characters, through: :players
    has_many :campaigns
    has_many :messages
end
