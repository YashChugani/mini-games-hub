// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Lottie from 'lottie-react';
// import loadingAnimation from '../assets/LoadingAnimation.json';
// import '../styles.css';

// export default function LoadingScreen({ onComplete }) {
//   const navigate = useNavigate();
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           onComplete();
//         }
//         return prev + 10;
//       });
//     }, 300);

//     return () => clearInterval(interval);
//   }, [onComplete]);

//   return (
//     <div className="loading-container">
//       <Lottie
//         animationData={loadingAnimation}
//         loop={true}
//         style={{ height: '150px', width: '150px' }}
//       />
//       <p>Loading... {progress}%</p>
//     </div>
//   );
// }



import { useEffect, useState } from 'react'; 
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/LoadingAnimation.json';
import '../styles.css';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete();
          return prev;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loading-container">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        style={{ height: '150px', width: '150px', backgroundColor: 'transparent' }}
      />
      <p>Loading... {progress}%</p>
    </div>
  );
}

