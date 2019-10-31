import { CREATE_PLAYER, CREATE_CAMPAIGN, PLAYER_ARRAY, CAMPAIGN_ARRAY } from '../constants/action-types'

export function createPlayer(payload){
    return { type: CREATE_PLAYER, payload }
}

export function createCampaign(payload){
    return {type: CREATE_CAMPAIGN, payload}
}

export function playerArray(payload){
    return { type: PLAYER_ARRAY, payload }
}

export function campaignArray(payload){
    return { type: CAMPAIGN_ARRAY, payload }
}