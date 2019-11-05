class CampaignsController < ApplicationController

    def new

    end

    def create
        campaign = Campaign.create(campaign_params)
        render json: campaign
    end

    def show
        campaign = Campaign.find_by(id: params[:id])
        render json: campaign.to_json(
            :only => [
                :id, :name
            ],
            :include => {
                :dungeon_master => {
                    :only => [:id, :username]
                }
            }
        )
    end

    def index
        campaigns = Campaign.all
        render json: campaigns.to_json(
            :only => [
                :id, :name
            ],
            :include => {
                :dungeon_master => {
                    :only => [:id, :username]
                }
            }
        )
    end

    def campaign_params
        params.permit(:dungeon_master_id, :name)
    end
end