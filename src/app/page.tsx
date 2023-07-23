"use client"

import { useState } from 'react'

import Cursor from '@/components/Cursor'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Skills  from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ButtonScrollTop from '@/components/ButtonScrollTop'

export default function Home() {
  const [mouseHover, setMouseHover] = useState(false)

  return (
    <main>
      <Header setMouseHover={setMouseHover} />
      <Cursor mouseHover={mouseHover} />
      <ButtonScrollTop />
      <Banner />
      <About setMouseHover={setMouseHover} />
      <Skills setMouseHover={setMouseHover} />
      <Experience setMouseHover={setMouseHover} />
      <Contact setMouseHover={setMouseHover} />
      <Footer setMouseHover={setMouseHover} />
    </main>
  )
}
