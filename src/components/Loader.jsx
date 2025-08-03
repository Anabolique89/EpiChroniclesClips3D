import { Html, useProgress } from '@react-three/drei';

export default function LoadingScreen() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{
        color: 'white',
        fontSize: '1.5em',
        textAlign: 'center',
        background: 'rgba(0,0,0,0.5)',
        padding: '20px',
        borderRadius: '10px',
        fontFamily: 'sans-serif'
      }}>
        Loading... {progress.toFixed(0)}%
      </div>
    </Html>
  );
}
