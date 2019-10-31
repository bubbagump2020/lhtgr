import * as actions from '../constants/action-types'

const characterAttributes = {
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10
}

const characterAttrModifiers = {
    strMod: Math.floor((characterAttributes.str - 10) / 2),
    dexMod: Math.floor((characterAttributes.dex - 10) / 2),
    conMod: Math.floor((characterAttributes.con - 10) / 2),
    intMod: Math.floor((characterAttributes.int - 10) / 2),
    wisMod: Math.floor((characterAttributes.wis - 10) / 2),
    chaMod: Math.floor((characterAttributes.cha - 10) / 2),
}

const characterSavingThrows = {
        fort: 0 + characterAttrModifiers.conMod,
        ref: 0 + characterAttrModifiers.dexMod,
        will: 0 + characterAttrModifiers.wisMod,
}

const initialState = {
    players: [],
    campaigns: [],
    characters: [],
    playerName: '',
    playerPassword: '',
    togglePlayerActive: false,
    campaignName: '',
    toggleCampaignActive: false,
    characterName: '',
    characterLevel: 1,
    characterAlignment: 'neutral neutral',
    characterRace: '',
    characterAttributes: characterAttributes,
    characterAttrModifiers: characterAttrModifiers,
    characterSavingThrows: characterSavingThrows
}

function rootReducer(state = initialState, action) {
    if(action.type === actions.CREATE_PLAYER){
        return {
            ...state,
            playerName: action.payload,
            playerPassword: action.payload
        }
    }
    if(action.type === actions.PLAYER_ARRAY){
        return {
            ...state,
            players: action.payload
        }
    }
    if(action.type === actions.CAMPAIGN_ARRAY){
        return {
            ...state,
            campaigns: action.payload
        }
    }
    return state
}

export default rootReducer