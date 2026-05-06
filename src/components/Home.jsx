export default function Home() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-cyan-400">
                Portfolio Design & Development
            </h1>
            <p className="mt-4 text-gray-300 max-w-xl">
                I build modern, responsive websites and portfolio designs that help you grow online.
            </p>
            <a
                href="#contact"
                className="mt-6 px-6 py-3 bg-cyan-400 text-black rounded-lg font-semibold hover:scale-105 transition"
            >
                Hire Me
            </a>
        </section>
    );
}