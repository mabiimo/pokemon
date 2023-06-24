import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Carousel() {
  return (
    <div id="controls-carousel" className="relative w-full  " data-carousel="static">
      <div className="relative h-56 overflow-hidden  md:h-96">
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://images.unsplash.com/photo-1682687219573-3fd75f982217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=775&q=80"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          <p className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-b from-transparent to-[#262626] text-white font-bold text-lg sm:text-2xl md:text-3xl pb-10">test</p>
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
          <img
            src="https://images.unsplash.com/photo-1682687219573-3fd75f982217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=775&q=80"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          <p className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-b from-transparent to-[#262626] text-white font-bold text-lg sm:text-2xl md:text-3xl pb-10">test</p>
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://images.unsplash.com/photo-1682687219573-3fd75f982217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=775&q=80"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          <p className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-b from-transparent to-[#262626] text-white font-bold text-lg sm:text-2xl md:text-3xl pb-10">test</p>
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://images.unsplash.com/photo-1682687219573-3fd75f982217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=775&q=80"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          <p className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-b from-transparent to-[#262626] text-white font-bold text-lg sm:text-2xl md:text-3xl pb-10">test</p>
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://images.unsplash.com/photo-1682687219573-3fd75f982217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=775&q=80"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          <p className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-b from-transparent to-[#262626] text-white font-bold text-lg sm:text-2xl md:text-3xl pb-10">test</p>
        </div>
      </div>

      <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
