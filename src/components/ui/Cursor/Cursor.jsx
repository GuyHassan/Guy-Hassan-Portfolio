import { useState, useEffect } from 'react';
import { CursorOuter, CursorInner } from './Cursor.styled';

const Cursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', onMove);

    // Use setTimeout to ensure DOM is ready
    const timer = setTimeout(() => {
      const interactives = document.querySelectorAll('a, button, [data-cursor]');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    }, 100);

    return () => {
      window.removeEventListener('mousemove', onMove);
      clearTimeout(timer);
      const interactives = document.querySelectorAll('a, button, [data-cursor]');
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <CursorOuter
        animate={{
          x: pos.x - 16,
          y: pos.y - 16,
          scale: isHovering ? 1.6 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.5 }}
      />
      <CursorInner
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 30 }}
      />
    </>
  );
};

export default Cursor;
