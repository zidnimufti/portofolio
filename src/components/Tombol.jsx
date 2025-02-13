import React, { useState } from 'react';

function TwoButtons() {
  
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Gak",
      "Serius?",
      "Beneran ini?",
      "Tolong banget dah",
      "Gw beliin cokelat gimana?",
      "Matcha deh Matcha",
      "お願い",
      "PLEASE",
      "Tolongggg :*(",
      "Mati nih gw",
      "Yep, mati",
      "Masa gw di kacangin?:( " ,
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "お願い",
      "G :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWUzYnVzcDBqZ3I4dXo2ZGVocHMzN2QwNzd3ZHo5dXI0eThheWQxciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/muNco7WDh8n0D24MvH/giphy.gif" />
          <div className="my-4 text-xl font-bold">WOOOOOO!!! I love youuuuuuuuu!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDgyanM4MnIxZ2xwZDN0amJkbjhmdWk2dXZsOTJsM2N3amNkZGR0dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/8R3QeBaEDEbnzihCvB/giphy.gif"
          />
          <h1 className="my-4 text-xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Ya
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Gak" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TwoButtons
