class CampaignsController < ApplicationController

    def new

    end

    def create
        campaign = Campaign.create(campaign_params)
        render json: campaign
    end

    def current
        render json: current_campaign
    end

    def show
        render json: current_campaign
    end

    def index
        render json: Campaign.all
    end

    def define_current_campaign
        if params[:id]
            @current_campaign = Campaign.find(params[:id])
        else
            @current_campaign = Campaign.new
        end
    end
    
    def current_campaign
        @current_campaign
    end

    def campaign_params
        params.permit(:dungeon_master_id, :name)
    end
end