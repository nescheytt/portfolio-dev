import * as Yup from "yup"
import { Formik, Form, Field } from "formik"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useMouseEventsContext } from "@/context/mouseEvents"

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
    name: "",
    email: "",
    subject: "",
    message: "",
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email("Email entered is not valid")
      .required("Please enter your email"),
    subject: Yup.string().required("Please enter your subject"),
    message: Yup.string().required("Please enter your message"),
  })

  const handleSubmit = async (values: FormValues) => {
    await sleep(2000)

    const formData = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    }

    fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        response.json()
        if (response.status === 200) {
          toast("Hey 👋 Message sent 🚀!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          })
        }

        if (response.status === 500 || response.status === 400) {
          toast.error("Hi, try again 😅!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <section className="flex w-full flex-col items-end justify-between px-8 py-24 md:px-12 md:pb-6 md:pt-12 lg:px-24">
      <div className="flex max-w-3xl flex-col gap-y-20">
        <div className="w-full">
          <p className="text-base font-medium uppercase text-gray-800">
            Have a project in mind?
          </p>
          <p
            className="mb-4 text-5xl font-semibold text-gray-800 md:text-6xl lg:text-7xl"
            onMouseOver={mouseEvents.onMouseOver}
            onMouseLeave={mouseEvents.onMouseLeave}
          >
            {`Let's talk`}
            <span className="text-4xl">↓</span>.
          </p>
          <p className="text-base font-normal text-gray-500">
            {`I am currently interested in a "Full-time Front-end developer role (remote)" with specialization in "React.js", but still open to other opportunities. 
              However, if you have other requests or questions, feel free to use the form.`}
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            isSubmitting,
            values,
            touched,
          }) => (
            <Form>
              <div className="flex w-full flex-col gap-y-10">
                <div className="flex w-full flex-col gap-10 md:flex-row md:gap-20">
                  <div className="relative z-0 w-full">
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-gray-700 focus:outline-none focus:ring-0"
                      placeholder=" "
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label
                      htmlFor="name"
                      className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-base text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-gray-400"
                    >
                      Name
                    </label>
                    {errors.name && touched.name && (
                      <span className="absolute text-xs text-red-500">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="relative z-0 w-full">
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-gray-700 focus:outline-none focus:ring-0"
                      placeholder=" "
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label
                      htmlFor="email"
                      className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-base text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-gray-400"
                    >
                      Email
                    </label>
                    {errors.email && touched.email && (
                      <span className="absolute text-xs text-red-500">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="relative z-0">
                  <Field
                    type="text"
                    id="subject"
                    name="subject"
                    className="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-gray-700 focus:outline-none focus:ring-0"
                    placeholder=" "
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label
                    htmlFor="subject"
                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-base text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-gray-400"
                  >
                    Subject
                  </label>
                  {errors.subject && touched.subject && (
                    <span className="absolute text-xs text-red-500">
                      {errors.subject}
                    </span>
                  )}
                </div>

                <div className="relative z-0">
                  <textarea
                    id="message"
                    name="message"
                    className="peer block min-h-[180px] w-full appearance-none border-0 border-b border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-gray-700 focus:outline-none focus:ring-0"
                    placeholder=" "
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label
                    htmlFor="message"
                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-base text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-gray-400"
                  >
                    Message
                  </label>
                  {errors.message && touched.message && (
                    <span className="text-xs text-red-500 first-letter:absolute">
                      {errors.message}
                    </span>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center text-center text-4xl font-medium text-gray-700 disabled:animate-pulse disabled:cursor-not-allowed disabled:text-gray-500"
                    onMouseOver={mouseEvents.onMouseOver}
                    onMouseLeave={mouseEvents.onMouseLeave}
                    disabled={isSubmitting}
                  >
                    <span className="mr-6 font-semibold">Send</span>
                    <svg
                      className="h-10 w-10"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
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
