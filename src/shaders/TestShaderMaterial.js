import * as THREE from 'three';
import { extend } from '@react-three/fiber';

class TestShaderMaterial extends THREE.ShaderMaterial {
	constructor() {
		super({
			transparent: true,
			uniforms: {
				uTexture: { value: new THREE.TextureLoader().load('./texture.jpg') },
			},
			vertexShader: /* glsl */ `
        varying vec2 vUv;
    
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
			fragmentShader: /* glsl */ `
        varying vec2 vUv;  
        uniform sampler2D uTexture; 
    
        void main() {
          vec3 texture = texture2D(uTexture, vUv).rgb;
          gl_FragColor = vec4(texture, 1.);
        }
      `,
		});
	}
}

extend({ TestShaderMaterial });
