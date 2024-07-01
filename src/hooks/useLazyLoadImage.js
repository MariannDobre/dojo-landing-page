import { useEffect, useRef, useState } from 'react';

// V1
// export default function useLazyLoadImage(loadImage, threshold = 0.1) {
//   const [isImageLoaded, setIsImageLoaded] = useState(false);

//   useEffect(() => {
//     const images = document.querySelectorAll('[data-src]');
//     const observer = new IntersectionObserver(
//       (entries, image) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             loadImage(entry.target);
//             image.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold }
//     );

//     images.forEach((img) => observer.observe(img));

//     return () => {
//       images.forEach((img) => observer.unobserve(img));
//     };
//   }, [loadImage, threshold]);

//   return { isImageLoaded, setIsImageLoaded };
// }

// V2
// export default function useLazyLoadBackground(imagePath, threshold = 0.1) {
//   const [isImageLoaded, setIsImageLoaded] = useState(false);
//   const observedImage = useRef(null);

//   useEffect(() => {
//     let container = observedImage.current;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           const image = new Image();
//           image.src = imagePath;
//           image.onload = () => {
//             setIsImageLoaded(true);
//             observer.unobserve(observedImage.current);
//           };
//         }
//       },
//       { threshold }
//     );

//     if (container) {
//       observer.observe(container);
//     }

//     return () => {
//       if (container) {
//         observer.unobserve(container);
//       }
//     };
//   }, [imagePath, threshold]);

//   return { isImageLoaded, observedImage };
// }

// V3
export default function useLazyLoadImages(imagePaths, threshold = 0.1) {
  const [loadedImages, setLoadedImages] = useState(
    new Array(imagePaths.length).fill(false)
  );
  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current = imageRefs.current.slice(0, imagePaths.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target);
            const image = new Image();
            image.src = imagePaths[index];
            image.onload = () => {
              setLoadedImages((prev) => {
                const newLoadedImages = [...prev];
                newLoadedImages[index] = true;
                return newLoadedImages;
              });
              observer.unobserve(entry.target);
            };
          }
        });
      },
      { threshold }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (imageRefs.current) {
        imageRefs.current.forEach((ref) => {
          if (ref) {
            observer.unobserve(ref);
          }
        });
      }
    };
  }, [imagePaths, threshold]);

  return { loadedImages, imageRefs };
}
