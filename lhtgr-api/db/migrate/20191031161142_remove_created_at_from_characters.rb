class RemoveCreatedAtFromCharacters < ActiveRecord::Migration[6.0]
  def change

    remove_column :characters, :created_at, :timestamps
  end
end
