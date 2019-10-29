class CreateCampaigns < ActiveRecord::Migration[6.0]
  def change
    create_table :campaigns do |t|
      t.belongs_to :dungeon_master
      t.string :name

      t.timestamps
    end
  end
end
