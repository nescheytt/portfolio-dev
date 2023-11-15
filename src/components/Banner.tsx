import Image from 'next/image'
import { motion as m } from 'framer-motion'
import PictureProfile from '@/assets/images/profile.jpg'

const Banner = () => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-between px-4 pb-0 pt-14 sm:relative sm:justify-center lg:px-12">
      <div className="flex h-screen w-full flex-col justify-center gap-20 sm:h-auto sm:flex-row sm:items-center sm:gap-10 xl:justify-between">
        <div className="max-sm:space-y-2 sm:self-start">
          <div className="overflow-hidden sm:max-w-sm lg:max-w-4xl">
            <m.h1 animate={{ y: 0 }} initial={{ y: "100%" }} transition={{ delay: 0.25, duration: 1, type: "spring" }} className="text-5xl font-semibold uppercase text-gray-800 sm:text-6xl lg:text-8xl xl:text-9xl">
              Frontend Developer
            </m.h1>
          </div>

          <div className="max-w-xs overflow-hidden md:max-w-xl">
            <m.p animate={{ x: 0 }} initial={{ x: "-100%" }} transition={{ delay: 0.75, duration: 1, type: "spring" }} className="text-sm uppercase text-gray-800 md:text-lg">
              {`--> Focused on building user interfaces in React`}
            </m.p>
          </div>
        </div>

        <div className="flex flex-col gap-y-2 overflow-hidden">
          <m.div
            animate={{ x: 0 }}
            initial={{ x: "100%" }}
            transition={{ delay: 1, duration: 1, type: "spring" }}
            className="h-[240px] w-full overflow-hidden sepia-[.25] sm:h-full xl:w-[500px]"
          >
            <Image src={PictureProfile} alt="Fotito mia" className="-translate-y-1/4 sm:translate-y-0" priority />
          </m.div>

          <m.div animate={{ x: 0 }} initial={{ x: "100%" }} transition={{ delay: 1.25, duration: 1, type: "spring" }} className="flex justify-center">
            <p className="w-full text-right text-base uppercase text-gray-800 md:text-xl">
              {`Happy Freelance Dev`}
            </p>
          </m.div>
        </div>
      </div>

      <m.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 1.50, duration: 1 }} className="bottom-4 flex flex-col items-center justify-center sm:absolute">
        <div className="flex h-11 w-11 animate-bounce items-center justify-center rounded-full">
          <span className="text-4xl text-gray-800">↓</span>
        </div>
        <p className="hidden text-sm text-gray-700 lg:block">SCROLL</p>
      </m.div>
    </section>
  )
}

export default Banner