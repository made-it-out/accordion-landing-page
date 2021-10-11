import Accordion from "../components/Accordion";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import { example } from "../data/accordions";
import { first, second } from "../data/features";


export default function Home() {
  return (
    <div className="home">
      <Hero />

      <Features data={first} />

      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="flex-center flex-column">
          <h2 style={{marginBottom: '2rem'}}>See it in action</h2>
          <Accordion index={0} data={example} />
        </div>
      </div>

      <Logos />

      <Features data={second} />

      <Testimonials />

      <Pricing />

    </div>
  )
}
