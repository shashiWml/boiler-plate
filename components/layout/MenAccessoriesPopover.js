import React from 'react';

export default function MenAccessoriesPopover() {
  return (
    <div className="bg-gray-400">
      <div className="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
        <div>
          <img
            className="h-70 w-70 mt-4 relative"
            src="https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/60f56ae37a269d601d761d89/webp/men-menu-left-524x772.jpg"
            alt="image"
          />
          <button
            type="button"
            className="text-white text-2xl absolute top-[45%] left-[8%]"
          >
            NO GREY AREA
          </button>
        </div>
        <div className="">
          <p className="text-xs text-purple-600 my-10 ">Categories</p>
          <p className="text-xs mb-3 hover:border-b hover:border-b-white">
            <a href="#"> Bags & Backpacks</a>
          </p>
          <p className="text-xs mb-3 hover:border-b hover:border-b-white">
            <a href="#">Wallets </a>
          </p>

          <p className="text-xs mb-3 hover:border-b hover:border-b-white">
            <a href="#">Hats & Caps</a>
          </p>
        </div>
        <div>
          <img
            className="h-70 w-70 mt-4 relative"
            src="https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/60f56ae37a269d601d761d8a/webp/men-menu-right2-524x772.jpg"
            alt="image"
          />
          <button
            type="button"
            className="absolute top-[45%] right-[30%] rotate-90 text-white text-xs hover:bg-purple-600 border px-16 rounded-full py-2 border-purple-500"
          >
            New In
          </button>
        </div>
      </div>
    </div>
  );
}
