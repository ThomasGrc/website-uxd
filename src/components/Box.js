import {Canvas, useFrame} from "@react-three/fiber";
import {RoundedBox, Ring, Torus, Text, OrbitControls} from "@react-three/drei";
import {Suspense, useRef} from "react";

const InsideElement = () => {
    const mesh = useRef(null)
    useFrame(() => (mesh.current.rotation.x -= 0.01, mesh.current.rotation.y += 0.01))

    return <mesh ref={mesh} position={[0, 0, 0]}>
        <OrbitControls enableZoom={false} />
        <Torus scale={0.5}>
            <meshPhongMaterial attach={"material"} color={"#ff6c6c"}></meshPhongMaterial>
        </Torus>
    </mesh>
}

const BoxElement = () => {

    const mesh = useRef(null)
    useFrame(() => (mesh.current.rotation.x += 0.01, mesh.current.rotation.y += 0.01))

        return <mesh ref={mesh} position={[0, 0, 0]}>
            <Torus scale={1.5}>
                <meshPhongMaterial attach={"material"} wireframe color={"#ff6c6c"}></meshPhongMaterial>
            </Torus>
        </mesh>
}

export function Box() {
    return <Suspense fallback={null}>
            <Canvas style={{borderRadius: '0', borderColor: '#000000', borderWidth: 2}}>
                <ambientLight intensity={0.5}/>
                <spotLight position={[10, 15, 10]} angle={0.3}/>
                <InsideElement />
                <BoxElement />
            </Canvas>
        </Suspense>
}