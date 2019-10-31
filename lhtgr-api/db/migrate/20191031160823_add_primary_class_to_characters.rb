class AddPrimaryClassToCharacters < ActiveRecord::Migration[6.0]
  def change
    add_column :characters, :primary_class, :string
  end
end
