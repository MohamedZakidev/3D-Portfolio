function Footer() {
    return (
        <section className="c-space pt-7 border-t pb-5 border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p> | </p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-5">
                <a
                    href="https://github.com/MohamedZakidev"
                    className="social-icon"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="/assets/github.svg" alt="github logo"
                        className="w-1/2 h-1/2"
                    />
                </a>

                <a
                    href="https://github.com/MohamedZakidev"
                    className="social-icon"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="/assets/linkedin.png" alt="github logo"
                    />
                </a>
            </div>
            <p className="text-white-500">© 2024 Mohamed Zaki. All rights reserved.</p>
        </section>
    )
}

export default Footer
