import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

import fragmentShader from '@/shaders/frag.frag';
import vertexShader from '@/shaders/vert.vert';

const TPlane = () => {
  const mesh = useRef();

  const uniforms = useMemo(
    () => ({
      uTexture: {
        value: new THREE.TextureLoader().load('./texture.jpg'),
      },
      uTime: {
        value: 0
      }
    }), []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.uTime.value = 0.4 * clock.getElapsedTime();
  })
	return (
		<mesh ref={mesh}>
			<planeGeometry args={[4, 4, 6, 6]} />
			<shaderMaterial 
        fragmentShader={fragmentShader} 
        vertexShader={vertexShader} 
        uniforms={uniforms}
      />
		</mesh>
	);
};

export default TPlane;
