import { create } from "zustand";

interface useStoreMedalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useStoreModal = create<useStoreMedalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }), // Fixed typo here
    onClose: () => set({ isOpen: false }), // Fixed typo here
}));
