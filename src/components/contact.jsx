import { useForm, ValidationError } from "@formspree/react"

function Contact() {
    const [state, handleSubmit] = useForm("xnpqkjob")
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
                    {state.succeeded ? (
                        <div className="p-8 rounded-2xl border-2 border-[var(--primary)]">
                            <h3 className="text-3xl font-bold">
                                Message Sent!
                            </h3>

                            <p className="mt-4 text-lg leading-relaxed">
                                Thanks for reaching out. I'll get back to you soon.
                            </p>
                        </div>

                    ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                        <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-3 rounded-lg border-2 border-[var(--secondary)] bg-[var(--background)] outline-none focus:border-[var(--primary)]" />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />

                        <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-3 rounded-lg border-2 border-[var(--secondary)] bg-[var(--background)] outline-none focus:border-[var(--primary)]" />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />

                        <textarea name="message" placeholder="Your Idea" rows="7" required className="w-full px-4 py-3 rounded-lg border-2 border-[var(--secondary)] bg-[var(--background)] outline-none focus:border-[var(--primary)] rezise-none" />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />

                        <button type="submit" disabled={state.submitting} className="px-6 py-3 rounded-lg bg-[var(--secondary)] text-[var(--text)] font-semibold hover:bg-[var(--primary)] hover:text-[var(--background)] transition disabled:opacity-50">
                            {state.submitting ? "Sending..." : "Send Message"}
                        </button>

                    </form>
                    )}
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="text-3xl font-bold">
                        Connect With Me
                    </h3>

                    <div className="flex flex-col gap-5 mt-8">

                        <a href="mailto: durandt07@gmail.com" className="text-lg hover:text-[var(--primary)] transition">
                            <i className="fa-solid fa-envelope"></i>
                            durandt07@gmail.com
                        </a>

                        <a href="https://www.linkedin.com/in/durandt-boshoff-795b123b6/" className="text-lg hover:text-[var(--primary)] transition">
                            <i className="fa-brands fa-linkedin"></i>
                            LinkedIn
                        </a>

                        <a href="https://github.com/Durandt-Boshoff" className="text-lg hover:text-[var(--primary)] transition">
                            <i className="fa-brands fa-github"></i>
                            GitHub
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