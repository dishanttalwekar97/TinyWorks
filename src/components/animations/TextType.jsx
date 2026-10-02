import React, { useState, useEffect, useMemo } from 'react';

export const TextType = ({
  text,
  texts,
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = '_',
  deletingSpeed = 50,
  variableSpeedEnabled = false,
  variableSpeedMin = 60,
  variableSpeedMax = 120,
  cursorBlinkDuration = 0.5,
  className = '',
  as: Component = 'span',
  loop = true,
}) => {
  // Consolidate text/texts input into an array of strings
  const stringList = useMemo(() => {
    if (texts && Array.isArray(texts) && texts.length > 0) return texts;
    if (text && Array.isArray(text) && text.length > 0) return text;
    if (typeof text === 'string') return [text];
    return ['Building Intelligent Software for the Modern Enterprise'];
  }, [text, texts]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentFullText = stringList[currentIndex % stringList.length];

    const getSpeed = () => {
      if (isDeleting) return deletingSpeed;
      if (variableSpeedEnabled) {
        return Math.floor(
          Math.random() * (variableSpeedMax - variableSpeedMin + 1) + variableSpeedMin
        );
      }
      return typingSpeed;
    };

    if (!isDeleting && displayedText === currentFullText) {
      // Pause at full text
      timeout = setTimeout(() => {
        if (stringList.length > 1 || loop) {
          setIsDeleting(true);
        }
      }, pauseDuration);
    } else if (isDeleting && displayedText === '') {
      // Finished deleting, move to next text
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % stringList.length);
    } else {
      // Typing or deleting characters
      const speed = getSpeed();
      timeout = setTimeout(() => {
        setDisplayedText((prev) => {
          if (isDeleting) {
            return currentFullText.substring(0, prev.length - 1);
          } else {
            return currentFullText.substring(0, prev.length + 1);
          }
        });
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    currentIndex,
    stringList,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    variableSpeedEnabled,
    variableSpeedMin,
    variableSpeedMax,
    loop,
  ]);

  return (
    <Component className={`inline-block ${className}`}>
      <span>{displayedText}</span>
      {showCursor && (
        <span
          className="inline-block font-mono font-bold animate-pulse text-red-500 ml-1"
          style={{
            animationDuration: `${cursorBlinkDuration}s`,
          }}
        >
          {cursorCharacter}
        </span>
      )}
    </Component>
  );
};

export default TextType;
