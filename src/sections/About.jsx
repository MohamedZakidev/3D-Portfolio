import { useState } from "react"
import Globe from "react-globe.gl"
import Button from "../components/Button"

function About() {
    const [hasCopied, setHasCopied] = useState(false)
    function handleCopy() {
        console.log(hasCopied)
        if (!hasCopied) {
            navigator.clipboard.writeText("Mohamedzzaki2000s@gmail.com")
            setHasCopied(true)
        }
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }

    return (
        <section id="about" className="c-space my-20 min-h-screen">
            <h2 className="capitalize text-white-700 textShadow text-2xl md:text-3xl font-semibold tracking-wide mb-5">About me</h2>
            <div className="grid grid-cols-1 xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 gap-5 h-full">

                {/* 1 */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png"
                            alt="grid1"
                            className="w-full sm:h-[276px] h-fit object-contain"
                        />
                        <div>
                            <p className="grid-headtext">Hi, I’m Mohamed Zaki</p>
                            <p className="grid-subtext">I am developing my skills in both frontend and backend development with a focus on creating dynamic and responsive websites</p>
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="/assets/grid2.png"
                            alt="grid2"
                            className="w-full sm:h-[276px] h-fit object-contain"
                        />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I specialize in JavaScript with a focus on React and NextJS ecosystems, building modern and efficient web applications</p>
                        </div>
                    </div>
                </div>

                {/* 3 */}
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                width={326}
                                height={326}
                                backgroundColor="rgba(0,0,0,0)"
                                showAtmosphere
                                showGraticules
                                globeImageUrl={"//unpkg.com/three-globe/example/img/earth-night.jpg"}
                                bumpImageUrl={"//unpkg.com/three-globe/example/img/-topology.png"}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I’m very flexible with most time zones</p>
                            <p className="grid-subtext">I&apos;m based in Egypt, Cairo and open to remote work worldwide.</p>
                        </div>
                        <a href="/Mohamed Zaki - cv.pdf" download={"Mohamed Zaki - CV"}>
                            <Button
                                isBeam
                                containerClass="w-full"
                            >
                                Download Cv
                            </Button>
                        </a>
                    </div>
                </div>

                {/* 4 */}
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="/assets/grid3.png"
                            alt="grid3"
                            className="w-full h-[276px] object-cover"
                        />
                        <div className="my-auto">
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">I love solving problems and building things through code. Programming isn&apos;t just my profession it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.</p>
                        </div>
                    </div>
                </div>

                {/* 5 */}
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="/assets/grid4.png"
                            alt="grid4"
                            className="w-full md:h-[126px] md:w-[350px] mx-auto sm:h-[276px] h-fit object-cover sm:object-top"
                        />
                        <div className="space-y-4">
                            <p className="grid-subtext text-center">Contact Me</p>
                            <div
                                className="copy-container"
                                onClick={handleCopy}
                            >
                                <img
                                    src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                                    alt="copy to clipboard"
                                />
                                <p className="md:text-base font-medium text-white">Mohamedzzaki2000s@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
