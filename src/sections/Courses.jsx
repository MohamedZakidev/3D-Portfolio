import { courses } from "../constants"

function Courses() {
    return (
        <section className="c-space my-20">
            <h3 className="text-white-700 textShadow text-2xl md:text-3xl xl:text-3xl font-semibold tracking-wide mb-5">Courses & Certificates</h3>
            <div className="client-container">
                {courses.map(item => (
                    <div key={item.id} className="client-review">
                        <div>
                            <p className="text-white font-light tracking-wide">{item.review}</p>
                            <div className="client-content">
                                <div className="flex gap-3">
                                    <img src={item.img} alt={item.name} className="size-12 rounded-full" />
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-white-800 capitalize">{item.name}</p>
                                        <p className="text-white-500 md:text-base text-sm">{item.position}</p>
                                    </div>
                                </div>
                                <a href={item.certification} target="_blank" className="flex self-end items-center gap-2">
                                    <p className="text-white-700 animate-pulse capitalize">certification</p>
                                    <img src="/assets/arrow-up.png" alt="arrow up" className="size-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Courses
