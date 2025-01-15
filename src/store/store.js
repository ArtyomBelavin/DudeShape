import { create } from 'zustand';

export const useActiveTabFurniture = create((set) => ({
  isActiveCard: null,
  setIsActiveCard: (card) => set({ isActiveCard: card }),
}));
