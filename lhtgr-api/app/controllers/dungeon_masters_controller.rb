class DungeonMastersController < ApplicationController

    def index
        dungeon_masters = DungeonMaster.all
        render json:  dungeon_masters, only: [:id, :username]
    end

    def show
       dungeon_master = DungeonMaster.find_by(id: params[:id])
       render json: dungeon_master, only: [:id, :username] 
    end

    def dm_params
        params.permit(:username, :password)
    end


end