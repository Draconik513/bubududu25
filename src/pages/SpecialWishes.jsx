import { motion } from "framer-motion";
import vidioWishes from "../assets/videos/Wishes.mp4";

const SpecialWishes = ({ isIOS }) => {

  const wishes = `
Mas, first of all, i just wanna say thank u. thank u for being u, for being patient, kind, and always making me feel loved. 🥹

i hope, in every step u take, i can still be right beside u, cheering u on.

kedepannya pasti bakal lebih banyak batu kerikil maupun batu besar yg bakal mas temui. tolong tetap kuat, tetap semangat dan tetap hangat ya, mas.

di umur mas yang baru ini, i hope all your dreams start coming true one by one. mudah-mudahan mas selalu diberi kesehatan, rezeki yang lancar, selalu dilimpahkan kebahagiaan dan selalu diberi hati yang tenang dalam menghadapi apapun.

sekali lagi, selamat ulang tahun, ganteng! mudah-mudahan makin dewasa yaa, tapi jangan berubah jadi bapak-bapak yang galak wkwk

dari neng, neng mu 🌹✨
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
      </motion.div>
    </div>
  );
};

export default SpecialWishes;
