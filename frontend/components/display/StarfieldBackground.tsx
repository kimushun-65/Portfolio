'use client';

import { useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

interface StarfieldBackgroundProps {
  count?: number;
  scrollProgress: number;
  mousePosition: { x: number; y: number };
}

export default function StarfieldBackground({
  count = 8000,
  scrollProgress,
  mousePosition,
}: StarfieldBackgroundProps) {
  const points = useRef<THREE.Points>(null);

  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // より広範囲な3D空間に配置（奥行き感を強調）
      const radius = Math.random() * 80 + 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi) - 30;

      // より洗練された色使い（ミニマリスト＆モダン）
      const colorChoice = Math.random();
      if (colorChoice > 0.85) {
        // アクセントカラー: シアン (#24DEEA)
        colors[i3] = 0x24 / 255;
        colors[i3 + 1] = 0xde / 255;
        colors[i3 + 2] = 0xea / 255;
      } else if (colorChoice > 0.6) {
        // 淡い青白
        colors[i3] = 0.8 + Math.random() * 0.2;
        colors[i3 + 1] = 0.85 + Math.random() * 0.15;
        colors[i3 + 2] = 1.0;
      } else if (colorChoice > 0.3) {
        // ソフトホワイト
        const brightness = 0.7 + Math.random() * 0.3;
        colors[i3] = brightness;
        colors[i3 + 1] = brightness;
        colors[i3 + 2] = brightness;
      } else {
        // 微かなグレー（ミニマリストタッチ）
        const gray = 0.4 + Math.random() * 0.3;
        colors[i3] = gray;
        colors[i3 + 1] = gray;
        colors[i3 + 2] = gray;
      }

      // サイズにバリエーション（より自然な分布）
      sizes[i] = Math.random() * 3 + 0.3;
    }

    return [positions, colors, sizes];
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;

    const time = state.clock.getElapsedTime();

    // よりスムーズなマウス追従（lerp使用）
    state.camera.position.x += (mousePosition.x * 3 - state.camera.position.x) * 0.05;
    state.camera.position.y += (-mousePosition.y * 3 - state.camera.position.y) * 0.05;

    // スクロール連動のカメラズーム（より滑らかに）
    const targetZ = 5 + scrollProgress * 30;
    state.camera.position.z += (targetZ - state.camera.position.z) * 0.1;

    // ゆっくりとした回転（洗練された動き）
    points.current.rotation.y = time * 0.03;
    points.current.rotation.x = Math.sin(time * 0.5) * 0.1;

    // 微細な脈動アニメーション
    const positionsArray = points.current.geometry.attributes.position
      .array as Float32Array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const x = positions[i3];
      const y = positions[i3 + 1];
      const z = positions[i3 + 2];

      // より自然な浮遊感
      positionsArray[i3] = x + Math.sin(time * 0.3 + i * 0.01) * 0.15;
      positionsArray[i3 + 1] = y + Math.cos(time * 0.4 + i * 0.015) * 0.15;
      positionsArray[i3 + 2] = z + Math.sin(time * 0.2 + i * 0.02) * 0.3;
    }

    points.current.geometry.attributes.position.needsUpdate = true;
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    return geo;
  }, [positions, colors, sizes]);

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
  }, []);

  return <points ref={points} geometry={geometry} material={material} />;
}
