'use client';

import React, { useEffect, useRef } from 'react';

import './gliterCard.css';

type Props = {
  children: React.ReactNode;
};

export default function GlitterCards({ children }: Props) {
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.style.setProperty('--dw', `${document.body.clientWidth}px`);
    document.body.style.setProperty('--dh', `${document.body.clientHeight}px`);

    const handlePointerMove = (e: PointerEvent) => {
      if (!cardsRef.current) return;

      for (const card of cardsRef.current.children) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        const BOX = card.getBoundingClientRect();
        const RATIO = { x: x / BOX.width, y: y / BOX.height };
        // const CENTER = fromCenter(RATIO);

        card.style.setProperty('--ratio-x', RATIO.x.toString());
        card.style.setProperty('--ratio-y', RATIO.y.toString());
      }
    };

    const cardsElement = cardsRef.current;
    if (cardsElement) {
      cardsElement.addEventListener('pointermove', handlePointerMove);
    }

    return () => {
      if (cardsElement) {
        cardsElement.removeEventListener('pointermove', handlePointerMove);
      }
    };
  }, []);

  function fromCenter({ x, y }: { x: number; y: number }): number {
    return Math.min(Math.max(0, Math.sqrt((y - 0.5) ** 2 + (x - 0.5) ** 2) / 0.5), 1);
  }

  return (
    <div ref={cardsRef} id="cards" className="">
      <div className="card flex flex-col justify-center p-4 rounded-lg shadow-lg relative hover:scale-105 transition-all">
        <div className="card-content flex flex-col justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
