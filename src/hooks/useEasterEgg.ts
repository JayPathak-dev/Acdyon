// src/hooks/useEasterEgg.ts
import { useEffect, useCallback } from 'react';

const KONAMI = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

export function useEasterEgg(onActivate: () => void) {
  const handleKeyDown = useCallback(
    (() => {
      let sequence: string[] = [];
      return (e: KeyboardEvent) => {
        sequence = [...sequence, e.key].slice(-KONAMI.length);
        if (sequence.join(',') === KONAMI.join(',')) {
          onActivate();
          sequence = [];
        }
      };
    })(),
    [onActivate]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}
