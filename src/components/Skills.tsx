import { motion as m } from "framer-motion"

const listLengauges = ['HTML', 'CSS', 'LESS/SASS', 'VanillaJS', 'TypeScript']
const listFrameworksLibsOthers = ['React.js', 'Next.js', 'JQuery', 'Redux', 'Node.js', 'RestAPIs', 'Express.js', 'Git', 'Jest', 'React Testing Library', 'Styled Components', 'Tailwind CSS', 'Chakra UI', 'Material UI', 'Ant Design', 'Bootstrap', 'Storybook', 'Figma', 'Vercel']
const listSpecials = [
  {
    name: 'Googling',
    icon: <span role="img" aria-label="Tonque" className="ml-2">😜</span>
  },
  {
    name: 'StackOverflowing',
    icon: <span role="img" aria-label="Tonque" className="ml-2">😅</span>
  }
]

const container = {
  hidden: { 
    x: "-100%",
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      delayChildren: 1,
      staggerChildren: 0.2
    }
  } 
}

const item = {
  hidden: { 
    y: 0,
    opacity: 0
  },
  show: {
    y: "-100%",
    opacity: 1
  }
}

type Props = {
  setMouseHover: (value: boolean) => void
}

const Skills = ({ setMouseHover }: Props) => {
  return (
    <section className="w-full h-full md:h-screen flex flex-col justify-center gap-y-10 p-6 py-24 px-12 md:py-12 lg:px-24">
      <div className="w-full overflow-hidden">
        <m.h2
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.50, duration: 0.75, type: "spring" }}
          className="w-max text-gray-800 text-5xl md:text-6xl lg:text-7xl font-semibold"
          onMouseOver={() => setMouseHover(true)}
          onMouseLeave={() => setMouseHover(false)}
        >
          Skills.
        </m.h2>
      </div>

      <div className="w-full md:max-w-7xl flex flex-col md:flex-row items-baseline justify-end gap-x-20 md:gap-x-10">
        <m.section variants={container} initial="hidden" whileInView="show" className="flex flex-col gap-y-10">
          <m.h3 className="text-2xl md:text-xl font-semibold text-gray-700">Lenguages</m.h3>

          <ul className="list-inside list-disc text-gray-600 font-semibold">
            {listLengauges.map((lenguage, index) => (
              <m.li key={index} variants={item} className="text-lg md:text-base">{lenguage}</m.li>  
            ))}
          </ul>
        </m.section>

        <m.section variants={container} initial="hidden" whileInView="show" className="flex flex-col gap-y-10">
          <h3 className="text-2xl md:text-xl font-semibold text-gray-700">Frameworks / Libs / Others</h3>

          <ul className="list-inside list-disc text-gray-600 font-semibold">
            {listFrameworksLibsOthers.map((lenguage, index) => (
              <m.li key={index} variants={item} className="text-lg md:text-base">{lenguage}</m.li>  
            ))}
          </ul>
        </m.section>

        <m.section variants={container} initial="hidden" whileInView="show" className="flex flex-col gap-y-10">
          <h3 className="text-2xl md:text-xl font-semibold text-gray-700">Specials</h3>

          <ul className="list-inside list-disc text-gray-600 font-semibold">
            {listSpecials.map((lenguage, index) => (
              <m.li key={index} variants={item} className="text-lg md:text-base">{lenguage.name}{lenguage.icon}</m.li>
            ))}
          </ul>
        </m.section>
      </div>
    </section>
  )  
}

export default Skills