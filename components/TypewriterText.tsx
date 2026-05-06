"use client";

import { useEffect, useMemo, useState } from "react";

const TYPING_SPEED = 80;
const DELETING_SPEED = 50;
const PAUSE_AFTER_TYPING = 1500;
const PAUSE_AFTER_DELETING = 300;

type TypewriterTextProps = {
  phrases: string[];
};

export default function TypewriterText({ phrases }: TypewriterTextProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = useMemo(() => phrases[phraseIndex] ?? "", [phraseIndex, phrases]);

  useEffect(() => {

    if (!isDeleting && displayText === currentPhrase) {
      const pause = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPING);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayText.length === 0) {
      const moveToNext = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, PAUSE_AFTER_DELETING);
      return () => clearTimeout(moveToNext);
    }

    const timeout = setTimeout(() => {
      const nextLength = isDeleting ? displayText.length - 1 : displayText.length + 1;
      const next = currentPhrase.slice(0, nextLength);
      setDisplayText(next);
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [currentPhrase, displayText, isDeleting, phrases.length]);

  return (
    <span className="inline-flex min-h-[2.5rem] items-center">
      <span className="text-primary">{displayText}</span>
      <span className="type-cursor ml-1 text-primary">|</span>
    </span>
  );
}
