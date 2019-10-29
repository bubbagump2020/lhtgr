class AuthenticationController < ApplicationController
    def dm_login
        dm = DungeonMaster.find_by({ username: params[:username] })
        if(dm && dm.authenticate(params[:password]))
            token = JWT.encode( {id: dm.id }, 'asdljasldkfjs', 'HS256' )
            render json: { success: true, id: dm.id, token: token }
        else
            render json: { success: false, id: nil}
        end
    end
end