class Character < ApplicationRecord
    validates :name, uniqueness: true
    belongs_to :player, foreign_key: "player_id"
    belongs_to :campaign
end
