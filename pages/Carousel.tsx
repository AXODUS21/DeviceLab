"use client"
import DownloadButton from '@/components/DownloadButton';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react'

const Carousel = () => {
  return (
    <div className="">
      <div className="min-h-screen flex justify-around items-center">
        <button className="cursor-pointer">
          <ChevronLeft size={80}/>
        </button>
        <button className="cursor-pointer">
          <ChevronRight size={80}/>
        </button>
      </div>
      <div className="flex justify-center mb-10">
        <div>
          <DownloadButton/>
        </div>
      </div>
    </div>
  );
}

export default Carousel