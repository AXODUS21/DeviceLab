"use client";

import { create } from "zustand";

// Zustand store inside the component file
const useLoaderStore = create<{
  isLoading: boolean;
  setLoading: (value: boolean) => void;
}>((set) => ({
  isLoading: true,
  setLoading: (value) => set({ isLoading: value }),
}));

export { useLoaderStore }; // Export so you can use it in ModelView or elsewhere

export default function Loader() {
  const isLoading = useLoaderStore((s) => s.isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-screen w-screen bg-black text-white text-2xl transition-opacity duration-300">
      Loading 3D Model...
    </div>
  );
}
