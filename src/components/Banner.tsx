import Image from 'next/image'
import { motion as m } from 'framer-motion'
import PictureProfile from '@/img/profile.jpg'

const Banner = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-between sm:justify-center items-center px-4 lg:px-12 pt-14 pb-0 sm:relative">
      <div className="w-full h-screen sm:h-auto flex flex-col sm:flex-row justify-center xl:justify-between sm:items-center gap-20 sm:gap-10">
        <div className="max-sm:space-y-2 sm:self-start">
          <div className="sm:max-w-sm lg:max-w-4xl overflow-hidden">
            <m.h1 animate={{ y: 0 }} initial={{ y: "100%" }} transition={{ delay: 0.25, duration: 1, type: "spring" }} className="text-gray-800 text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-semibold uppercase">
              Frontend Developer
            </m.h1>
          </div>

          <div className="max-w-xs md:max-w-xl overflow-hidden">
            <m.p animate={{ x: 0 }} initial={{ x: "-100%" }} transition={{ delay: 0.75, duration: 1, type: "spring" }} className="text-gray-800 text-sm md:text-lg uppercase">
              {`--> Focused on building user interfaces in React`}
            </m.p>
          </div>
        </div>

        <div className="flex flex-col gap-y-2 overflow-hidden">
          <m.div
            animate={{ x: 0 }}
            initial={{ x: "100%" }}
            transition={{ delay: 1, duration: 1, type: "spring" }}
            className="w-full h-[240px] sm:h-full xl:w-[500px] sepia-25 overflow-hidden"
          >
            <Image src={PictureProfile} alt="Fotito mia" className="-translate-y-1/4 sm:translate-y-0" priority />
          </m.div>

          <m.div animate={{ x: 0 }} initial={{ x: "100%" }} transition={{ delay: 1.25, duration: 1, type: "spring" }} className="flex justify-center">
            <p className="w-full text-gray-800 text-base md:text-xl text-right uppercase">
              {`Happy Freelance Dev`}
            </p>
          </m.div>
        </div>
      </div>

      <m.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 1.50, duration: 1 }} className="flex flex-col i tems-center justify-center sm:absolute bottom-4">
        <div className="animate-bounce w-11 h-11 rounded-full flex items-center justify-center">
          <span className="text-gray-800 text-4xl">↓</span>
        </div>
        <p className="hidden lg:block text-sm text-gray-700">SCROLL</p>
      </m.div>
    </section>
  )
}

export default Banner