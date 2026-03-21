import { useState, useEffect, useRef } from 'react';
import { CursorOuter, CursorInner } from './Cursor.styled';

const Cursor = () => {
  const [visible, setVisible] = useState(() => window.matchMedia('(pointer: fine)').matches);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  // Once a touch is detected, never show cursor again (handles DevTools simulation too)
  const hasTouched = useRef(false);

  useEffect(() => {
    const onTouch = () => {
      hasTouched.current = true;
      setVisible(false);
    };

    const onMouseMove = (e) => {
      if (hasTouched.current) return;
      setVisible(true);
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    window.addEventListener('touchstart', onTouch, { passive: true });
    window.addEventListener('mousemove', onMouseMove);

    const interactives = document.querySelectorAll('a, button, [data-cursor]');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('touchstart', onTouch);
      window.removeEventListener('mousemove', onMouseMove);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  if (!visible) return null;

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
