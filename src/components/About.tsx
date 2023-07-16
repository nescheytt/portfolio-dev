type Props = {
  setMouseHover: (value: boolean) => void
}

const About = ({ setMouseHover }: Props) => {
  return (
    <section className="bg-gray-800 w-full xl:h-screen flex flex-col justify-center items-center py-24 px-12 sm:px-12 md:p-24 rounded-b-xl bg-gradient-radial from-gray-700 via-gray-800 to-gray-800 ">
      <div className="w-full md:max-w-4xl flex flex-col cursor-default gap-y-4 md:gap-y-8" onMouseOver={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)}>
        <p className="text-gray-500 font-bold text-2xl max-md:text-center md:text-4xl hover:text-gray-300 transition duration-500 hover:scale-105">
          I started this passionate adventure in web technologies <span className="text-gray-300">8+ years</span> ago.
        </p>
        <p className="text-gray-500 font-bold text-2xl max-md:text-center md:text-4xl hover:text-gray-300 transition duration-500 hover:scale-105">
          During all this time my developments were becoming <span className="text-gray-300">pixel-expert</span>, performant, accessible, and <span className="text-gray-300">full-responsive</span> websites/applications.
        </p>
        <p className="text-gray-500 font-bold text-2xl max-md:text-center md:text-4xl hover:text-gray-300 transition duration-500 hover:scale-105">
          {`I've always been enthusiastic about the whole development aspect so I often participate in the `}<span className="text-gray-300">backend.</span>
        </p>
        <p className="text-gray-500 font-bold text-2xl max-md:text-center md:text-4xl hover:text-gray-300 transition duration-500 hover:scale-105">
          <span className="text-gray-300">I love</span> working with ambitious people and agencies, with beautiful designs and experiences.
        </p>
      </div>
    </section>
  )  
}

export default About