"use client";

import {motion} from "framer-motion";
import {useState} from "react";

const images = [
  '/assets/birthday/IMG_9198.JPG',
  '/assets/birthday/IMG_1131.JPG',
  '/assets/birthday/IMG_1130.JPG',
  '/assets/birthday/IMG_1136.JPG',
  '/assets/birthday/IMG_1125.JPG',
  '/assets/birthday/IMG_1137.JPG',
  '/assets/birthday/IMG_1132.JPG',
  '/assets/birthday/IMG_1234.JPG',
  '/assets/birthday/IMG_0554.JPG',
  '/assets/birthday/IMG_1120.JPG',
  '/assets/birthday/IMG_0298.JPG',
  '/assets/birthday/061EFC66-55EC-481C-B2D9-3693D4B4072B.JPG',
];

export default function BirthdayPage() {
  const [stage, setStage] = useState<number>(1);

  return (
    <div className="h-screen w-full bg-[#F3D0D7] overflow-x-hidden">
      {stage === 1 ? (
        <>
          <div className="flex flex-col items-center h-full justify-center"><h1
            className="text-center text-3xl font-bold text-[#FF4E88] mb-6">
            Có gì đón chờ bé iu
          </h1>
            <button
              onClick={() => {
                setStage(2);
                const audio = new Audio("/assets/birthday/music.mp3");
                audio.loop = true;
                audio.play();
              }}
              className="px-20 py-3 border text-[#FF4E88] bg-gradient-to-r from-pink-300 to-purple-400 font-bold text-lg rounded-full shadow-lg hover:scale-105 transition-transform"> Mở
              quà 💝
            </button>
          </div>
        </>
      ) : stage === 2 ? (
        <div className='flex items-center justify-center h-full w-full mx-auto gap-8'>
          <div className='flex items-center justify-center'>
            <div className='w-[400px] h-full rounded-lg'>
              <img
                className='w-full h-full object-contain rounded-lg'
                src={'/assets/birthday/Purple Cute Minimalist Birthday Greeting Instagram Story.png'}
                alt=""/>
            </div>
            <div className='w-[400px] h-full rounded-lg'>
              <img
                className='w-full h-full object-contain rounded-lg'
                src={'/assets/birthday/Pink and Brown Illustrative Happy Birthday A4 Document.png'}
                alt=""/>
            </div>
          </div>
          <button
            onClick={() => {
              setStage(3);
            }}
            className="px-20 py-3 border text-[#FF4E88] bg-gradient-to-r from-pink-300 to-purple-400 font-bold text-lg rounded-full shadow-lg hover:scale-105 transition-transform">
            Đón chờ bất ngờ →
          </button>
        </div>
      ) : (
        <>
          <div
            className="from-pink-300 to-purple-400 flex min-h-screen flex-col items-center py-8 bg-gradient-to-b relative">
            <div className='w-[60px] absolute right-0 top-0'>
              <img
                className='w-full h-full'
                src={'/assets/birthday/lotso2.jpg'} alt="cake"/>
            </div>
            <h1 className="text-center text-[32px] font-bold text-[#FF4E88] mb-12">
              🎉 Happy 22st birthday! 🎉
            </h1>
            <div className="relative w-full">
              <div className="mb-8 w-full relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 40"
                  className="w-full h-[4px]"
                  preserveAspectRatio="none"
                >
                  <path
                    fill="url(#gradient)"
                    d="M0,0 C360,40 1080,-40 1440,0 L1440,40 L0,40 Z"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#FF4E88"/>
                      <stop offset="100%" stopColor="#8E2DE2"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className='w-24 h-24 absolute left-1/2 -translate-x-1/2 -top-12'>
                  <img
                    className='w-full h-full object-cover'
                    src={'/assets/birthday/pngtree-ribbon-tied-into-a-3d-pink-bow-png-image_13235799.png'}
                    alt=""/>
                </div>
              </div>
              <div className="flex items-start justify-around">
                {images.map((src, index) => (
                  <motion.div
                    key={index}
                    className="relative h-48 w-36 rounded-lg bg-white shadow-lg  border border-[#FF4E88]"
                    style={{rotate: `${Math.random() * 20 - 10}deg`}}
                    whileHover={{scale: 1.1, rotate: 0}}
                    whileTap={{scale: 0.9}}
                  >
                    <img src={src} alt={`Photo ${index + 1}`}
                         className="h-full w-full rounded-lg object-cover border border-[#FF4E88]"/>
                  </motion.div>
                ))}
              </div>
              <div className='mt-10 space-y-2'>
                <h1 className="text-center text-4xl font-bold text-[#FF4E88]">
                  Thanh Thuý
                </h1>
                <p className='text-[#FF4E88] text-center'>---</p>
              </div>
              <div className='relative'>
                <div className='mx-auto w-[320px]'>
                  <img
                    className='w-full h-full'
                    src={'/assets/birthday/cake.gif'} alt="cake"/>
                </div>

              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
