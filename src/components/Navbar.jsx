function Navbar() {
    return (
        <header className="fixed border border-cyan-500 top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-full mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Mohamed Zaki
                    </a>
                    <button>
                        <img src="/assets/hamburger.svg" alt="hamburger" className="w-8 h-8" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar
