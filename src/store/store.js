import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useActiveTabFurniture = create(
  persist((set) => ({
    isActiveCard: null,
    setIsActiveCard: (card) => set({ isActiveCard: card }),
  })),
);

export const useToggleLike = create(
  persist((set) => ({
    likes: {}, // Храним лайки как объект
    toggleLike: (id) =>
      set((state) => ({
        likes: {
          ...state.likes,
          [id]: !state.likes[id], // Меняем состояние для конкретной карточки
        },
      })),
  })),
);
