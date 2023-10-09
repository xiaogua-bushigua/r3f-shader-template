import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

import TPlane from './TPlane';
function App() {
	return (
		<Suspense fallback={null}>
			<Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
				<ambientLight intensity={2} />
				<directionalLight intensity={2} position={[1, 1, 1]} />
				<OrbitControls/>
        <TPlane />
			</Canvas>
		</Suspense>
	);
}

export default App;
