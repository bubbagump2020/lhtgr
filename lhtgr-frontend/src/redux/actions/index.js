import { 
    CREATE_PLAYER,
    CREATE_CAMPAIGN,
    PLAYER_ARRAY,
    CAMPAIGN_ARRAY,
    INCREMENT,
    DECREMENT,
    CHARACTER_NAME,
    CHARACTER_CLASS


} from '../constants/action-types'

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

export function increment(payload){
    return { type: INCREMENT, payload }
}

export function decrement(payload){
    return { type: DECREMENT, payload }
}

export function characterName(payload){
    return { type: CHARACTER_NAME, payload}
}

export function characterClass(payload){
    return { type: CHARACTER_CLASS, payload }
}