#include "/node_modules/lygia/generative/cnoise.glsl"

varying vec2 vUv;
uniform float uTime;
#define PI 3.1415926

vec3 distort(vec3 p){
  float offset = cnoise(p + uTime*.25);
  float noise = sin((p.y + offset)*PI*8.);
  p += noise*normal*.2;
  return p;
}

void main() {
  vec3 p=position;
  vUv = uv;
  p=distort(p);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}