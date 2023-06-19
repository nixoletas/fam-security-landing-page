import React from 'react';
import Image from 'next/image';

export default function Arrow() {
  return (
    <div className="flex justify-center animate-bounce w-full" style={{
        position: 'fixed',
        bottom: '0',
      }}
    >
      <Image src="/arrow-down.svg" alt="My SVG file" width={60} height={30} />
    </div>
  );
}
