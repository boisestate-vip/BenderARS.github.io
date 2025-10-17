import React from 'react';

/**
 * Squares background
 *
 * This component renders a low‑opacity field of animated squares behind
 * its children.  The squares are randomly positioned within the
 * container and gently drift upward to create a subtle motion effect.
 * It is intended for decorative use only – content should be placed
 * above it in a relatively positioned wrapper.  Use the `className`
 * prop to size and position the container as needed.
 *
 * Example:
 * <div className="relative">
 *   <Squares className="absolute inset-0" />
 *   <YourContent />
 * </div>
 */
function Squares({ count = 20, className = '' }) {
  // Generate an array of square styles.  Each square gets a random
  // position, size and animation delay so the pattern feels organic.
  const squares = React.useMemo(() => {
    return Array.from({ length: count }, () => {
      const size = Math.random() * 40 + 20; // 20–60px
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const delay = Math.random() * 5; // seconds
      const duration = 10 + Math.random() * 10; // 10–20s
      return { size, left, top, delay, duration };
    });
  }, [count]);

  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      {squares.map((sq, idx) => (
        <span
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          style={{
            width: sq.size,
            height: sq.size,
            left: `${sq.left}%`,
            top: `${sq.top}%`,
            animationDelay: `${sq.delay}s`,
            animationDuration: `${sq.duration}s`,
          }}
          className="absolute bg-dark-secondary/30 rounded-lg animate-squareFloat"
        />
      ))}
    </div>
  );
}

export default Squares;