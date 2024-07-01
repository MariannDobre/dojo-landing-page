import { useEffect, useRef, useState } from 'react';

export default function useLazyLoadBackground(imageUrl, threshold = 0.1) {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);
  const observedContainer = useRef(null);

  useEffect(() => {
    let container = observedContainer.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const image = new Image();
          image.src = imageUrl;
          image.onload = () => {
            setIsBackgroundLoaded(true);
            observer.unobserve(observedContainer.current);
          };
        }
      },
      { threshold }
    );

    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [imageUrl, threshold]);

  return { isBackgroundLoaded, observedContainer };
}
