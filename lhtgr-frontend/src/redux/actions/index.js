import { 
    CREATE_PLAYER,
    CREATE_CAMPAIGN,
    PLAYER_ARRAY,
    CURRENT_PLAYER,
    CURRENT_PLAYER_ID,
    CAMPAIGN_ARRAY,
    CAMPAIGN,
    CHARACTER_NAME,
    CHARACTER_CLASS,
    CHARACTER_RACE,
    CHARACTER_ARRAY,
    INCREMENT_STR,
    INCREMENT_DEX,
    INCREMENT_CON,
    INCREMENT_INT,
    INCREMENT_WIS,
    INCREMENT_CHA,
    DECREMENT_STR,
    DECREMENT_DEX,
    DECREMENT_CON,
    DECREMENT_INT,
    DECREMENT_WIS,
    DECREMENT_CHA
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

export function currentPlayer(payload){
    return { type: CURRENT_PLAYER, payload}
}

export function currentPlayerId(payload){
    return { type: CURRENT_PLAYER_ID, payload}
}

export function campaignArray(payload){
    return { type: CAMPAIGN_ARRAY, payload }
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

export function selectCampaign(payload){
    return { type: CAMPAIGN, payload}
}

export function incrementStr(payload){
    return { type: INCREMENT_STR, payload }
}

export function incrementDex(payload){
    return { type: INCREMENT_DEX, payload }
}

export function incrementCon(payload){
    return { type: INCREMENT_CON, payload }
}

export function incrementInt(payload){
    return { type: INCREMENT_INT, payload }
}

export function incrementWis(payload){
    return { type: INCREMENT_WIS, payload }
}

export function incrementCha(payload){
    return { type: INCREMENT_CHA, payload }
}

export function decrementStr(payload){
    return { type: DECREMENT_STR, payload }
}

export function decrementDex(payload){
    return { type: DECREMENT_DEX, payload }
}

export function decrementCon(payload){
    return { type: DECREMENT_CON, payload }
}

export function decrementInt(payload){
    return { type: DECREMENT_INT, payload }
}

export function decrementWis(payload){
    return { type: DECREMENT_WIS, payload }
}

export function decrementCha(payload){
    return { type: DECREMENT_CHA, payload }
}