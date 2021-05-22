import React from 'react';
import { ActionType } from '../StoreContext';


export type DialogsType = {
  id: number
  name: string
};

export type MessagesType = {
  id: number
  message: string
};

export type InitialStateType = typeof initialState


const SEND_MESSAGE = 'SEND-MASSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const initialState = {
  dialogs: [
    { id: 1, name: 'Yra' },
    { id: 2, name: 'Dima' },
    { id: 3, name: 'Vlad' },
    { id: 4, name: 'Dmitry' },
    { id: 5, name: 'Alex' },
    { id: 6, name: 'Natasha' },
  ] as Array<DialogsType>,
  messages: [
    { id: 1, message: 'HI' },
    { id: 2, message: 'How is your it-kamasutra?' },
    { id: 3, message: 'YO' },
    { id: 4, message: 'YO' },
  ] as Array<MessagesType>,
  newMessageBody: ''
};

const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      const body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
}

export const sendMessageC = () => {
  return {
    type: SEND_MESSAGE,
  } as const
};
export const updateNewMessageC = (body: string) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  } as const
};

export default dialogsReducer