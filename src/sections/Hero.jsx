import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

function Hero() {
    return (
        <section className="min-h-screen border-2 border-blue-500 w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col mt-20 sm:mt-36 c-space gap-3">
                <p className="text-2xl sm:text-3xl font-medium text-white text-center font-generalsans">
                    Hi, I&apos;m Mohamed
                    <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Making the web Interactive</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                </Canvas>
            </div>
        </section>
    )
}

export default Hero
