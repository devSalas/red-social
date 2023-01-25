import {create} from 'zustand';

export const useStore = create((set)=>({
  user:null,
  addUser: (user) => set((state)=>({user: user}))
}))
