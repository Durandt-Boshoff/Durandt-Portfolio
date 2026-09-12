import Clock from "../assets/Clock.png";
import TeamPortfolio from "../assets/Portfolio.png";
import QuizApp from "../assets/Quiz.png";

function Projects() {
    return (
        <section id="projects" className="min-h-screen px-8 md:px-16 py-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
                My Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">

                {/* Clock */}
                <div className="md:col-span-2 border-2 border-[var(--primary)] rounded-2xl overflow-hidden">
                    <img src={Clock} alt="Digital Clock" className="w-full h-64 object-cover" />
                    <div className="p-6">
                        <h3 className="text-3xl font-bold">
                            Digital Clock
                        </h3>
                    </div>
                </div>

                {/* Team Portfolio */}
                <div className="md:col-start-3 md:row-start-1 border-2 border-[var(--secondary)] rounded-2xl overflow-hidden">
                    <img src={TeamPortfolio} alt="Team Portfolio" className="w-full h-40 object-cover" />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold">
                            Team Portfolio
                        </h3>
                    </div>
                </div>

                {/* Quiz app */}
                <div className="col-start-3 md:row-start-2 border-2 border-[var(--secondary)] rounded-2xl overflow-hidden">
                    <img src={QuizApp} alt="Quiz App" className="w-full h-40 object-cover" />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold">
                            Quiz App
                        </h3>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Projects