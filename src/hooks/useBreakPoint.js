import { useState, useEffect } from 'react';

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 756) {
        setBreakpoint('small');
      } else if (screenWidth < 1024) {
        setBreakpoint('medium');
      } else {
        setBreakpoint('large');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return breakpoint;
};

export default useBreakpoint;
