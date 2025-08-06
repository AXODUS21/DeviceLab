"use client"
import { create } from "zustand";
import Model from "@/models/Iphone";
import { Macbook } from "@/models/Macbook";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DownloadButton from "@/components/DownloadButton";

export const modelArr = [
  { id: 0, model: <Model /> },
  { id: 1, model: <Macbook /> },
];

export type CarouselState = {
  index: number;
  moveLeft: () => void;
  moveRight: () => void;
  currentModel: React.ReactNode;
};

export const useCarouselStore = create<CarouselState>((set) => ({
  index: 0,
  moveLeft: () =>
    set((state) => {
      const next = (state.index - 1 + modelArr.length) % modelArr.length;
      return { index: next, currentModel: modelArr[next].model };
    }),
  moveRight: () =>
    set((state) => {
      const next = (state.index + 1) % modelArr.length;
      return { index: next, currentModel: modelArr[next].model };
    }),
  currentModel: modelArr[0].model,
}));

const Carousel = () => {
  const { moveLeft, moveRight } = useCarouselStore();
  return (
    <div>
      <div className="min-h-screen flex justify-around items-center">
        <button className="z-30" onClick={moveLeft}>
          <ChevronLeft size={80} />
        </button>
        <button className="z-30" onClick={moveRight}>
          <ChevronRight size={80} />
        </button>
      </div>
      <div className="flex justify-center mb-10">
        <DownloadButton />
      </div>
    </div>
  );
};

export default Carousel;

