import { create } from "zustand";

type UiState = {
  mobileMenuOpen: boolean;
  quoteModalOpen: boolean;
  activeServiceTab: string;
  setMobileMenuOpen: (open: boolean) => void;
  setQuoteModalOpen: (open: boolean) => void;
  setActiveServiceTab: (tab: string) => void;
};

export const useUiStore = create<UiState>((set) => ({
  mobileMenuOpen: false,
  quoteModalOpen: false,
  activeServiceTab: "HVAC Solutions",
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  setQuoteModalOpen: (open) => set({ quoteModalOpen: open }),
  setActiveServiceTab: (tab) => set({ activeServiceTab: tab }),
}));
