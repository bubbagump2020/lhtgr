class PlayersController < ApplicationController
    before_action :define_current_player

    def current
        render json: current_player
    end

    def index
        players = Player.all
        render json: players
    end

    def create
        player = Player.create(player_params)
        render json: player
    end

    def show
        render json: current_player
    end

    def define_current_player
        if params[:id]
            @current_player = Player.find(params[:id])
        else
            @current_player = Player.new
        end
    end

    def current_player
        @current_player
    end

    def player_params
        params.permit(:dungeon_master_id, :username, :password)
    end

end