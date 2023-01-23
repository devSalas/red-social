import { create } from 'zustand';

export const useStoreChat = create((set) => ({
  limpiarChat: false,
  setLimpiarChat: false,
  messages: [],

  setMessages : (message ) => set( (state) => ({  ...state,messages:[...message]}) )

}));

export const useStoreHost = create((set) => ({
  host: {_id:"63cb4827bc13f76222dac670"},
  setHost: (userData) => set((state) => ({...state, host: userData })),
}));

export const useStoreDataChat = create( (set)=>({ 
  details:{},
  setDetails: (details)=>set( (state) =>({...state,details}))
  }) )
