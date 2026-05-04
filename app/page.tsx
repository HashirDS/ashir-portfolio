import Navbar from '@/components/Navbar'
import PageLoader from '@/components/PageLoader'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main>
      <PageLoader />
      <Navbar />
      <Hero />
      <Stats />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}