import { LOGIN } from '../constants/action-types'

export function login(payload){
    return { type: LOGIN, payload }
}