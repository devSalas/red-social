import { create } from 'zustand';

export const useStoreChat = create((set) => ({
  setLimpiarChat: false,
  messages: [],
  setMessages : (message ) => set( (state) => ({  ...state,messages:[...message]}) ),
  limpiarChat:  () => set( (state) => ({  messages:[]}) ),
  showChat:false,
  setShowChat :(value ) => set( (state) => ({  ...state,showChat:value}) ),

}));

export const useStoreHost = create((set) => ({
  host: {_id:"63cb4827bc13f76222dac670"},
  setHost: (userData) => set((state) => ({...state, host: userData })),
}));

export const useStoreDataChat = create( (set)=>({ 
  details:{},
  setDetails: (details)=>set( (state) =>({...state,details}))
  }) )

  export const useStoreFriend =  create((set) => ({
    friend: {},
    setFriend: (Friend) => set((state) => ({...state, friend: Friend})),
  }));

  export const useStoreShowChatMobile =  create((set) => ({
    showChatMobile:false,
    setShowChatMobile: (value) => set((state) => ({...state,showChatMobile:value})),
  }));