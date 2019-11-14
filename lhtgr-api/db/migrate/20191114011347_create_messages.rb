class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.string :text
      t.references :player, null: false, foreign_key: true
      t.references :dungeon_master, null: false, foreign_key: true

      t.timestamps
    end
  end
end
