type ListExperiences = {
  id: number
  position: string
  company: {
    href: string
    name: string
  }
  date: {
    fromTo: string
    total: string
  }
}

export const listExperiences: Array<ListExperiences> = [
  {
    id: 1,
    position: "Frontend Developer React",
    company: {
      href: "https://www.linkedin.com/in/nahuel-scheytt",
      name: "Freelance",
    },
    date: {
      fromTo: "January 2023 - PRESENT",
      total: "",
    },
  },
  {
    id: 2,
    position: "Frontend Developer React",
    company: {
      href: "https://www.linkedin.com/company/jobint",
      name: "Jobint",
    },
    date: {
      fromTo: "January 2022 - January 2023",
      total: "(1 year)",
    },
  },
  {
    id: 3,
    position: "Senior Frontend Developer",
    company: {
      href: "https://www.linkedin.com/company/navent",
      name: "Navent",
    },
    date: {
      fromTo: "June 2015 - January 2022",
      total: "(6 years 8 months)",
    },
  },
  {
    id: 4,
    position: "Graphic Designer & Web",
    company: {
      href: "https://www.linkedin.com/company/resermap",
      name: "Resermap",
    },
    date: {
      fromTo: "August 2013 - June 2015",
      total: "(1 year 11 months)",
    },
  },
]
