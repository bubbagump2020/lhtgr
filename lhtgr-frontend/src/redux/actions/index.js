import { CREATE_PLAYER, CREATE_CAMPAIGN } from '../constants/action-types'

export function createPlayer(payload){
    return { type: CREATE_PLAYER, payload }
}

export function createCampaign(payload){
    return {type: CREATE_CAMPAIGN, payload}
}