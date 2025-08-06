"use client";

import { useEffect } from "react";
import { create } from "zustand";

// Zustand store inside the component file
const useLoaderStore = create<{
  isLoading: boolean;
  setLoading: (value: boolean) => void;
}>((set) => ({
  isLoading: true,
  setLoading: (value) => set({ isLoading: value }),
}));

export { useLoaderStore };

export default function Loader() {
  const isLoading = useLoaderStore((s) => s.isLoading);

  // Prevent scrolling when loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup when component unmounts (optional but good practice)
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-screen w-screen bg-black text-white text-2xl transition-opacity duration-300">
      <div className="relative">
        <div className="container">
            <div className="loader"></div>
            <div className="loader"></div>
            <div className="loader"></div>
        </div>
        <p className="pt-50">Loading...</p>
      </div>
    </div>
  );
}
