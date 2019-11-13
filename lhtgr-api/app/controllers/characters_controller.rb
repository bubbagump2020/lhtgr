class CharactersController < ApplicationController

    def new

    end

    def create
        character = Character.create(character_params)
        render json: character
    end

    def index
        player = Player.find_by(params[:id])
        puts player.characters
        characters = Character.all
        render json: player.characters
        # render json: characters.to_json(
        #     :only => [
        #         :name, :primary_class, :level, :race,
        #         :str, :dex, :con, :int, :wis, :cha
        #     ],
        #     :include => {
        #         :player => {
        #             :only => [:id, :username],
        #             :include => {
        #                 :dungeon_master => {
        #                     :only => [:id, :username]
        #                 }
        #             }
        #         },
        #         :campaign => {
        #             :only => [:id, :name]
        #         }
        #     }
        # )
    end

    def show
        character = Character.find_by(id: params[:id])
        render json: character.to_json(
            :only => [
                :id, :name, :primary_class, :level, :race,
                :str, :dex, :con, :int, :wis, :cha
            ],
            :include => {
                :player => {
                    :only => [:id, :username],
                    :include => {
                        :dungeon_master => {
                            :only => [:id, :username]
                        }
                    }
                },
                :campaign => {
                    :only => [:id, :name]
                }
            }
        )
    end

    def edit
        character = Character.find_by(id: params[:id])
        # render json: character.to_json(
        #     :only => [
        #         :id, :name, :primary_class, :level, :race,
        #         :str, :dex, :con, :int, :wis, :cha
        #     ],
        #     :include => {
        #         :player => {
        #             :only => [:id, :username],
        #             :include => {
        #                 :dungeon_master => {
        #                     :only => [:id, :username]
        #                 }
        #             }
        #         },
        #         :campaign => {
        #             :only => [:id, :name]
        #         }
        #     }
        # )
    end

    def update
        character = Character.find_by(id: params[:id])
        character.update(character_params)
        render json: character
    end


    def character_params
        params.permit(
            :player_id,
            :campaign_id,
            :name,
            :primary_class,
            :level,
            :race,
            :str,
            :dex,
            :con,
            :int,
            :wis,
            :cha
        )
    end
end