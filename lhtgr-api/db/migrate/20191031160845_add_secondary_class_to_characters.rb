class AddSecondaryClassToCharacters < ActiveRecord::Migration[6.0]
  def change
    add_column :characters, :secondary_class, :string
  end
end
