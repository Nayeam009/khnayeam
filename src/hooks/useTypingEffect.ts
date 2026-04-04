import { useState, useEffect } from "react";

export const useTypingEffect = (texts: string[], speed = 80, pause = 2000) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause);
        } else {
          setCharIndex(charIndex + 1);
        }
      } else {
        setDisplayed(current.slice(0, charIndex));
        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((index + 1) % texts.length);
        } else {
          setCharIndex(charIndex - 1);
        }
      }
    }, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, texts, speed, pause]);

  return displayed;
};
