import React from "react";
import Image from "next/image";
import beyondEarth from "../public/assets/thumbnails/beyond-earth/trending/small.jpg";
import movie from "../public/assets/icon-nav-movies.svg";
import bkMarkEmpty from "../public/assets/Group 27.svg";
import bkMarkFull from "../public/assets/icon-bookmark-full.svg";

const VideoCard = () => {
  return (
    <div className="relative flex-shrink-0 w-[240px] sm:w-[400px] sm:h-[230px] lg:w-[470px] h-[140px]">
      {" "}
      <div className="absolute opacity-70 rounded-lg h-[140px] w-[240px] sm:w-[400px] sm:h-[230px] lg:w-[470px] bg-gradient-to-t from-black to-transparent"></div>
      <Image src={bkMarkEmpty} alt="logo" className="absolute top-2 right-2 sm:top-4 sm:right-8 sm:w-[32px] lg:right-6" />
      <Image
        src={beyondEarth}
        alt="logo"
        className="rounded-lg w-full h-full"
      />
      <div className="absolute bottom-[16px] sm:bottom-6 sm:left-6 left-[16px] flex flex-col gap-1">
        <div className="flex justify-center items-center gap-2 text-white/70 text-[12px] sm:text-[15px] font-normal">
          <h3>2019</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3"
            height="3"
            viewBox="0 0 3 3"
            fill="none"
          >
            <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white" />
          </svg>
          <div className="flex justify-center items-center gap-[6px]">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                opacity="0.75"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.1733 0H1.82667C0.817827 0 0 0.817827 0 1.82667V10.1733C0 11.1822 0.817827 12 1.82667 12H10.1733C10.6578 12 11.1224 11.8075 11.465 11.465C11.8075 11.1224 12 10.6578 12 10.1733V1.82667C12 1.3422 11.8075 0.877585 11.465 0.535018C11.1224 0.192452 10.6578 0 10.1733 0ZM2.4 5.4H1.2V4.2H2.4V5.4ZM2.4 6.6H1.2V7.8H2.4V6.6ZM10.8 5.4H9.6V4.2H10.8V5.4ZM10.8 6.6H9.6V7.8H10.8V6.6ZM10.8 1.644V2.4H9.6V1.2H10.356C10.4738 1.2 10.5867 1.24678 10.67 1.33004C10.7532 1.41331 10.8 1.52624 10.8 1.644ZM2.4 1.2H1.644C1.52624 1.2 1.41331 1.24678 1.33004 1.33004C1.24678 1.41331 1.2 1.52624 1.2 1.644V2.4H2.4V1.2ZM1.2 10.356V9.6H2.4V10.8H1.644C1.52624 10.8 1.41331 10.7532 1.33004 10.67C1.24678 10.5867 1.2 10.4738 1.2 10.356ZM10.356 10.8C10.6012 10.8 10.8 10.6012 10.8 10.356V9.6H9.6V10.8H10.356Z"
                fill="white"
              />
            </svg>{" "}
            <h3>Movie</h3>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3"
            height="3"
            viewBox="0 0 3 3"
            fill="none"
          >
            <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white" />
          </svg>
          <h3>PG</h3>
        </div>
        <h3 className="text-white font-medium text-[15px] sm:text-[24px]">Beyond Earth</h3>
      </div>
    </div>
  );
};

export default VideoCard;
