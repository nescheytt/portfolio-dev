import { motion as m } from 'framer-motion'
import { listFrameworksLibsOthers, listLengauges, settingsFramerMotion } from '@/data/skills'
import { useMouseEventsContext } from '@/context/mouseEvents'

const Skills = () => {
  const mouseEvents = useMouseEventsContext()

  return (
    <section className="w-full h-full md:h-screen flex flex-col justify-center gap-y-10 p-6 py-24 px-12 md:py-12 lg:px-24">
      <div className="max-md:w-full md:flex overflow-hidden">
        <m.h2
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.50, duration: 0.75, type: "spring" }}
          className="flex text-gray-800 text-5xl md:text-6xl lg:text-7xl font-semibold"
          onMouseOver={mouseEvents.onMouseOver}
          onMouseLeave={mouseEvents.onMouseLeave}
        >
          Skills.
        </m.h2>
      </div>

      <div className="w-full md:max-w-7xl flex flex-col md:flex-row items-baseline justify-end gap-x-20 md:gap-x-10">
        <m.section variants={settingsFramerMotion.container} initial="hidden" whileInView="show" className="flex flex-col gap-y-10">
          <h3 className="text-2xl md:text-xl font-semibold text-gray-700">Languages</h3>

          <ul className="list-inside list-disc text-gray-600 font-semibold">
            {listLengauges.map((lenguage, index) => (
              <m.li key={index} variants={settingsFramerMotion.item} className="text-lg md:text-base">{lenguage}</m.li>
            ))}
          </ul>
        </m.section>

        <m.section variants={settingsFramerMotion.container} initial="hidden" whileInView="show" className="flex flex-col gap-y-10">
          <h3 className="text-2xl md:text-xl font-semibold text-gray-700">Frameworks / Libs / Others</h3>

          <ul className="list-inside list-disc text-gray-600 font-semibold">
            {listFrameworksLibsOthers.map((lenguage, index) => (
              <m.li key={index} variants={settingsFramerMotion.item} className="text-lg md:text-base">{lenguage}</m.li>
            ))}
          </ul>
        </m.section>

        <m.section variants={settingsFramerMotion.container} initial="hidden" whileInView="show" className="flex flex-col gap-y-10">
          <h3 className="text-2xl md:text-xl font-semibold text-gray-700">Specials</h3>

          <m.p variants={settingsFramerMotion.item} className="text-gray-600 font-semibold text-lg md:text-base">Googling <span role="img" aria-label="Tonque" className="ml-2">😜</span></m.p>
        </m.section>
      </div>
    </section>
  )
}

export default Skills