function About() {
    return (
        <section id="about" className="min-h-screen flex flex-col items-center justify-center justify-content px-8 md:px-16 py-16">

            <h2 className="text-4xl md:text-5xl font-bold">
                About Me
            </h2>

            <div className="max-w-4xl mt-12 p-8 md:p-12 rounded-3xl bg-[var(--secondary)]">


            {/* My journey */}
            <div className="max-w-4xl mt-12">
                <h3 className="text-3xl font-semibold">
                    My Journey
                </h3>

                <p className="mt-4 text-lg leading-relaxed">
                    I'm currently studying software development and have been exploring different areas of programming, from web development to game development. What started as learning the fundamentals has grown into an interest in creating projects where I can experiment, solve problems, and turn ideas into something people can actually interact with.
                </p>
            </div>

            {/* Personality Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mt-12">

                <div>
                    <h3 className="text-3xl font-semibold">
                        Who I Am
                    </h3>

                    <p className="mt-4 text-lg leading-relaxed">
                        I'm someone who enjoys being creative and tends to get
                        especially invested in the things I'm interested in.
                        I like exploring ideas, experimenting with new concepts,
                        and learning by actually building things.
                    </p>
                </div>

                <div>
                    <h3 className="text-3xl font-semibold">
                        What I Enjoy
                    </h3>

                    <p className="mt-4 text-lg leading-relaxed">
                        I enjoy both the technical and creative sides of
                        development. Web projects let me focus on design and
                        user experience, while game development gives me a
                        place to experiment with worlds, mechanics, and
                        storytelling.
                    </p>
                </div>

                </div>

            </div>

        </section>
    )
}

export default About