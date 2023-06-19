import React from 'react';
import Image from 'next/image';

export default function Arrow() {
  return (
    <div className="animate-bounce" style={{
        position: 'fixed',
        left: '50%',
        bottom: '0',
        transform: 'translateX(-50%)',
      }}
    >
      <Image src="/arrow-down.svg" alt="My SVG file" width={60} height={30} />
    </div>
  );
}
