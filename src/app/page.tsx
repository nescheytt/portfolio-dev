"use client"

import Cursor from '@/components/Cursor'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Skills  from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ButtonScrollTop from '@/components/ButtonScrollTop'
import useMouseEvents from "@/hooks/useMouseEvents"

export default function Home() {
  const { isMouseHover, onMouseOver, onMouseLeave } = useMouseEvents()
  const shared = { onMouseOver, onMouseLeave }

  return (
    <main>
      <Header {...shared} />
      <Cursor isMouseHover={isMouseHover} />
      <ButtonScrollTop />
      <Banner />
      <About {...shared} />
      <Skills {...shared} />
      <Experience {...shared} />
      <Contact {...shared} />
      <Footer {...shared} />
    </main>
  )
}
