function Contact() {
    return (
        <section id="contact" className="min-h-screen px-8 md:px-16 py-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
                Contact Me
            </h2>

            <p className="text-lg md:text-xl text-center mt-4 max-w-3xl mx-auto">
                Paragraph PLACEHOLDER
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-16">

                {/* Contact form */}
                <div>
                    <form className="flex flex-col gap-6">

                        <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border-2 border-[var(--secondary)] bg-[var(--background)] outline-none focus:border-[var(--primary)]" />

                        <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border-2 border-[var(--secondary)] bg-[var(--background)] outline-none focus:border-[var(--primary)]" />

                        <textarea placeholder="Your Idea" rows="7" className="w-full px-4 py-3 rounded-lg border-2 border-[var(--secondary)] bg-[var(--background)] outline-none focus:border-[var(--primary)] rezise-none" />

                        <button type="submit" className="px-6 py-3 rounded-lg bg-[var(--secondary)] text-[var(--background)] font-semibold hover:opacity-80 transition">
                            Send Idea
                        </button>

                    </form>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="text-3xl font-bold">
                        Connect With Me
                    </h3>

                    <div className="flex flex-col gap-5 mt-8">

                        <a href="mailto: durandt07@gmail.com" className="text-lg hover:text-[var(--primary)] transition">
                            ✉️ durandt07@gmail.com
                        </a>

                        <a href="https://www.linkedin.com/in/durandt-boshoff-795b123b6/" className="text-lg hover:text-[var(--primary)] transition">
                            💼 LinkedIn
                        </a>

                        <a href="https://github.com/Durandt-Boshoff" className="text-lg hover:text-[var(--primary)] transition">
                            💻 GitHub
                        </a>

                    </div>

                    <div className="border-t-2 border-[var(--secondary)] mt-10 pt-8">
                        <p className="text-lg leading-relaxed">
                            I'm always interested in learning, building new projects, and connecting with people who enjoy creating things.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact