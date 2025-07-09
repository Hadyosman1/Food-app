import { create } from "zustand";

export const useAuthModalStore = create<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  message: string;
  setMessage: (message: string) => void;
}>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  message: "",
  setMessage: (message) => set({ message }),
}));
