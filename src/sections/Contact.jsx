import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from "react";

function Contact() {
    const formRef = useRef()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isLoading, setIsLoading] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    useEffect(() => {
        emailjs.init("xPF1TWjustmPfLHRn"); // Your user ID
    }, []);

    //service_lqh6ayj
    async function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true)

        try {
            await emailjs.send(
                "service_lqh6ayj",
                "template_noltjhj",
                {
                    from_name: formData.name,
                    to_name: "Mohamed Zaki",
                    from_email: formData.email,
                    to_email: "mohamedzzaki2000s@gmail.com",
                    message: formData.message
                },
                "xPF1TWjustmPfLHRn"
            )
            alert("Your message has been sent")
        } catch (error) {
            console.log(error)
            alert("Something went wrong")
        } finally {
            setFormData({
                name: "",
                email: "",
                message: ""
            })
            setIsLoading(false)
        }
    }

    return (
        <section id='contact' className="c-space my-20">

            <div className="relative py-8 px-2 md:py-12 lg:p-0 lg:min-h-screen flex items-center justify-center flex-col max-lg:bg-black-300/50 max-lg:rounded-xl">
                <img
                    src="/assets/terminal.png"
                    alt="terminal background image"
                    className="absolute inset-0 z-0 min-h-screen max-lg:hidden"
                />
                <div className="contact-container">
                    <h4 className="text-white-700 textShadow text-2xl md:text-3xl xl:text-3xl font-semibold tracking-wide">Let&apos;s Talk</h4>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.
                    </p>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 flex flex-col space-y-7"
                    >
                        <label className="space-y-3" htmlFor="name">
                            <span className="field-label">Full Name</span>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="John Doe"
                            />
                        </label>

                        <label className="space-y-3" htmlFor="email">
                            <span className="field-label">Email</span>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="johndoe@example.com"
                            />
                        </label>


                        <label className="space-y-3" htmlFor="message">
                            <span className="field-label">message</span>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input max-h-[250px]"
                                placeholder="Type your message here"
                            />
                        </label>
                        <button
                            type="submit"
                            className="field-btn capitalize"
                            disabled={isLoading}
                        >
                            {isLoading ? "sending..." : "send message"}
                            <img src="/assets/arrow-up.png" alt="arrow up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
