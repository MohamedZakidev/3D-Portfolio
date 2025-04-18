import { Center, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"
import { useMediaQuery } from "react-responsive"
import CanvasLoader from "../components/CanvasLoader"
import DemoComputer from "../components/DemoComputer"
import { myProjects } from "../constants"


function Projects() {
  const projectsCount = myProjects.length
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
  const currentProject = myProjects[selectedProjectIndex]
  const isDesktop = useMediaQuery({ minWidth: 1024 })


  function handleNavigation(direction) {
    setSelectedProjectIndex(prevIndex => {
      if (direction === "prev") {
        return prevIndex === 0 ? projectsCount - 1 : prevIndex - 1
      } else {
        return prevIndex === projectsCount - 1 ? 0 : prevIndex + 1
      }
    })
  }

  return (
    <section id="work" className="c-space my-20">
      <h2 className="text-white-700 textShadow text-2xl xl:text-3xl font-semibold tracking-wide mb-5">My Selected Work</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">

        {/* 1 */}
        <div className="rounded-2xl flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          {currentProject.spotlight && (
            <div className="absolute top-0 right-0">
              <img
                src={currentProject.spotlight}
                alt="spotlight"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          )}
          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="z-50 flex flex-col gap-5 text-white-600">
            <h3 className="text-white text-2xl font-semibold animatedText">{currentProject.title}</h3>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map(tag => (
                <div key={tag.id} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a href={currentProject.href} target="_blank" rel="noreferrer" className="z-50 flex items-center gap-2 cursor-pointer">
              <p className="text-white animate-pulse">Check Live site</p>
              <img src="/assets/arrow-up.png" alt="arrow up" className="size-3" />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation("prev")}>
              <img src="/assets/left-arrow.png" alt="left arrow" className="size-4" />
            </button>
            <div className="flex items-center gap-2 justify-center">
              {myProjects.map((_, index) => {
                const isActive = index === selectedProjectIndex
                return (
                  <div
                    key={index}
                    className={`size-2.5 rounded-full ${isActive ? "bg-white-800" : "bg-white-500 hover:bg-white-600"}`}
                  />
                )
              })}
            </div>
            <button className="arrow-btn" onClick={() => handleNavigation("next")}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="size-4" />
            </button>
          </div>
        </div>

        {/* 2 */}
        {isDesktop && (
          <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
            <Canvas>
              <ambientLight intensity={Math.PI} />
              <directionalLight position={[10, 10, 5]} />
              <Center>
                <Suspense fallback={<CanvasLoader />}>
                  <group scale={2} position={[-0.46, -3, 0]} rotation={[0, 0, 0]}>
                    <DemoComputer texture={currentProject.texture} />
                  </group>
                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
            </Canvas>
          </div>
        )}

      </div>
    </section>
  )
}

export default Projects
