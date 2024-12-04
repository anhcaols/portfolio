"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

const images = [
  "/assets/birthday/IMG_9198.jpg",
  "/assets/birthday/IMG_1131.jpg",
  "/assets/birthday/IMG_1130.jpg",
  "/assets/birthday/IMG_1136.jpg",
  "/assets/birthday/IMG_1125.jpg",
  "/assets/birthday/IMG_1137.jpg",
  "/assets/birthday/IMG_1132.jpg",
  "/assets/birthday/IMG_1234.jpg",
  "/assets/birthday/IMG_0554.jpg",
  "/assets/birthday/IMG_1120.jpg",
  "/assets/birthday/IMG_0298.jpg",
  "/assets/birthday/061EFC66-55EC-481C-B2D9-3693D4B4072B.jpg"
];

export default function BirthdayPage() {
  const [stage, setStage] = useState<number>(1);
  return (
    <div className="h-screen w-full overflow-x-hidden bg-[#F3D0D7]">
      {stage === 3 && (
        <Confetti
          numberOfPieces={150}
          recycle={true}
          colors={["#F72E67", "#F8833B", "#245F96", "#34A5C1", "#DF2769"]}
        />
      )}
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
            <div className="h-full w-[400px] rounded-r-lg">
              <img
                className="h-full w-full rounded-r-lg object-contain"
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
            <div className="absolute left-0 top-2 w-[60px] rotate-[180deg]">
              <img className="h-full w-full rounded-2xl" src="/assets/birthday/lotso1.jpg" alt="cake" />
            </div>
            <h1 className="mb-14 text-center text-[32px] font-bold text-[#FF4E88]">🎉 Happy birthday 22 tuổi! 🎉</h1>
            <div className="relative w-full">
              <div className="relative mb-10 w-full">
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
                <TypingAnimation />
              </div>
              <div className="relative flex flex-col items-center justify-between lg:flex-row">
                <div className="mx-auto h-[200px] w-[200px]">
                  <img className="h-full w-full rounded-2xl" src="/assets/birthday/lotso4.jpg" alt="cake" />
                </div>
                <div className="mx-auto w-[320px]">
                  <img className="h-full w-full rounded-2xl" src="/assets/birthday/cake.gif" alt="cake" />
                </div>
                <div className="mx-auto h-[200px] w-[200px]">
                  <img className="h-full w-full rounded-2xl" src="/assets/birthday/lotso3.webp" alt="cake" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const TypingAnimation: React.FC = () => {
  const messages = [
    "Chúc mừng sinh nhật, em yêu!",
    "Chúc em tuổi mới luôn hạnh phúc và rạng rỡ!",
    "Anh mong mọi ước mơ của em đều thành hiện thực!",
    "Chúc em luôn khỏe mạnh, yêu đời, và thật thành công!",
    "Cảm ơn em đã đến bên anh, khiến cuộc sống của anh tràn đầy ý nghĩa!",
    "Anh yêu em rất nhiều, mãi mãi bên nhau nhé! ❤️"
  ];

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentMessage = messages[currentIndex];
      if (charIndex < currentMessage.length) {
        // Hiển thị từng ký tự
        setDisplayText((prev) => prev + currentMessage[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        // Đợi một lúc trước khi chuyển sang câu tiếp theo
        setTimeout(() => {
          setDisplayText("");
          setCharIndex(0);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 2000); // Đợi 2 giây sau khi typing xong
        clearInterval(typingInterval);
      }
    }, 100); // Gõ từng ký tự sau 100ms

    return () => clearInterval(typingInterval);
  }, [charIndex, currentIndex, messages]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
        color: "#FF4E88",
        fontWeight: 600,
        minHeight: 40
      }}
    >
      <p
        style={{
          borderRight: "2px solid #FF4E88",
          whiteSpace: "nowrap",
          overflow: "hidden"
        }}
      >
        {displayText}
      </p>
    </div>
  );
};
