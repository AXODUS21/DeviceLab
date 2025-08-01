import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react'

const Carousel = () => {
  return (
    <div className="min-h-screen flex justify-around items-center">
      <button className="">
        <ChevronLeft size={80}/>
      </button>
      <button className="">
        <ChevronRight size={80}/>
      </button>
    </div>
  );
}

export default Carousel