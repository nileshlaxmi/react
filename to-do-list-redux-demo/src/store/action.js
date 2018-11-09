import * as actions from './actionTypes';
import { type } from 'os';

import ReduxThunk from 'redux-thunk';
import {fetchAllBotService} from '../../services/fetchAllBot';

/**  FETCH BOT NAME ACTIONS */
export const FETCH_ALL_BOTS = 'BOTS/FETCH_ALL_BOTS';
export const FETCH_ALL_BOTS_SUCCESS = 'BOTS/FETCH_ALL_BOTS_SUCCESS';
export const FETCH_ALL_BOTS_FAILURE = 'BOTS/FETCH_ALL_BOTS_FAILURE';
export const SELECT_LANGUAGE = 'BOTS/SELECT_LANGUAGE';

export function socketDisconnected(){
    return {
      type: actions.DISCONNECTED
    }
  }
  
  export function chatStarted(){
    return {
      type: actions.CHAT_STARTED
    }
  }
  
  export function selectChatbot(chatbot){
    return {
      type: actions.SELECT_CHATBOT,
      payload: chatbot
    }
  }