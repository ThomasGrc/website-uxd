import {Canvas, useFrame} from "@react-three/fiber";
import { RoundedBox} from "@react-three/drei";
import {Suspense, useRef} from "react";

const BoxElement = () => {

    const mesh = useRef(null)
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005))

        return <mesh ref={mesh} position={[0, 0, 0]}>
            <RoundedBox args={[1, 1, 1]} radius={0.05} smoothness={4} scale={3}>
                <meshPhongMaterial attach="material" color="#fff" />
            </RoundedBox>
        </mesh>
}

export function Box() {
    return <Suspense fallback={null}>
            <Canvas style={{borderRadius: '0', borderColor: '#000000', borderWidth: 2}}>
                <ambientLight intensity={0.5}/>
                <spotLight position={[10, 15, 10]} angle={0.3}/>
                <BoxElement />
            </Canvas>
        </Suspense>
}