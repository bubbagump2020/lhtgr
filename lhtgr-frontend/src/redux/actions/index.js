import { 
    PLAYER_NAME,
    PLAYER_PASSWORD,
    CREATE_CAMPAIGN,
    PLAYER_ARRAY,
    CURRENT_DM_NAME,
    CURRENT_DM_PASSWORD,
    CURRENT_DM_ID,
    CURRENT_PLAYER,
    CURRENT_PLAYER_NAME,
    CURRENT_PLAYER_ID,
    CURRENT_PLAYER_PASSWORD,
    CAMPAIGN_ARRAY,
    CAMPAIGN,
    CHARACTER,
    UPDATED_CHARACTER,
    CHARACTER_NAME,
    CHARACTER_CLASS,
    CHARACTER_RACE,
    CHARACTER_LEVEL,
    CHARACTER_ARRAY,
    CHARACTER_CREATION_RESET,
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

export function playerName(payload){
    return { type: PLAYER_NAME, payload }
}

export function playerPassword(payload){
    return { type: PLAYER_PASSWORD, payload }
}

export function createCampaign(payload){
    return {type: CREATE_CAMPAIGN, payload}
}

export function playerArray(payload){
    return { type: PLAYER_ARRAY, payload }
}

export function currentDmName(payload){
    return { type: CURRENT_DM_NAME, payload }
}

export function currentDmPassword(payload){
    return { type: CURRENT_DM_PASSWORD, payload }
}

export function currentDmId(payload){
    return { type: CURRENT_DM_ID, payload }
}

export function currentPlayer(payload){
    return { type: CURRENT_PLAYER, payload}
}

export function currentPlayerName(payload){
    return { type: CURRENT_PLAYER_NAME, payload }
}

export function currentPlayerPassword(payload){
    return { type: CURRENT_PLAYER_PASSWORD, payload }
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

export function character(payload){
    return { type: CHARACTER, payload }
}

export function updatedCharacter(payload){
    return { type: UPDATED_CHARACTER, payload }
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

export function characterLevel(payload){
    return { type: CHARACTER_LEVEL, payload }
}

export function characterCreationReset(payload){
    return { type: CHARACTER_CREATION_RESET, payload }
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