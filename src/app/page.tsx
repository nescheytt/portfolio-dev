'use client'

import Cursor from '@/components/Cursor'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ButtonScrollTop from '@/components/ButtonScrollTop'
import { MouseEventsContext } from '@/context/mouseEvents'
import useMouseEvents from '@/hooks/useMouseEvents'

export default function Home() {
  const { isMouseHover, onMouseOver, onMouseLeave } = useMouseEvents()

  return (
    <main>
      <MouseEventsContext.Provider value={{ isMouseHover, onMouseOver, onMouseLeave }}>
        <Header />
        <Cursor />
        <ButtonScrollTop />
        <Banner />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </MouseEventsContext.Provider>
    </main>
  )
}
