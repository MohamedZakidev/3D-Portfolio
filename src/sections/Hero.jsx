import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Leva } from "leva"
import { Suspense } from "react"
import { useMediaQuery } from "react-responsive"
import Button from "../components/Button"
import CanvasLoader from "../components/CanvasLoader"
import Cube from "../components/Cube"
import HackerRoom from "../components/HackerRoom"
import HeroCamera from "../components/HeroCamera"
import ReactLogo from "../components/ReactLogo"
import Rings from "../components/Rings"
import Target from "../components/Target"
import { calculateSizes } from "../constants"

function Hero() {
    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })
    const isDesktop = useMediaQuery({ minWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <Leva />
            <div className="w-full mx-auto flex flex-col mt-20 sm:mt-36 c-space gap-3">
                <p className="text-2xl sm:text-3xl font-medium text-white text-center font-generalsans">
                    Hi, I&apos;m Mohamed
                    <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Making the web Interactive</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <HeroCamera isMobile={isMobile} isDesktop={isDesktop}>
                            <HackerRoom
                                rotation={[0, -Math.PI, 0]}
                                position={sizes.deskPosition}
                                scale={sizes.deskScale}
                            />
                        </HeroCamera>

                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition} />
                            <Rings position={sizes.ringPosition} />
                        </group>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>

            <div className="c-space z-10 absolute bottom-7 left-0 right-0 w-full">
                <a href="#about" className="w-fit">
                    <Button
                        containerClass="sm:w-fit w-full sm:min-w-96"
                        isBeam
                    >
                        Let’s work together
                    </Button>
                </a>
            </div>
        </section>
    )
}

export default Hero
