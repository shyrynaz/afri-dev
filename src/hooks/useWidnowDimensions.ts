import { useEffect, useState } from 'react';

interface IState {
  width: number;
  height: number;
}
export const useWindowDimensions = () => {
  const [windowSize, setWindowSize] = useState<IState>({
    width: 0,
    height: 0
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
