import { useState, useEffect } from "react"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark"
    })

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode)

        localStorage.setItem("theme", darkMode ? "dark" : "light")
    }, [darkMode])
    
    return (
        <nav className="fixed top-0 left-0 z-50 bg-[var(--background)] w-full px-8 py-4 border-b-2 border-[var(--secondary)]">

            <div className="hidden md:flex items-center justify-between">

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
                <button onClick={toggleDarkMode} className="px-5 py-2 rounded-lg bg-[var(--secondary)] text-[var(--text)] font-semibold hover:bg-[var(--primary)] transition">
                    {darkMode ? "☀️" : "🌙"}
                </button>
            </div>

            </div>

            <div className="md:hidden flex items-center justify-between">

                <h1 className="text-2xl font-bold">
                    Portfolio
                </h1>

                <button 
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-2xl">
                    {menuOpen ? "✖" : "☰"}
                    </button>

            </div>

            {menuOpen && (
                <div className="md:hdden flex flex-col items-center gap-4 py-6">

                    <a href="#home" onClick={() => setMenuOpen(false)}>
                        Home
                    </a>

                    <a href="#about" onClick={() => setMenuOpen(false)}>
                        About
                    </a>

                    <a href="#skills" onClick={() => setMenuOpen(false)}>
                        Skills
                    </a>

                    <a href="#projects" onClick={() => setMenuOpen(false)}>
                        Projects
                    </a>

                    <a href="#contact" onClick={() => setMenuOpen(false)}>
                        Contact
                    </a>

                    <button 
                        onClick={() => { 
                            toggleDarkMode() 
                            setMenuOpen(false)}}
                        className="px-5 py-2 rounded-lg bg-[var(--secondary)]"
                    >
                        {darkMode ? "☀️" : "🌙"}
                    </button>

                </div>
            )}

        </nav>
    )
}

export default Navbar