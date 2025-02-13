import React from 'react'

function About() {
  const updates = [
    "Perbaiki tampilan responsive",
    "Tambahkan halaman profile yang bener",
    "Swtiching tema terang gelap",
    "Apaan lagi yak? Saran dong"
  ];
  return (
    <>
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Daftar Update Selanjutnya</h2>
        <ul className="list-disc pl-5 space-y-2">
          {updates.map((item, index) => (
            <li key={index} className="text-lg">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
    
  )
}

export default About