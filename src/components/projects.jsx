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
                    <img src={Clock} alt="Digital Clock" className="w-full h-72 object-cover" />
                    <div className="p-6">
                        <h3 className="text-3xl font-bold">
                            Digital Clock
                        </h3>

                        <p className="mt-4 text-lg leading-relaxed">
                            A responsive digital clock built with HTML, CSS, and JavaScript. The project displays the current time, date, and day while adapting its visuals depending on the time of day. The project follows a natural theme showing a lushful forest during the day and after 6 pm it transition into a quiet forest night.
                        </p>

                        <div className="mt-6">
                            <h4 className="text-xl font-semibold">
                                Features:
                            </h4>

                            <ul className="mt-3 list-disc list-inside space-y-1">
                                <li>12-hour time format</li>
                                <li>24-hour time format</li>
                                <li>Current date display</li>
                                <li>Current day display</li>
                                <li>Day, night, and automatic visual modes</li>
                                <li>Responsive design</li>
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-6">
                            <span className="px-3 py-1 rounded-md bg-[var(--secondary)]">
                                HTML
                            </span>
                            <span className="px-3 py-1 rounded-md bg-[var(--secondary)]">
                                CSS
                            </span>
                            <span className="px-3 py-1 rounded-md bg-[var(--secondary)]">
                                JavaScript
                            </span>
                        </div>

                        <a href="https://woodlandclock.netlify.app/" target="-blank" rel="noopener noreferrer"
                            className="inline-block mt-6 px-5 py-2 rounded-lg bg-[var(--primary)] text-[var(--background)] font-semibold hover:opacity-80 transition">
                                View Project <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                            </a>
                    </div>
                </div>

                {/* Right column*/}
                <div className="flex flex-col gap-8">

                {/* Team Portfolio */}
                <div className="md:col-start-3 md:row-start-1 border-2 border-[var(--secondary)] rounded-2xl overflow-hidden">
                    <img src={TeamPortfolio} alt="Team Portfolio" className="w-full h-48 object-contain bg-white p-2" />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold">
                            Team Portfolio
                        </h3>

                        <p className="mt-3 text-lg leading-relaxed">
                            A collaborative portfolio project created as part of a team,
                            focusing on responsive design and presenting our work.
                        </p>

                        <div className="flex flex-wrap gap-2 mt-5">
                            <span className="px-3 py-1 rounded-md bg-[var(--secondary)]">
                                HTML
                            </span>
                            <span className="px-3 py-1 rounded-md bg-[var(--secondary)]">
                                CSS
                            </span>
                        </div>

                        <a href="https://teamtechtitans.netlify.app/" target="-blank" rel="noopener noreferrer"
                            className="inline-block mt-5 px-5 py-2 rounded-lg bg-[var(--primary)] text-[var(--background)] font-semibold hover:opacity-80 transition">
                            View Project <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                        </a>
                    </div>
                </div>

                {/* Quiz app */}
                <div className="col-start-3 md:row-start-2 border-2 border-[var(--secondary)] rounded-2xl overflow-hidden">
                    <img src={QuizApp} alt="Quiz App" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold">
                            Quiz App
                        </h3>

                        <p className="mt-3 text-lg leading-relaxed">
                            A multi-topic quiz application created as a
                            collaborative project, combining quiz logic, responsive
                            interfaces, and interactive screens.
                        </p>

                        <div className="flex flex-wrap gap-2 mt-5">
                            <span className="px-3 py-1 rounded-md bg-[var(--secondary)]">
                                CSS
                            </span>
                            <span className="px-3 py-1 rounded-md bg-[var(--secondary)]">
                                JavaScript
                            </span>
                        </div>

                        <a href="https://quizversebuilder.netlify.app/" target="-blank" rel="noopener noreferrer"
                            className="inline-block mt-5 px-5 py-2 rounded-lg bg-[var(--primary)] text-[var(--background)] font-semibold hover:opacity-80 transition">
                            View Project <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                        </a>
                    </div>
                </div>
                </div>

            </div>

        </section>
    )
}

export default Projects