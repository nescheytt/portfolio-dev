import { motion as m } from "framer-motion"
import { listFrameworksLibsOthers, listLengauges } from "@/data/skills"
import { useMouseEventsContext } from "@/context/mouseEvents"

const titleVars = {
  initial: {
    x: "-100%",
  },
  animate: {
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.75,
      type: "spring",
    },
  },
}

const skillVars = {
  container: {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        delayChildren: 1,
        staggerChildren: 0.2,
      },
    },
  },
  item: {
    hidden: {
      y: 0,
      opacity: 0,
    },
    show: {
      y: "-100%",
      opacity: 1,
    },
  },
}

const Skills = () => {
  const mouseEvents = useMouseEventsContext()

  return (
    <section className="flex h-full w-full flex-col justify-center gap-y-10 p-6 px-12 py-24 md:h-screen md:py-12 lg:px-24">
      <div className="overflow-hidden max-md:w-full md:flex">
        <m.h2
          variants={titleVars}
          initial="initial"
          whileInView="animate"
          className="flex text-5xl font-semibold text-gray-800 md:text-6xl lg:text-7xl"
          onMouseOver={mouseEvents.onMouseOver}
          onMouseLeave={mouseEvents.onMouseLeave}
        >
          Skills.
        </m.h2>
      </div>

      <div className="flex w-full flex-col items-baseline justify-end gap-x-20 md:max-w-7xl md:flex-row md:gap-x-10">
        <m.section
          variants={skillVars.container}
          initial="hidden"
          whileInView="show"
          className="flex flex-col gap-y-10"
        >
          <h3 className="text-2xl font-semibold text-gray-700 md:text-xl">
            Languages
          </h3>

          <ul className="list-inside list-disc font-semibold text-gray-600">
            {listLengauges.map((lenguage, index) => (
              <m.li
                key={index}
                variants={skillVars.item}
                className="text-lg md:text-base"
              >
                {lenguage}
              </m.li>
            ))}
          </ul>
        </m.section>

        <m.section
          variants={skillVars.container}
          initial="hidden"
          whileInView="show"
          className="flex flex-col gap-y-10"
        >
          <h3 className="text-2xl font-semibold text-gray-700 md:text-xl">
            Frameworks / Libs / Others
          </h3>

          <ul className="list-inside list-disc font-semibold text-gray-600">
            {listFrameworksLibsOthers.map((lenguage, index) => (
              <m.li
                key={index}
                variants={skillVars.item}
                className="text-lg md:text-base"
              >
                {lenguage}
              </m.li>
            ))}
          </ul>
        </m.section>

        <m.section
          variants={skillVars.container}
          initial="hidden"
          whileInView="show"
          className="flex flex-col gap-y-10"
        >
          <h3 className="text-2xl font-semibold text-gray-700 md:text-xl">
            Specials
          </h3>

          <m.p
            variants={skillVars.item}
            className="text-lg font-semibold text-gray-600 md:text-base"
          >
            Googling
            <span role="img" aria-label="Emoji smile" className="ml-2">
              😜
            </span>
          </m.p>
        </m.section>
      </div>
    </section>
  )
}

export default Skills
