class RemoveUpdatedAtFromCharacters < ActiveRecord::Migration[6.0]
  def change

    remove_column :characters, :updated_at, :timestamps
  end
end
