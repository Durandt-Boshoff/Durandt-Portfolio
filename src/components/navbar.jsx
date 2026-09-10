function Navbar() {
    return (
        <nav className="w-full px-8 py-4 flex items-center justify-between">

            {/* Left: Name */}
            <div>
                <h1 className="text-2xl font-bold">
                    Portfolio
                </h1>
            </div>

            {/* Middle: Navigation */}
            <div className="flex gap-8">
                <a href="#home" className="hover:text-gray-400 transition">
                    Home
                </a>

                <a href="#about" className="hover:text-gray-400 transition">
                    About
                </a>

                <a href="#skills" className="hover:text-gray-400 transition">
                    Skills
                </a>

                <a href="#projects" className="hover:text-gray-400 transition">
                    Projects
                </a>

                <a href="#contact" className="hover:text-gray-400 transition">
                    Contact
                </a>
            </div>

            {/* Right: Extra button */}
            <div>
                <button className="px-5 py-2 rounded-lg bg-[var(--secondary)] text-[var(--text)] font-semibold hover:bg-[var(--primary)] transition">
                    Button
                </button>
            </div>

        </nav>
    )
}

export default Navbar