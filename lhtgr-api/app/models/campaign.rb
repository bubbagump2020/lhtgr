class Campaign < ApplicationRecord
    belongs_to :dungeon_master
    has_many :characters
    has_many :players, through: :characters
end
