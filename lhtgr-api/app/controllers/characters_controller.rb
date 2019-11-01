class CharactersController < ApplicationController
    # before_action :define_current_character

    def new

    end

    def create
        character = Character.create(character_params)
        render json: character
    end

    def index
        render json: Character.all
    end

    # def current
    #     render json: current_character
    # end

    # def show
    #     render json: current_character
    # end

    # def define_current_character
    #     if params[:id]
    #         @current_character = Character.find(params[:id])
    #     else
    #         @current_character = Character.new
    #         @current_character.save
    #     end
    # end
    
    # def current_character
    #     @current_character
    # end

    def character_params
        params.permit(
            :player_id,
            :campaign_id,
            :name,
            :primary_class,
            :str,
            :dex,
            :con,
            :int,
            :wis,
            :cha
        )
    end
end