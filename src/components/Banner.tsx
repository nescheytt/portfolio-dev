import Image from 'next/image'
import { motion as m } from 'framer-motion'
import PictureProfile from '@/img/profile.jpg'

const Banner = () => {
  return (
    <section className="w-full h-screen flex flex-col md:justify-between items-center p-4 sm:pt-20 xl:pt-36 md:px-12 md:pb-12 gap-y-10">
      <div className="w-full flex flex-col max-md:space-y-6 md:flex-row justify-between md:items-center">
        <div className="max-sm:space-y-6">
          <div className="md:max-w-xl lg:max-w-4xl overflow-hidden">
            <m.h1 animate={{ y: 0 }} initial={{ y: "100%" }} transition={{ delay: 0.50, duration: 0.75, type: "spring" }} className="text-gray-800 text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-semibold uppercase">
              Frontend Developer
            </m.h1>
          </div>

          <div className="md:max-w-xl overflow-hidden">
            <m.p animate={{ x: 0 }} initial={{ x: "-100%" }} transition={{ delay: 1, duration: 1, type: "spring" }} className="text-gray-800 text-base md:text-lg uppercase">
              {`--> Concentrated on building user interfaces in React`}
            </m.p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-y-2 overflow-hidden">
          <m.div
            animate={{ x: 0 }}
            initial={{ x: "100%" }}
            transition={{ delay: 1.50, duration: 0.75, type: "spring" }}
            className="w-full sm:w-[350px] h-[320px] md:h-[400px] xl:h-[450px] overflow-hidden sepia-25"
          >
            <Image src={PictureProfile} alt="Fotito mia" className="md:translate-x-1/4 lg:translate-x-0" />
          </m.div>

          <m.div animate={{ x: 0 }} initial={{ x: "100%" }} transition={{ delay: 2, duration: 0.75, type: "spring" }} className="flex justify-center">
            <p className="text-gray-800 text-lg md:text-xl uppercase">
              {`Happy Freelance Dev`}
            </p>
          </m.div>
        </div>
      </div>

      <m.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 2.50, duration: 1 }} className="flex flex-col items-center justify-center">
        <div className="animate-bounce w-11 h-11 rounded-full flex items-center justify-center">
          <span className="text-gray-800 text-4xl">↓</span>
        </div>
        <p className="hidden lg:block text-sm text-gray-700">SCROLL</p>
      </m.div>
    </section>
  )
}

export default Banner