import { useMouseEventsContext } from '@/context/mouseEvents'

const About = () => {
  const mouseEvents = useMouseEventsContext()

  return (
    <section className="flex w-full flex-col items-center justify-center rounded-b-xl bg-gray-800 bg-[radial-gradient(var(--tw-gradient-stops))] from-gray-700 via-gray-800 to-gray-800 px-4 py-24 md:h-screen md:px-24 ">
      <div className="flex w-full cursor-default flex-col gap-y-4 md:max-w-4xl md:gap-y-8" onMouseOver={mouseEvents.onMouseOver} onMouseLeave={mouseEvents.onMouseLeave}>
        <p className="text-2xl font-bold text-gray-500 transition duration-500 hover:scale-105 hover:text-gray-300 max-md:text-center md:text-4xl">
          I started this passionate adventure in web technologies <span className="text-gray-300">8+ years</span> ago.
        </p>
        <p className="text-2xl font-bold text-gray-500 transition duration-500 hover:scale-105 hover:text-gray-300 max-md:text-center md:text-4xl">
          During all this time, my developments have evolved into <span className="text-gray-300">pixel-perfect</span>, performant, accessible, and <span className="text-gray-300">fully responsive</span> websites/applications.
        </p>
        <p className="text-2xl font-bold text-gray-500 transition duration-500 hover:scale-105 hover:text-gray-300 max-md:text-center md:text-4xl">
          {`I've always been enthusiastic about the entire development process, so I often participate in the `}<span className="text-gray-300">backend development.</span>
        </p>
        <p className="text-2xl font-bold text-gray-500 transition duration-500 hover:scale-105 hover:text-gray-300 max-md:text-center md:text-4xl">
          <span className="text-gray-300">I love</span> working with ambitious people and agencies, with beautiful designs and experiences.
        </p>
      </div>
    </section>
  )
}

export default About