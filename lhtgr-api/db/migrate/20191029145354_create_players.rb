class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.belongs_to :dungeon_master
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
