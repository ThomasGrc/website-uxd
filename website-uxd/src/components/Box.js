import {Canvas} from "@react-three/fiber";
import {OrbitControls, RoundedBox, Stars} from "@react-three/drei";
import {Suspense} from "react";

export function Box() {
    return <Suspense fallback={null}>
            <Canvas style={{borderRadius: '0', borderColor: '#000000', borderWidth: 2}}>
                <OrbitControls/>
                <ambientLight intensity={0.5}/>
                <spotLight position={[10, 15, 10]} angle={0.3}/>
                <mesh position={[0, 0, 0]}>
                    <RoundedBox args={[1, 1, 1]} radius={0.05} smoothness={4}>
                        <meshPhongMaterial attach="material" color="#ff3a3a"  />
                    </RoundedBox>
                </mesh>
            </Canvas>
        </Suspense>
}