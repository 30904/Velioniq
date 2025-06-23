import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <section className="bg-primary text-white text-center py-20 px-6">
      <h1
        className="text-4xl font-bold mb-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        AI-Powered Tool Suite Built for Enterprise Excellence
      </h1>
      <p
        className="max-w-3xl mx-auto text-lg"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Revolutionize your business with intelligent automation, document intelligence, and operational AI built to accelerate enterprise decision-making.
      </p>

      <div
        className="mt-8 flex justify-center gap-4"
        data-aos="zoom-in"
        data-aos-delay="500"
      >
        <a
          href="#contact"
          className="bg-white text-primary font-bold px-6 py-3 rounded shadow-md transition-all hover:scale-105 hover:shadow-lg"
        >
          Get a Demo
        </a>
        <a
          href="#products"
          className="border border-white text-white font-bold px-6 py-3 rounded transition hover:bg-white hover:text-primary"
        >
          Explore Suite
        </a>
      </div>
    </section>
  )
}
