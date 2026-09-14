import DurandtImage from "../assets/Durandt.jpeg"

function Home() {
    return (
        <section 
            id="home"
            className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-8 md:px-16 py-16 border-2 border-[var(--primary)] rounded-3xl m-4 md:m-8 pt-20">

            {/* left: picture */}
            <div>
                <div>
                    <img src={DurandtImage} alt="Durandt Boshoff" className="w-64 md:w-80 rounded-2xl border-4 border-[var(--secondary)] shadow-lg" />
                </div>
            </div>

            {/* right: info */}
            <div className="max-w-lg text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-bold">
                    Johannes Durandt Boshoff
                </h1>

                <p className="mt-6 text-lg md:text-xl leading-relaxed">
                    I’m a passionate and curious developer who enjoys turning creative ideas into interactive experiences. I’m currently building my skills in web development while exploring my growing interest in game development. I love learning through hands-on projects, experimenting with new ideas, and solving problems along the way, always looking for new challenges that help me grow and create something people can enjoy.

                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                    <a href="#projects" className="px-6 py-3 rounded-lg bg-[var(--secondary)] text-[var(--text)] font-semibold hover:bg-[var(--primary)] hover:text-[var(--background)] transition">
                        My Projects
                    </a>

                    <a href="#contact" className="px-6 py-3 rounded-lg bg-[var(--secondary)] text-[var(--text)] font-semibold hover:bg-[var(--primary)] hover:text-[var(--background)] transition">
                        Contact Me
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Home