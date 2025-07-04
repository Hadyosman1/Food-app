import { create } from "zustand";

export const useAuthModalStore = create<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));
