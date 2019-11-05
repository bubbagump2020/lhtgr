class PlayersController < ApplicationController

    def current
        render json: current_player
    end

    def index
        players = Player.all
        render json: players.to_json(
            :only => [:id, :username],
            :include => {
                :dungeon_master => {
                    :only => [:id, :username]
                }
            }
        )
    end

    def new

    end

    def create
        player = Player.create(player_params)
        render json: player
    end

    def show
        player = Player.find_by(id: params[:id])
        if player
            render json: player.to_json(
                :only => [:id, :username],
                :include => {
                    :dungeon_master => {
                        :only => [:id, :username]
                    }
                }
            )
        else
            render json: { message: 'The dungeon master has not created that player yet'}
        end
    end

    def player_params
        params.permit(:dungeon_master_id, :username, :password)
    end

end