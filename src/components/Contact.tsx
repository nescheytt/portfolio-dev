'use client'

import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useMouseEventsContext } from '@/context/mouseEvents'

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

type FormValues = {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const mouseEvents = useMouseEventsContext()
  
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Please enter your name'),
    email: Yup.string().email('Email entered is not valid').required('Please enter your email'),
    subject: Yup.string().required('Please enter your subject'),
    message: Yup.string().required('Please enter your message'),
  })

  const handleSubmit = async (values: FormValues) => {
    await sleep(2000);

    const formData = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message
    }

    fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(response => {
      response.json()
      if (response.status === 200) {
        toast("Hey 👋 Message sent 🚀!", {
          position: toast.POSITION.BOTTOM_RIGHT
        })  
      }

      if (response.status === 500 || response.status === 400) {
        toast.error("Hi, try again 😅!", {
          position: toast.POSITION.BOTTOM_RIGHT
        })
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <section className="w-full flex flex-col justify-between items-end py-24 px-8 md:pt-12 md:px-12 lg:px-24 md:pb-6">
      <div className="max-w-3xl flex flex-col gap-y-20">
        <div className="w-full">
          <p className="text-gray-800 text-base font-medium uppercase">Have a project in mind?</p>
          <p className="text-gray-800 text-5xl md:text-6xl lg:text-7xl font-semibold mb-4" onMouseOver={mouseEvents.onMouseOver} onMouseLeave={mouseEvents.onMouseLeave}>
            {`Let's talk`}<span className="text-4xl">↓</span>.
          </p>
          <p className="text-gray-500 text-base font-normal">
            {`I am currently interested in a "Full-time Front-end developer role (remote)" with specialization in "React.js", but still open to other opportunities. 
              However, if you have other requests or questions, feel free to use the form.`}
          </p>
        </div>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ errors, handleBlur, handleChange, isSubmitting, values, touched }) => (
            <Form>
              <div className="w-full flex flex-col gap-y-10">
                <div className="w-full flex flex-col md:flex-row gap-10 md:gap-20">
                  <div className="w-full relative z-0">
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-700 peer"
                      placeholder=" "
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="name" className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    {errors.name && touched.name && <span className="text-xs text-red-500 absolute">{errors.name}</span>}
                  </div>
                  <div className="w-full relative z-0">
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-700 peer"
                      placeholder=" "
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="email" className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    {errors.email && touched.email && <span className="text-xs text-red-500 absolute">{errors.email}</span>}
                  </div>
                </div>

                <div className="relative z-0">
                  <Field
                    type="text"
                    id="subject"
                    name="subject"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-700 peer"
                    placeholder=" "
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="subject" className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
                  {errors.subject && touched.subject && <span className="text-xs text-red-500 absolute">{errors.subject}</span>}
                </div>

                <div className="relative z-0">
                  <textarea
                    id="message"
                    name="message"
                    className="block py-2.5 px-0 w-full min-h-[180px] text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-700 peer"
                    placeholder=" "
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="message" className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                  {errors.message && touched.message && <span className="text-xs text-red-500 first-letter:absolute">{errors.message}</span>}
                </div>

                <div>
                  <button
                    type="submit"
                    className="text-gray-700 font-medium text-4xl text-center inline-flex items-center disabled:animate-pulse disabled:text-gray-500 disabled:cursor-not-allowed"
                    onMouseOver={mouseEvents.onMouseOver}
                    onMouseLeave={mouseEvents.onMouseLeave}
                    disabled={isSubmitting}
                  >
                    <span className="font-semibold mr-6">Send</span>
                    <svg className="w-10 h-10" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="m.819 50.513 8.307 8.238 38.423-38.454-.059 28.89h11.638V.424H10.47l-.14 11.564h28.983L.819 50.513Zm55.31-47.09v42.764V3.424Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <ToastContainer toastClassName="bg-red-500" />
            </Form>
          )}
        </Formik>
      </div>
    </section>
  )  
}

export default Contact