import { create } from "zustand";

export interface ModalStoreInterface {
  videoId?: string;
  isOpen: boolean;
  openModal: (videoId: string) => void;
  closeModal: () => void;
}

// start with default values
const useInfoModal = create<ModalStoreInterface>((set) => ({
  videoId: undefined,
  isOpen: false,
  openModal: (videoId: string) => set({ isOpen: true, videoId }),
  closeModal: () => set({ isOpen: false, videoId: undefined }),
}));

export default useInfoModal;
