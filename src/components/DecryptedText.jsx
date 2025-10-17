import React, { useState, useEffect } from 'react';

/**
 * DecryptedText simulates a text decryption effect by rapidly scrambling
 * characters before resolving to the final message.  Each character
 * progressively locks into place, resulting in a satisfying reveal.
 *
 * The effect is inspired by ReactBits’ Decrypted Text component but is
 * handcrafted here to eliminate external dependencies.  The duration
 * defines how long the full reveal should take.
 *
 * @param {Object} props
 * @param {string} props.text The final message to reveal.
 * @param {number} [props.duration=2000] Total duration of the effect in ms.
 * @param {string} [props.className] Additional classes applied to the span.
 */
function DecryptedText({ text, duration = 2000, className = '' }) {
  const [displayed, setDisplayed] = useState('');
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()[]{}<>?';

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.max(Math.floor(duration / 50), 1);
    const interval = setInterval(() => {
      setDisplayed((prev) => {
        let output = '';
        const progress = frame / totalFrames;
        for (let i = 0; i < text.length; i++) {
          if (i / text.length < progress) {
            output += text[i];
          } else {
            output += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        return output;
      });
      frame++;
      if (frame >= totalFrames) {
        clearInterval(interval);
        setDisplayed(text);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [text, duration]);

  return <span className={className}>{displayed}</span>;
}

export default DecryptedText;