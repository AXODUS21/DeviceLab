import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react'

const Carousel = () => {
  return (
    <div className="min-h-screen flex justify-around items-center">
      <button className="cursor-pointer">
        <ChevronLeft size={80}/>
      </button>
      <button className="cursor-pointer">
        <ChevronRight size={80}/>
      </button>
    </div>
  );
}

export default Carousel