import { motion as m } from "framer-motion"

type Props = {
  setMouseHover: (value: boolean) => void
}

const Projects = ({ setMouseHover }: Props) => {
  return (
    <section className="w-full md:h-screen bg-gray-800 flex flex-col justify-center gap-y-20 md:gap-y-10 py-24 px-8 md:py-12 md:px-12 lg:px-24 rounded-b-xl">
      <div className="flex overflow-hidden lg:mb-20">
        <m.h2
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.50, duration: 0.75, type: "spring" }}
          className="flex text-gray-400 text-5xl md:text-6xl lg:text-7xl font-semibold"
          onMouseOver={() => setMouseHover(true)}
          onMouseLeave={() => setMouseHover(false)}
        >
          Experience.
        </m.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 items-end gap-20 sm:gap-10">
        <m.a
          href="https://drive.google.com/file/d/1g1J3LO-C5CFq6snWIN8gtJV-PZb8IRpA/view?usp=drive_link"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="max-content flex items-center gap-x-1 hover:text-sky-500 hover:underline max-sm:order-1"
          target="_blank"
          onMouseOver={() => setMouseHover(true)}
          onMouseLeave={() => setMouseHover(false)}
        >
          RESUME
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </m.a>

        <m.ol initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.75, duration: 1 }} className="relative border-l border-gray-200 dark:border-gray-700 space-y-10">
          <li className="ml-4 md:ml-6">
            <div className="absolute w-4 h-4 bg-gray-200 rounded-full mt-1.5 -left-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-white flex mb-1 md:mb-0">
              Frontend Developer Freelance
            </h3>
            <div className="flex flex-col md:flex-row md:items-center">
              <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2023 - PRESENT</time>
            </div>
          </li>

          <li className="ml-4 md:ml-6">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <div className="flex mb-1 lg:mb-0 gap-x-1">
              <h3 className="text-lg font-medium text-white">
                Frontend Developer <span className="text-gray-500">at</span>
              </h3>
              <a href="https://www.linkedin.com/company/jobint" className="flex items-center gap-x-1 hover:text-sky-500 hover:underline" target="_blank" onMouseOver={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)}>
                Jobint
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-x-2 gap-y-2 lg:gap-y-0">
              <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2022 - February 2023</time>
              <p className="text-sm font-normal text-gray-400 dark:text-gray-500">(1 year 1 month)</p>
            </div>
          </li>

          <li className="ml-4 md:ml-6">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <div className="flex mb-1 lg:mb-0 gap-x-1">
              <h3 className="text-lg font-medium text-white">
                Frontend Developer <span className="text-gray-500">at</span>
              </h3>
              <a href="https://www.linkedin.com/company/navent" className="flex items-center gap-x-1 hover:text-sky-500 hover:underline" target="_blank" onMouseOver={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)}>
                Navent
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-x-2 gap-y-2 lg:gap-y-0">
              <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2015 - January 2022</time>
              <p className="text-sm font-normal text-gray-400 dark:text-gray-500">(6 years 8 months)</p>
            </div>
          </li>

          <li className="ml-4 md:ml-6">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <div className="flex flex-col lg:flex-row mb-1 lg:mb-0 gap-x-1">
              <h3 className="text-lg font-medium text-white">
                Graphic Designer & Web <span className="text-gray-500">at</span>
              </h3>
              <a href="https://www.linkedin.com/company/resermap" className="flex items-center gap-x-1 hover:text-sky-500 hover:underline" target="_blank" onMouseOver={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)}>
                Resermap
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-x-2 gap-y-2 lg:gap-y-0">
              <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2013 - June 2015</time>
              <p className="text-sm font-normal text-gray-400 dark:text-gray-500">(1 year 11 months)</p>
            </div>
          </li>
        </m.ol>
      </div>
    </section>
  )  
}

export default Projects