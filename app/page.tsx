import Link from 'next/link';
import Projects from './components/projects';

export default function Home() {
  return (
    <>
      <section id="home" className="text-center flex flex-col items-center justify-center flex-grow py-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Page</h1>
        <p className="text-xl text-gray-400 mb-8">
          I build modern web applications with React, Next.js, and Tailwind CSS.
        </p>
        <Link
          href="/#projects"
          className="bg-white text-gray-900 font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors"
        >
          View My Work
        </Link>
      </section>

      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-300">
            <p className="mb-6">
              Hello! I'm a passionate and creative web developer with a knack for
              building beautiful and functional websites and applications. I have a
              strong foundation in front-end technologies and a growing interest in
              the back-end.
            </p>
            <p className="mb-6">
              My journey into web development started a few years ago, and since
              then, I've been constantly learning and honing my skills. I'm proficient
              in JavaScript, React, Next.js, and of course, Tailwind CSS for styling.
            </p>
            <p>
              When I'm not coding, you can find me exploring the latest tech trends,
              contributing to open-source projects, or enjoying a good cup of coffee.
            </p>
          </div>
        </div>
      </section>

      <Projects />

      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
          <div className="max-w-lg mx-auto">
            <form className="bg-gray-800 rounded-lg p-8">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-white text-gray-900 font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
