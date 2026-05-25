import { useState, useEffect } from "react";

export const useTypingEffect = (texts: string[], speed = 80, pause = 2000) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    const duration = isDeleting
      ? speed / 2
      : charIndex === current.length
      ? pause
      : speed;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex === current.length) {
          setIsDeleting(true);
        } else {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }
      } else {
        setDisplayed(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setCharIndex(0);
        } else {
          setCharIndex(charIndex - 1);
        }
      }
    }, duration);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, texts, speed, pause]);

  return displayed;
};
