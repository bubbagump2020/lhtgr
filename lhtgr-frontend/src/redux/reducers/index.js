import * as actions from '../constants/action-types'

const initialState = {
    players: [],
    campaigns: [],
    characters: [],
    customCharClass: '',
    playerName: '',
    playerPassword: '',
    currentPlayer: {
        currentPlayerName: '',
        currentPlayerPassword: '',
        currentPlayerId: 0
    },
    togglePlayerActive: false,
    campaign: {
        value: ''
    },
    toggleCampaignActive: false,
    character: {
        name: '',
        primary_class: '',
        level: 1,
        race: '',
        str: 10 ,
        dex: 10 ,
        con: 10 ,
        int: 10 ,
        wis: 10 ,
        cha: 10 
    }
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
    if(action.type === actions.CURRENT_PLAYER){
        return {
            ...state,
            currentPlayer: action.payload
        }
    }
    if(action.type === actions.CURRENT_PLAYER_NAME){
        return {
            ...state,
            currentPlayer: {
                ...state.currentPlayer,
                currentPlayerName: action.payload
            }
        }
    }
    if(action.type === actions.CURRENT_PLAYER_PASSWORD){
        return {
            ...state,
            currentPlayer: {
                ...state.currentPlayer,
                currentPlayerPassword: action.payload
            }
        }
    }
    if(action.type === actions.CURRENT_PLAYER_ID){
        return {
            ...state,
            currentPlayer: {
                ...state.currentPlayer,
                currentPlayerId: action.payload
            }
        }
    }
    if(action.type === actions.CAMPAIGN_ARRAY){
        return {
            ...state,
            campaigns: action.payload
        }
    }
    if(action.type === actions.CAMPAIGN){
        return {
            ...state,
            campaign: action.payload
        }
    }
    if(action.type === actions.CHARACTER){
        return {
            ...state,
            character: action.payload
        }
    }
    if(action.type === actions.CHARACTER_NAME){
        return {
            ...state,
            character: { ...state.character,
                name: action.payload
            }
        }
    }
    if(action.type === actions.CHARACTER_CLASS){
        return {
            ...state,
            character: { ...state.character,
                primary_class: action.payload
            }
        }
    }
    if(action.type === actions.CHARACTER_RACE){
        return {
            ...state,
            character: { ...state.character,
                race: action.payload
            }
        }
    }
    if(action.type === actions.CHARACTER_LEVEL){
        return{
            ...state,
            character: {
                ...state.character,
                level: action.payload
            }
        }
    }
    if(action.type === actions.CHARACTER_ARRAY){
        return {
            ...state,
            characters: action.payload
        }
    }
    if(action.type === actions.CHARACTER_CREATION_RESET){
        return {
            ...state,
            character: {
                name: '',
                primary_class: '',
                level: 1,
                race: '',
                str: 10 ,
                dex: 10 ,
                con: 10 ,
                int: 10 ,
                wis: 10 ,
                cha: 10 
            }
        }
    }
    if(action.type === actions.INCREMENT_STR){
        return{
            ...state,
            character: {
                ...state.character,
                    str: action.payload
            }
        }
    }
    if(action.type === actions.INCREMENT_DEX){
        return{
            ...state,
            character: {
                ...state.character,
                    dex: action.payload
            }
        }
    }
    if(action.type === actions.INCREMENT_CON){
        return{
            ...state,
            character: {
                ...state.character,
                    con: action.payload
            }
        }
    }
    if(action.type === actions.INCREMENT_INT){
        return{
            ...state,
            character: {
                ...state.character,
                    int: action.payload
            }
        }
    }
    if(action.type === actions.INCREMENT_WIS){
        return{
            ...state,
            character: {
                ...state.character,
                    wis: action.payload
            }
        }
    }
    if(action.type === actions.INCREMENT_CHA){
        return{
            ...state,
            character: {
                ...state.character,
                    cha: action.payload
            }
        }
    }
    if(action.type === actions.DECREMENT_STR){
        return{
            ...state,
            character: {
                ...state.character,
                    str: action.payload
            }
        }
    }
    if(action.type === actions.DECREMENT_DEX){
        return{
            ...state,
            character: {
                ...state.character,
                    dex: action.payload
            }
        }
    }
    if(action.type === actions.DECREMENT_CON){
        return{
            ...state,
            character: {
                ...state.character,
                    con: action.payload
            }
        }
    }
    if(action.type === actions.DECREMENT_INT){
        return{
            ...state,
            character: {
                ...state.character,
                    int: action.payload
            }
        }
    }
    if(action.type === actions.DECREMENT_WIS){
        return{
            ...state,
            character: {
                ...state.character,
                    wis: action.payload
            }
        }
    }
    if(action.type === actions.DECREMENT_CHA){
        return{
            ...state,
            character: {
                ...state.character,
                    cha: action.payload
            }
        }
    }
    return state
}

export default rootReducer