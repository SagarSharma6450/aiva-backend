import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './AssistantScene.css';

export default function AssistantScene({ className = '', label = 'AI interviewer online' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.25, 5.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const assistantGroup = new THREE.Group();
    scene.add(assistantGroup);

    const ambient = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambient);

    const keyLight = new THREE.PointLight(0x9ee7d5, 2.8, 12);
    keyLight.position.set(2.6, 2.4, 3.5);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0xb8c7ff, 2, 10);
    rimLight.position.set(-3, -1.5, 2.8);
    scene.add(rimLight);

    // --- Central "assessment sheet" panel ---
    const panelGroup = new THREE.Group();

    const panel = new THREE.Mesh(
      new THREE.BoxGeometry(1.7, 2.15, 0.12),
      new THREE.MeshStandardMaterial({
        color: 0x7fdac8,
        roughness: 0.32,
        metalness: 0.38,
        emissive: 0x143a37,
        emissiveIntensity: 0.42,
      })
    );
    panelGroup.add(panel);

    // techy wireframe outline, same role as the old "wire" mesh
    const panelWire = new THREE.Mesh(
      new THREE.BoxGeometry(1.84, 2.3, 0.02),
      new THREE.MeshBasicMaterial({ color: 0xc7d2fe, wireframe: true, transparent: true, opacity: 0.24 })
    );
    panelGroup.add(panelWire);

    // simulated question lines across the sheet
    const lineMaterial = new THREE.MeshBasicMaterial({ color: 0xdff7f0, transparent: true, opacity: 0.55 });
    const lineWidths = [1.05, 0.82, 1.0, 0.6];
    lineWidths.forEach((w, i) => {
      const line = new THREE.Mesh(new THREE.BoxGeometry(w, 0.09, 0.14), lineMaterial);
      line.position.set(-0.15, 0.68 - i * 0.36, 0.07);
      panelGroup.add(line);
    });

    // "verified / graded" checkmark seal, gold accent
    const checkGroup = new THREE.Group();
    const checkMaterial = new THREE.MeshStandardMaterial({
      color: 0xf4c95d,
      emissive: 0x6b4d05,
      emissiveIntensity: 0.5,
      roughness: 0.25,
      metalness: 0.2,
    });
    const checkShort = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.11, 0.12), checkMaterial);
    checkShort.rotation.z = Math.PI / 4;
    checkShort.position.set(-0.09, -0.05, 0.22);
    const checkLong = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.11, 0.12), checkMaterial);
    checkLong.rotation.z = -Math.PI / 4;
    checkLong.position.set(0.15, 0.07, 0.22);
    checkGroup.add(checkShort, checkLong);
    checkGroup.position.set(0.45, -0.72, 0.1);
    panelGroup.add(checkGroup);

    const seal = new THREE.Mesh(
      new THREE.TorusGeometry(0.36, 0.035, 12, 40),
      new THREE.MeshBasicMaterial({ color: 0xf4c95d, transparent: true, opacity: 0.5 })
    );
    seal.position.copy(checkGroup.position);
    panelGroup.add(seal);

    assistantGroup.add(panelGroup);

    // --- Orbit rings (kept, same as before) ---
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x8ae6d3,
      transparent: true,
      opacity: 0.42,
      side: THREE.DoubleSide,
    });

    const ringOne = new THREE.Mesh(new THREE.TorusGeometry(1.72, 0.01, 12, 120), ringMaterial);
    ringOne.rotation.x = Math.PI / 2.6;
    assistantGroup.add(ringOne);

    const ringTwo = new THREE.Mesh(new THREE.TorusGeometry(2.12, 0.008, 12, 120), ringMaterial.clone());
    ringTwo.material.opacity = 0.24;
    ringTwo.rotation.y = Math.PI / 2.8;
    assistantGroup.add(ringTwo);

    // --- Orbiting data nodes (kept, same as before) ---
    const nodeMaterial = new THREE.MeshStandardMaterial({
      color: 0xf4c95d,
      emissive: 0x6b4d05,
      emissiveIntensity: 0.45,
      roughness: 0.22,
      metalness: 0.15,
    });

    const nodes = Array.from({ length: 8 }, (_, index) => {
      const node = new THREE.Mesh(new THREE.SphereGeometry(0.07, 20, 20), nodeMaterial);
      const angle = (index / 8) * Math.PI * 2;
      node.position.set(Math.cos(angle) * 2.1, Math.sin(angle) * 0.35, Math.sin(angle) * 1.1);
      assistantGroup.add(node);
      return { node, angle, radius: 2.1 + (index % 2) * 0.22 };
    });

    let frame = 0;
    let animationId;

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      const safeWidth = Math.max(width, 1);
      const safeHeight = Math.max(height, 1);
      renderer.setSize(safeWidth, safeHeight, false);
      camera.aspect = safeWidth / safeHeight;
      camera.updateProjectionMatrix();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    resize();

    const animate = () => {
      frame += 0.01;

      panelGroup.rotation.x = Math.sin(frame * 0.6) * 0.15 + 0.05;
      panelGroup.rotation.y += 0.006;
      panelWire.rotation.y -= 0.004;
      ringOne.rotation.z += 0.006;
      ringTwo.rotation.x -= 0.004;
      assistantGroup.position.y = Math.sin(frame * 1.4) * 0.07;

      const pulse = 1 + Math.sin(frame * 3) * 0.08;
      checkGroup.scale.set(pulse, pulse, pulse);
      seal.rotation.z += 0.02;

      nodes.forEach(({ node, angle, radius }, index) => {
        const orbit = frame * (0.8 + index * 0.025) + angle;
        node.position.x = Math.cos(orbit) * radius;
        node.position.z = Math.sin(orbit) * 1.15;
        node.position.y = Math.sin(orbit * 1.6) * 0.52;
      });

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      renderer.dispose();
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className={`assistant-scene ${className}`} aria-label={label}>
      <div ref={mountRef} className="assistant-scene-canvas" data-testid="assistant-scene-canvas" />
      <div className="assistant-scene-readout">
        <span className="assistant-status-dot" />
        <span>{label}</span>
      </div>
    </div>
  );
}
