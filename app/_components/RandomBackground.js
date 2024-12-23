"use client"
import { useEffect } from 'react';
import { generateRandomBackgroundStyles } from '../utils/generateRandomBackgroundStyles';

const RandomBackground = () => {
  useEffect(() => {
    const body = document.body;

    // Generate random styles for background images
    const styles = generateRandomBackgroundStyles('/pics/back2.webp', 50, 200, 120);
    Object.assign(body.style, styles);
  }, []);

  return null; // No UI; just applying background styles
};

export default RandomBackground;
