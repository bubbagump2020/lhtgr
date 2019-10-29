class DungeonMastersController < ApplicationController
    before_action :define_current_dm

    def current
        render json: current_dm
    end

    def index
        render json: DungeonMaster.all
    end

    def show
        render json: current_dm
    end

    def dm_params
        params.permit(:username, :password)
    end

    def define_current_dm
        if params[:id]
            @current_dm = DungeonMaster.find(params[:id])
        else
            @current_dm = DungeonMaster.new
        end
    end

    def current_dm
        @current_dm
    end

end