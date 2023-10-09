import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import './shaders/TestShaderMaterial.js';

function App() {
	return (
		<Suspense fallback={null}>
			<Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
				<ambientLight intensity={2} />
				<directionalLight intensity={2} position={[1, 1, 1]} />
				<OrbitControls/>
        <mesh>
          <planeGeometry args={[4,4]} />
          <testShaderMaterial />
        </mesh>
			</Canvas>
		</Suspense>
	);
}

export default App;
