import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import type { BottleKind } from "@/lib/products";
import { cn } from "@/lib/utils";

type Profile = {
  body: [number, number][];
  waterTop: number;
  capY: number;
  capR: number;
  capH: number;
  labelY: number;
  labelH: number;
  labelR: number;
};

const profiles: Record<BottleKind, Profile> = {
  slim: {
    body: [
      [0, 0],
      [0.34, 0],
      [0.38, 0.04],
      [0.36, 0.1],
      [0.34, 0.22],
      [0.36, 1.22],
      [0.3, 1.42],
      [0.16, 1.58],
      [0.14, 1.84],
      [0.14, 1.96],
    ],
    waterTop: 1.48,
    capY: 2.08,
    capR: 0.155,
    capH: 0.22,
    labelY: 0.72,
    labelH: 0.42,
    labelR: 0.365,
  },
  tall: {
    body: [
      [0, 0],
      [0.4, 0],
      [0.45, 0.05],
      [0.42, 0.12],
      [0.4, 0.24],
      [0.42, 1.45],
      [0.34, 1.68],
      [0.18, 1.86],
      [0.16, 2.12],
      [0.16, 2.24],
    ],
    waterTop: 1.72,
    capY: 2.36,
    capR: 0.175,
    capH: 0.24,
    labelY: 0.82,
    labelH: 0.48,
    labelR: 0.425,
  },
  family: {
    body: [
      [0, 0],
      [0.52, 0],
      [0.56, 0.06],
      [0.54, 0.14],
      [0.52, 0.26],
      [0.54, 1.55],
      [0.42, 1.78],
      [0.22, 1.96],
      [0.2, 2.18],
      [0.2, 2.3],
    ],
    waterTop: 1.8,
    capY: 2.42,
    capR: 0.21,
    capH: 0.24,
    labelY: 0.88,
    labelH: 0.5,
    labelR: 0.545,
  },
  jar: {
    body: [
      [0, 0],
      [0.72, 0],
      [0.78, 0.08],
      [0.76, 0.18],
      [0.74, 1.7],
      [0.7, 1.9],
      [0.42, 2.05],
      [0.38, 2.18],
    ],
    waterTop: 1.85,
    capY: 2.32,
    capR: 0.4,
    capH: 0.18,
    labelY: 1.05,
    labelH: 0.55,
    labelR: 0.76,
  },
  crate: {
    body: [
      [0, 0],
      [0.34, 0],
      [0.38, 0.04],
      [0.36, 0.1],
      [0.34, 0.22],
      [0.36, 1.22],
      [0.3, 1.42],
      [0.16, 1.58],
      [0.14, 1.84],
      [0.14, 1.96],
    ],
    waterTop: 1.48,
    capY: 2.08,
    capR: 0.155,
    capH: 0.22,
    labelY: 0.72,
    labelH: 0.42,
    labelR: 0.365,
  },
};

function makeLabelTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const g = ctx.createLinearGradient(0, 0, 1024, 512);
  g.addColorStop(0, "#0b3d5c");
  g.addColorStop(0.5, "#0e5a7a");
  g.addColorStop(1, "#0c1f2e");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 1024, 512);

  ctx.fillStyle = "rgba(255,255,255,0.14)";
  ctx.fillRect(0, 26, 1024, 4);
  ctx.fillRect(0, 482, 1024, 4);

  ctx.fillStyle = "#dfeaf2";
  ctx.font = "700 42px 'Segoe UI', sans-serif";
  ctx.fillText("PREMIUM", 110, 150);
  ctx.fillText("MINERAL WATER", 110, 198);

  ctx.fillStyle = "#f2efe7";
  ctx.font = "800 105px 'Segoe UI', sans-serif";
  ctx.fillText("Vantara", 118, 315);

  ctx.fillStyle = "#cfe6f3";
  ctx.font = "600 28px 'Segoe UI', sans-serif";
  ctx.fillText("SOURCE • RAMANNAGUDEM", 120, 360);

  const wave = ctx.createLinearGradient(0, 0, 1024, 0);
  wave.addColorStop(0, "rgba(133, 216, 255, 0.05)");
  wave.addColorStop(0.5, "rgba(255,255,255,0.22)");
  wave.addColorStop(1, "rgba(133, 216, 255, 0.05)");
  ctx.fillStyle = wave;
  ctx.beginPath();
  ctx.moveTo(710, 120);
  ctx.quadraticCurveTo(810, 70, 932, 130);
  ctx.quadraticCurveTo(980, 155, 1024, 110);
  ctx.lineTo(1024, 220);
  ctx.quadraticCurveTo(970, 190, 900, 205);
  ctx.quadraticCurveTo(820, 232, 710, 200);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#8ad1ff";
  ctx.beginPath();
  ctx.moveTo(670, 116);
  ctx.bezierCurveTo(748, 190, 768, 270, 700, 330);
  ctx.bezierCurveTo(632, 270, 650, 190, 670, 116);
  ctx.fill();

  ctx.fillStyle = "#ffffff";
  ctx.font = "700 26px 'Segoe UI', sans-serif";
  ctx.fillText("PURE", 760, 160);
  ctx.fillText("MINERALS", 760, 196);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  tex.needsUpdate = true;
  return tex;
}

