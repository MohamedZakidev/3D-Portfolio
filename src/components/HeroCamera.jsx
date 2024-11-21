import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import { useRef } from "react"

// eslint-disable-next-line react/prop-types
function HeroCamera({ children, isMobile }) {
    const groupRef = useRef()

    useFrame((state, delta) => {
        if (!isMobile) {
            easing.dampE(groupRef.current.rotation,
                [-state.pointer.y / 5, -state.pointer.x / 5, 0],
                0.25, delta)
        }
        // for mobile
        easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta)
    }, [])

    return (
        <group ref={groupRef}>
            {children}
        </group>
    )
}

export default HeroCamera
