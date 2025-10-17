import React from 'react';

/**
 * RollingGallery displays a row of images that scroll horizontally
 * on an infinite loop.  To create the illusion of continuous motion,
 * the children are duplicated and animated using a CSS keyframe defined
 * in tailwind.config.js (marquee).  Pass any arbitrary JSX elements as
 * children; images should have fixed widths for a smooth effect.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children Elements to render inside the gallery.
 * @param {string} [props.className] Additional classes for the wrapper.
 */
function RollingGallery({ children, className = '' }) {
  // Duplicate children to achieve seamless scrolling
  const items = React.Children.toArray(children);
  const doubled = [...items, ...items];
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="flex items-center animate-marquee">
        {doubled.map((child, idx) => (
          <div key={idx} className="mx-4 flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RollingGallery;