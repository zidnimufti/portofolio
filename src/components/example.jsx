import React, { useState } from 'react';

function SplashScreen() {
  // State untuk menampilkan tampilan motivasi
  const [showMotivation, setShowMotivation] = useState(false);
  // State untuk menyimpan offset (perpindahan posisi) tombol kedua
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Ketika tombol kedua ditekan, update offset secara acak
  const handleButton2Click = () => {
    // Menghasilkan offset acak antara -200px sampai 200px
    const newX = Math.floor(Math.random() * 401) - 200;
    const newY = Math.floor(Math.random() * 401) - 200;
    setOffset({ x: newX, y: newY });
  };

  // Ketika tombol pertama ditekan, tampilkan tampilan motivasi
  const handleButton1Click = () => {
    setShowMotivation(true);
  };

  // Jika showMotivation true, tampilkan konten motivasi dan sembunyikan splash screen
  if (showMotivation) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWUzYnVzcDBqZ3I4dXo2ZGVocHMzN2QwNzd3ZHo5dXI0eThheWQxciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/muNco7WDh8n0D24MvH/giphy.gif"
          alt="Motivasi"
          className="w-64 h-64 object-cover mb-4"
        />
        <h1 className="text-2xl font-bold text-center">
          WOOOOOO!!! I love youuuuuuuuu!! ;))
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative p-4">
      {/* Splash Screen */}
      <div className="mb-6 text-center">
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDgyanM4MnIxZ2xwZDN0amJkbjhmdWk2dXZsOTJsM2N3amNkZGR0dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/8R3QeBaEDEbnzihCvB/giphy.gif"
          alt="Animated GIF"
          className="w-64 h-64 object-cover mx-auto mb-4"
        />
        <h1 className="text-xl font-semibold mb-2">Will you be my Valentine?</h1>
      </div>

      {/* Tombol */}
      <div className="flex items-center space-x-4">
        <button
          onClick={handleButton1Click}
          className="bg-green-500 text-white px-4 py-2 transition duration-300 hover:opacity-75 mr-4 rounded"
        >
          YES, CERTENLY!!!!!!!!
        </button>
        <button
          onClick={handleButton2Click}
          style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
          className="bg-red-500 text-white px-4 py-2 transition duration-300 hover:opacity-75 mr-4 rounded"
        >
          G!!!
        </button>
      </div>
    </div>
  );
}

export default SplashScreen;