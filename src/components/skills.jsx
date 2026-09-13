function Skills() {
    return (
        <section id="skills" className="min-h-screen px-8 md:px-16 py-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
                My Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">

                <div className="p-8 rounded-2xl border-2 border-[var(--primary)]">
                    <h3 className="text-3xl font-bold">
                        Web Development
                    </h3>

                    <ul className="mt-4 list-disc list-inside space-y-1">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>

                <div className="p-8 rounded-2xl border-2 border-[var(--secondary)]">
                    <h3 className="text-3xl font-bold">
                        Programming
                    </h3>

                    <ul className="mt-4 list-disc list-inside space-y-1">
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Python</li>
                    </ul>
                </div>

                <div className="p-8 rounded-2xl border-2 border-[var(--primary)]">
                    <h3 className="text-3xl font-bold">
                        Game Development
                    </h3>

                    <ul className="mt-4 list-disc list-inside space-y-1">
                        <li>Godot</li>
                        <li>GDScript</li>
                    </ul>
                </div>

                <div className="p-8 rounded-2xl border-2 border-[var(--secondary)]">
                    <h3 className="text-3xl font-bold">
                        Tools
                    </h3>

                    <ul className="mt-4 list-disc list-inside space-y-1">
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>VS Code</li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default Skills