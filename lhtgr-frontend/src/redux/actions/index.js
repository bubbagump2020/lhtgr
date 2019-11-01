import { 
    CREATE_PLAYER,
    CREATE_CAMPAIGN,
    PLAYER_ARRAY,
    CURRENT_PLAYER,
    CURRENT_PLAYER_NAME,
    CURRENT_PLAYER_ID,
    CAMPAIGN_ARRAY,
    CAMPAIGN,
    INCREMENT,
    DECREMENT,
    CHARACTER_NAME,
    CHARACTER_CLASS,
    CHARACTER_RACE,
    CHARACTER_ARRAY
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

export function characterArray(payload){
    return { type: CHARACTER_ARRAY, payload }
}

export function characterName(payload){
    return { type: CHARACTER_NAME, payload}
}

export function characterClass(payload){
    return { type: CHARACTER_CLASS, payload }
}

export function characterRace(payload){
    return { type: CHARACTER_RACE, payload }
}

export function campaign(payload){
    return { type: CAMPAIGN, payload}
}

export function currentPlayer(payload){
    return { type: CURRENT_PLAYER, payload}
}

export function currentPlayerName(payload){
    return { type: CURRENT_PLAYER_NAME, payload }
}

export function currentPlayerId(payload){
    return { type: CURRENT_PLAYER_ID, payload}
}