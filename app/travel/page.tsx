'use client'

import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Center, useTexture } from '@react-three/drei'
import { Geometry, Base } from '@react-three/csg'

import * as THREE from 'three';
import { BufferGeometry, Material, Mesh, NormalBufferAttributes, Object3DEventMap } from 'three'
import Container from '@mui/material/Container'

const albedo = './earth-texture/Albedo.jpg';
const bump = './earth-texture/Bump.jpg';
const clouds = './earth-texture/Clouds.png'

type TGeneralState = {
    hover: boolean;
}

useTexture.preload(albedo);
useTexture.preload(bump);
useTexture.preload(clouds);

function Earth({
    hover
}: TGeneralState) {
    const meshRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>(null);

    const [albedoMap, bumpMap] = useTexture([albedo, bump]);
    useFrame((state, delta) => {
        if (meshRef.current && !hover) {
            meshRef.current.rotation.y += delta / 4;
        }
    })
    return (
        <mesh
            visible
            ref={meshRef}
        >
            <Geometry useGroups>
                <Base>
                    <sphereGeometry args={[4, 64, 64]} />
                    <meshStandardMaterial
                        map={albedoMap}
                        bumpMap={bumpMap}
                        bumpScale={0.03}
                        side={THREE.DoubleSide}
                    />
                </Base>
            </Geometry>
        </mesh>
    )
}

function Cloud({
    hover
}: TGeneralState) {
    const meshRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>(null);
    const cloudsMap = useTexture(clouds);
    useFrame((state, delta) => {
        if (meshRef.current && !hover) {
            meshRef.current.rotation.y += delta / 4;
        }
    })
    return (
        <mesh
            visible
            ref={meshRef}
        >
            <sphereGeometry args={[4.005, 64, 64]} />
            <meshStandardMaterial
                alphaMap={cloudsMap}
                transparent
            />
        </mesh>
    )

}

function Surrounding({
    hover
}: TGeneralState) {
    const meshRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>(null);
    useFrame((state, delta, xrFrame) => {
        if (meshRef.current && !hover) {
            meshRef.current.rotation.y += 0.01;
        } else { console.log(state)}
    })
    return (
        <mesh
            visible
            ref={meshRef}
        >
            <sphereGeometry args={[4.01, 64, 64]} />
            <meshStandardMaterial
                color={hover ? "#2196F3" : "#ADDFFF"}
                transparent
                opacity={0.2}
            />
        </mesh>
    )

}

export default function Trips() {
    const [hover, setHover] = useState(false);
    return (
        <Container data-tag="hi" maxWidth="xl" disableGutters sx={{
            height: '80vh',
            p: 0,
            m: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            "&.MuiContainer-root": {
                margin: 0
              }
        }} >
            <Canvas camera={{ position: [15, 0, 0]}}>
                <ambientLight intensity={Math.PI / 2} />
                <spotLight position={[5, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <group
                    onPointerOver={(event) => setHover(true)}
                    onPointerOut={(event) => setHover(false)}
                >
                    <OrbitControls
                        minDistance={5}
                        maxDistance={20}
                    />
                    <Center>
                        <Earth hover={hover} />
                        <Cloud hover={hover} />
                        <Surrounding hover={hover} />
                    </Center>
                </group>
            </Canvas>
        </Container>
    );
}

