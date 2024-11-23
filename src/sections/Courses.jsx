import { clientReviews } from "../constants"

function Courses() {
    return (
        <section className="c-space my-20">
            <h3 className="text-white-700 textShadow text-2xl md:text-3xl xl:text-3xl font-semibold tracking-wide mb-5">Courses & Certificates</h3>
            <div className="client-container">
                {clientReviews.map(item => (
                    <div key={item.id} className="client-review">
                        <div>
                            <p className="text-white font-light">{item.review}</p>
                            <div className="client-content">
                                <div className="flex gap-3">
                                    <img src={item.img} alt={item.name} className="size-12 rounded-full" />
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-white-800">{item.name}</p>
                                        <p className="text-white-500 md:text-base text-sm">{item.position}</p>
                                    </div>
                                </div>
                                <div className="flex self-end items-center gap-2">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <img key={index} src={"/assets/star.png"} alt="star" className="size-5" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Courses
