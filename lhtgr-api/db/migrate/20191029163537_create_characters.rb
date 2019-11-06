class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.belongs_to :player
      t.belongs_to :campaign
      t.string :name
      t.string :primary_class
      t.integer :level
      t.string :race
      t.integer :str
      t.integer :dex
      t.integer :con
      t.integer :int
      t.integer :wis
      t.integer :cha

      t.timestamps
    end
  end
end
