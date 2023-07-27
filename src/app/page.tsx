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

  return (
    <main>
      <Header onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
      <Cursor isMouseHover={isMouseHover} />
      <ButtonScrollTop />
      <Banner />
      <About onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
      <Skills onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
      <Experience onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
      <Contact onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
      <Footer onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
    </main>
  )
}
