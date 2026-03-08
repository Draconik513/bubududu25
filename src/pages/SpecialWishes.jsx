import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import vidioWishes from "../assets/videos/Wishes.mp4";

const SpecialWishes = ({ isIOS }) => {
  const [showHeart, setShowHeart] = useState(false);

  const wishes = `
selamat bertambah umur sayangku, semoga d
umur kamu yg sekarang kamu bisa jauh lebih baik dari yg sebelumnya ya maaf kalau aku banyak kurang nya buat kamu, maaf kalo aku
belum bisa jadi yg kamu mau, aku akan terus berusaha jadi yg terbaik buat kamu, pertahun umur akan bertambah 1, semoga untuk kedepannya kamu semakin menjadi orang yg kuat untuk cobaan yg akan datang, kamu ga sendiri kamu punya aku, aku akan selalu ada buat kamu sampe kamu ga butuh aku lagi, kamu semakin dewasa kamu pasti akan semakin paham mana yg baik dan ga baik buat diri kamu, jangan pernah bosen untuk memperbaiki diri sekarang, besok, dan seterusnya, semangat buat kejar apa yg kamu impikan, doa terbaik untuk kamuu, tetap rendah hati ya, tetap jadi anak baik, sama aku terus yaa? aku harap dihari spesial kamu banyak kebahagiaan yg datang, aku gabisa
menjelaskan lagi betapa berarti nya kamu d hidup aku, terimakasi uda sekuat ini untuk bertahan!! im proud of u, sekali lagi happy level up ya, wish u all the best universe .Love you sayangku❤️
  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Pesan Spesial Untukmu
        </h1>

        <div className="mb-8">
          <video
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            className="w-full max-w-md mx-auto rounded-lg shadow-xl"
          >
            <source src={vidioWishes} type="video/mp4" />
          </video>
        </div>

        <motion.div
          whileHover={{ scale: isIOS ? 1 : 1.01 }}
          className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8"
        >
          <div className="prose max-w-none">
            {wishes.split("\n").map((paragraph, i) => (
              <p key={i} className="text-pink-800 mb-4 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: isIOS ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowHeart(!showHeart)}
            className="relative overflow-hidden bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg"
          >
            <span className="button-text">
              {showHeart ? "Sembunyikan Cintaku" : "Lihat Cintaku"}
            </span>
          </motion.button>
        </div>

        <AnimatePresence>
          {showHeart && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            >
              <motion.div
                className="relative text-pink-500"
                animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-[12rem] select-none text-center">❤️</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold drop-shadow-lg">
                  Muhandi 💖
                </div>
                <div className="text-white text-lg text-center mt-4">
                  My Heart Belongs to you, Honey🥹
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SpecialWishes;
