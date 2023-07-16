type Props = {
  setMouseHover: (value: boolean) => void
}

const Contact = ({ setMouseHover }: Props) => {
  return (
    <section className="w-full lg:h-screen flex flex-col justify-between items-end py-24 px-8 md:pt-12 md:px-12 lg:px-24 md:pb-6">
      <div className="max-w-3xl flex flex-col gap-y-20">
        <div className="w-full">
          <p className="text-gray-800 text-base font-medium uppercase">Have a project in mind?</p>
          <p className="text-gray-800 text-5xl md:text-6xl lg:text-7xl font-semibold mb-4" onMouseOver={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)}>
            {`Let's talk`}<span className="text-4xl">↓</span>.
          </p>
          <p className="text-gray-500 text-base font-normal">
            {`I am currently interested in a "Full-time Front-end developer role (remote)" with specialization in "React.js", but still open to other opportunities. 
              However, if you have other requests or questions, feel free to use the form.`}
          </p>
        </div>

        <form>
          <div className="w-full flex flex-col gap-y-10">
            <div className="w-full flex flex-col md:flex-row gap-10 md:gap-20">
              <div className="w-full relative z-0">
                <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-700 peer" placeholder=" " />
                <label htmlFor="floating_standard" className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
              </div>
              <div className="w-full relative z-0">
                <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-700 peer" placeholder=" " />
                <label htmlFor="floating_standard" className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
              </div>
            </div>

            <div className="relative z-0">
              <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-700 peer" placeholder=" " />
              <label htmlFor="floating_standard" className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
            </div>

            <div className="relative z-0">
              <textarea id="floating_standard" className="block py-2.5 px-0 w-full min-h-[180px] text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-700 peer" placeholder=" " />
              <label htmlFor="floating_standard" className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
            </div>

            <div>
              <button type="submit" className="text-gray-700 font-medium text-4xl text-center inline-flex items-center" onMouseOver={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)}>
                <span className="font-semibold mr-6">Send</span>
                <svg className="w-10 h-10 text-gray-800" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="m.819 50.513 8.307 8.238 38.423-38.454-.059 28.89h11.638V.424H10.47l-.14 11.564h28.983L.819 50.513Zm55.31-47.09v42.764V3.424Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )  
}

export default Contact