function BottleMesh({ kind }: { kind: BottleKind }) {
  const group = useRef<THREE.Group>(null);
  const profile = profiles[kind];
  const labelTex = useMemo(() => makeLabelTexture(), []);

  const bodyGeom = useMemo(() => {
    const pts = profile.body.map(([x, y]) => new THREE.Vector2(x, y));
    return new THREE.LatheGeometry(pts, 64);
  }, [profile]);

  const waterGeom = useMemo(() => {
    const inner = profile.body
      .filter(([, y]) => y <= profile.waterTop)
      .map(([x, y]) => new THREE.Vector2(Math.max(0.001, x * 0.9), y + 0.02));
    inner.push(new THREE.Vector2(0, profile.waterTop));
    return new THREE.LatheGeometry(inner, 48);
  }, [profile]);

  useFrame((_, delta) => {
    const d = Math.min(delta, 0.05);
    if (group.current) group.current.rotation.y += d * 0.35;
  });

  useEffect(() => {
    return () => {
      bodyGeom.dispose();
      waterGeom.dispose();
      labelTex?.dispose();
    };
  }, [bodyGeom, waterGeom, labelTex]);

  return (
    <group ref={group} position={[0, -1.05, 0]}>
      <mesh geometry={waterGeom}>
        <meshPhysicalMaterial
          color="#6ebbd4"
          roughness={0.18}
          metalness={0.02}
          transparent
          opacity={0.72}
        />
      </mesh>
      <mesh geometry={bodyGeom} castShadow>
        <meshPhysicalMaterial
          color="#eef8fc"
          roughness={0.06}
          metalness={0.04}
          clearcoat={1}
          clearcoatRoughness={0.08}
          transparent
          opacity={0.22}
          depthWrite={false}
        />
      </mesh>
      <mesh position={[0, profile.labelY, 0]}>
        <cylinderGeometry
          args={[profile.labelR, profile.labelR, profile.labelH, 64, 1, true]}
        />
        <meshPhysicalMaterial
          map={labelTex}
          roughness={0.45}
          metalness={0.05}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh position={[0, profile.capY, 0]} castShadow>
        <cylinderGeometry args={[profile.capR, profile.capR, profile.capH, 32]} />
        <meshStandardMaterial color="#1e4d8c" roughness={0.35} metalness={0.1} />
      </mesh>
      <mesh position={[0, profile.capY + profile.capH * 0.42, 0]}>
        <cylinderGeometry
          args={[profile.capR * 0.92, profile.capR * 0.92, 0.04, 32]}
        />
        <meshStandardMaterial color="#163a72" roughness={0.3} />
      </mesh>
    </group>
  );
}

function Scene({ kind }: { kind: BottleKind }) {
  return (
    <>
      <color attach="background" args={["#e4eee8"]} />
      <hemisphereLight args={["#fff4e0", "#1b4332", 0.9]} />
      <ambientLight intensity={0.55} />
      <directionalLight
        position={[3.2, 5.4, 2.4]}
        intensity={2.2}
        color="#fff1d0"
        castShadow
      />
      <directionalLight position={[-3, 2, -2]} intensity={0.7} color="#9ad0c2" />
      <spotLight
        position={[0, 6, 3]}
        intensity={14}
        angle={0.4}
        penumbra={0.85}
        color="#ffffff"
      />
      <BottleMesh kind={kind} />
      <ContactShadows
        position={[0, -1.12, 0]}
        opacity={0.4}
        scale={6}
        blur={2.4}
        far={3.5}
      />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3.1}
        maxPolarAngle={Math.PI / 1.7}
      />
    </>
  );
}

export function BottleViewer({
  kind,
  className,
}: {
  kind: BottleKind;
  className?: string;
}) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  if (!ready) {
    return <div className={cn("bg-mist", className)} aria-hidden="true" />;
  }

  return (
    <div className={cn("touch-none", className)}>
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [1.15, 0.55, 3.1], fov: 32 }}
        gl={{ antialias: true, alpha: false }}
        shadows
      >
        <Scene kind={kind} />
      </Canvas>
    </div>
  );
}
