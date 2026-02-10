import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackgroundParticles from '@/components/BackgroundParticles'; // Import baru

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-black relative">
      <BackgroundParticles /> {/* Letakkan di sini agar berada di layer paling bawah */}
      <Navbar /> 
      <div className="pt-20"> {/* Pengganti <br /> agar lebih rapi */}
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}