class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.belongs_to :player
      t.string :name
      t.string :class

      t.timestamps
    end
  end
end
