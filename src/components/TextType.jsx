import React, { useState, useEffect } from 'react';

/**
 * A simple typewriter effect component.
 *
 * The component receives an array of strings and types them out one by one,
 * erasing each message before proceeding to the next.  It’s inspired by
 * ReactBits’ TextType but implemented from scratch to avoid pulling in
 * external dependencies.  The typing speed and pause between messages
 * are customisable via props.  A blinking cursor is appended for
 * authenticity.
 *
 * @param {Object} props
 * @param {string[]} props.strings Messages to type out cyclically.
 * @param {number} [props.typingSpeed=80] Milliseconds between keystrokes.
 * @param {number} [props.pause=2000] Milliseconds to pause before erasing.
 * @param {string} [props.className] Additional classes applied to the wrapper.
 */
function TextType({ strings, typingSpeed = 80, pause = 2000, className = '' }) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = strings[loopNum % strings.length];
    let timeout;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setText(current.substring(0, charIndex));
        setCharIndex(charIndex + 1);
        if (charIndex === current.length) {
          // After finishing typing pause before deleting
          setTimeout(() => setIsDeleting(true), pause);
        }
      }, typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setText(current.substring(0, charIndex));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }, typingSpeed / 2);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, loopNum, pause, strings, typingSpeed]);

  return (
    <span className={`whitespace-pre ${className}`} aria-label={strings[loopNum % strings.length]}>
      {text}
      <span className="inline-block w-2 h-6 bg-dark-accent ml-1 animate-pulse rounded" />
    </span>
  );
}

export default TextType;