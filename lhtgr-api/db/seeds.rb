# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
DungeonMaster.destroy_all
dungeon_master = DungeonMaster.create(
    username: 'admin',
    password: 'password'
)

Player.destroy_all
player1 = Player.create(
    dungeon_master_id: dungeon_master.id,
    username: 'player1',
    password: 'password'
)