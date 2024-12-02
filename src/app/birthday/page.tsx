"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  "/assets/birthday/IMG_9198.JPG",
  "/assets/birthday/IMG_1131.JPG",
  "/assets/birthday/IMG_1130.JPG",
  "/assets/birthday/IMG_1136.JPG",
  "/assets/birthday/IMG_1125.JPG",
  "/assets/birthday/IMG_1137.JPG",
  "/assets/birthday/IMG_1132.JPG",
  "/assets/birthday/IMG_1234.JPG",
  "/assets/birthday/IMG_0554.JPG",
  "/assets/birthday/IMG_1120.JPG",
  "/assets/birthday/IMG_0298.JPG",
  "/assets/birthday/061EFC66-55EC-481C-B2D9-3693D4B4072B.JPG"
];

export default function BirthdayPage() {
  const [stage, setStage] = useState<number>(1);

  return (
    <div className="h-screen w-full overflow-x-hidden bg-[#F3D0D7]">
      {stage === 1 ? (
        <>
          <div className="flex h-full flex-col items-center justify-center">
            <h1 className="mb-6 text-center text-3xl font-bold text-[#FF4E88]">Có gì đón chờ bé iu</h1>
            <button
              onClick={() => {
                setStage(2);
                const audio = new Audio("/assets/birthday/music.mp3");
                audio.loop = true;
                audio.play();
              }}
              className="from-pink-300 to-purple-400 rounded-full border bg-gradient-to-r px-20 py-3 text-lg font-bold text-[#FF4E88] shadow-lg transition-transform hover:scale-105"
            >
              {" "}
              Mở quà 💝
            </button>
          </div>
        </>
      ) : stage === 2 ? (
        <div className="mx-auto flex h-full w-full items-center justify-center gap-8">
          <div className="flex items-center justify-center">
            <div className="h-full w-[400px] rounded-lg">
              <img
                className="h-full w-full rounded-lg object-contain"
                src="/assets/birthday/Purple Cute Minimalist Birthday Greeting Instagram Story.png"
                alt=""
              />
            </div>
            <div className="h-full w-[400px] rounded-lg">
              <img
                className="h-full w-full rounded-lg object-contain"
                src="/assets/birthday/Pink and Brown Illustrative Happy Birthday A4 Document.png"
                alt=""
              />
            </div>
          </div>
          <button
            onClick={() => {
              setStage(3);
            }}
            className="from-pink-300 to-purple-400 rounded-full border bg-gradient-to-r px-20 py-3 text-lg font-bold text-[#FF4E88] shadow-lg transition-transform hover:scale-105"
          >
            Đón chờ bất ngờ →
          </button>
        </div>
      ) : (
        <>
          <div className="from-pink-300 to-purple-400 relative flex min-h-screen flex-col items-center bg-gradient-to-b py-8">
            <div className="absolute right-0 top-0 w-[60px]">
              <img className="h-full w-full" src="/assets/birthday/lotso2.jpg" alt="cake" />
            </div>
            <h1 className="mb-12 text-center text-[32px] font-bold text-[#FF4E88]">🎉 Happy 22st birthday! 🎉</h1>
            <div className="relative w-full">
              <div className="relative mb-8 w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 40"
                  className="h-[4px] w-full"
                  preserveAspectRatio="none"
                >
                  <path fill="url(#gradient)" d="M0,0 C360,40 1080,-40 1440,0 L1440,40 L0,40 Z" />
                  <defs>
                    <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#FF4E88" />
                      <stop offset="100%" stopColor="#8E2DE2" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute -top-12 left-1/2 h-24 w-24 -translate-x-1/2">
                  <img
                    className="h-full w-full object-cover"
                    src="/assets/birthday/pngtree-ribbon-tied-into-a-3d-pink-bow-png-image_13235799.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-start justify-around">
                {images.map((src, index) => (
                  <motion.div
                    key={index}
                    className="relative h-48 w-36 rounded-lg border border-[#FF4E88]  bg-white shadow-lg"
                    style={{ rotate: `${Math.random() * 20 - 10}deg` }}
                    whileHover={{ scale: 1.1, rotate: 0 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img
                      src={src}
                      alt={`Photo ${index + 1}`}
                      className="h-full w-full rounded-lg border border-[#FF4E88] object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="mt-10 space-y-2">
                <h1 className="text-center text-4xl font-bold text-[#FF4E88]">Thanh Thuý</h1>
                <p className="text-center text-[#FF4E88]">---</p>
              </div>
              <div className="relative">
                <div className="mx-auto w-[320px]">
                  <img className="h-full w-full" src="/assets/birthday/cake.gif" alt="cake" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
