import React, { useState } from 'react';

function TwoButtons() {
  const [clickCount, setClickCount] = useState(0);
  const [showMotivation, setShowMotivation] = useState(false);

  // Fungsi untuk menangani klik pada tombol kedua
  const handleSecondButtonClick = () => {
    if (clickCount < 6) {
      setClickCount(prev => prev + 1);
    }
  };

  // Fungsi untuk menangani klik pada tombol pertama
  const handleFirstButtonClick = () => {
    setShowMotivation(true);
  };

  // Hitung skala untuk transformasi tombol berdasarkan jumlah klik tombol kedua
  const scalePertama = 1 + (1 / 6) * clickCount; // Tombol pertama membesar
  const scaleKedua = 1 - (1 / 6) * clickCount;    // Tombol kedua mengecil

  // Jika showMotivation true, tampilkan konten motivasi
  if (showMotivation) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <img
          src="https://source.unsplash.com/featured/?motivation"
          alt="Motivasi"
          className="w-64 h-64 object-cover mb-4"
        />
        <h1 className="text-2xl font-bold text-center">
          Tetap Semangat dan Raih Impianmu!
        </h1>
      </div>
    );
  }

  // Tampilan awal: splash screen dengan GIF, kalimat pembuka, dan kedua tombol
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* Bagian Splash */}
      <div className="flex flex-col items-center">
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzNuNWJlYnhnZWZwcHByejBmYjJodmh3dmt5M2NiNXB5Y2l6MTM5bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/gO5I1tmxFPq8pwHzxG/giphy.gif"
          alt="Animated GIF"
          className="w-64 h-64 object-cover mb-4"
        />
        <h1 className="text-xl font-semibold mb-2 text-center">
          Selamat Datang di Website Kami!
        </h1>
        <p className="text-center mb-6">
          Nikmati pengalaman yang menyenangkan dengan tampilan dinamis dan interaksi seru!
        </p>
      </div>

      {/* Bagian Tombol */}
      <div className="flex items-center">
        <button
          onClick={handleFirstButtonClick}
          style={{ transform: `scale(${scalePertama})` }}
          className="bg-green-500 text-white px-4 py-2 transition transform duration-300 hover:opacity-75"
        >
          Tombol Pertama
        </button>
        {clickCount < 6 && (
          <button
            onClick={handleSecondButtonClick}
            style={{ transform: `scale(${scaleKedua})` }}
            className="bg-red-500 text-white px-4 py-2 transition transform duration-300 hover:opacity-75 ml-4"
          >
            Tombol Kedua
          </button>
        )}
      </div>
    </div>
  );
}

export default TwoButtons;
