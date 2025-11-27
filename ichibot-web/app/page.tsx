import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero'; // ⬅️ IMPORT BARU DI SINI

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar /> 
      <Hero />  {/* ⬅️ KOMPONEN HERO DITAMBAH DI SINI */}
      <main className="p-10">
        <h1>Halo ICHIBOT! Website Framework sudah siap.</h1>
      </main>
    </div>
  );
}