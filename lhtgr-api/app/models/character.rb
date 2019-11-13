class Character < ApplicationRecord
    validates :name, uniqueness: true
    belongs_to :player
    belongs_to :campaign
end
