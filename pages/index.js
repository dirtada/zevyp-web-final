import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9c600] font-sans text-gray-900">
      <header className="bg-black text-white py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Zevyp logo" width={40} height={40} />
          <h1 className="text-2xl font-extrabold">ZEVYP.CZ</h1>
        </div>
        <nav className="space-x-4 text-lg">
          <a href="#" className="hover:underline">NAŠE SLUŽBY</a>
          <a href="#" className="hover:underline">TECHNIKA</a>
          <a href="#" className="hover:underline">CENÍK</a>
          <a href="#" className="hover:underline">KONTAKT</a>
        </nav>
      </header>

      <main className="bg-black text-white px-4 py-12 text-center">
        <h2 className="text-5xl font-extrabold mb-4">ZEMNÍ A VÝKOPOVÉ PRÁCE</h2>
        <p className="text-lg mb-6">Provádíme zemní a výkopové práce pomocí pásového rypadla.</p>
        <div className="flex justify-center">
          <Image
            src="/images/hitachi-zx48u.png"
            alt="Bagr"
            width={600}
            height={400}
            className="rounded"
          />
        </div>
      </main>

      <section className="bg-[#f9c600] text-black px-6 py-12">
        <h3 className="text-3xl font-bold mb-6 text-center">NAŠE SLUŽBY</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xl max-w-3xl mx-auto">
          <div className="flex items-center gap-2">
            <span>✔️</span>
            <p>Výkopy základů</p>
          </div>
          <div className="flex items-center gap-2">
            <span>✔️</span>
            <p>Zásypy a zasypávání</p>
          </div>
          <div className="flex items-center gap-2">
            <span>✔️</span>
            <p>Zarovnání terénu</p>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white text-center py-4">
        © {new Date().getFullYear()} ZEVYP.CZ – Zemní a výkopové práce
      </footer>
    </div>
  );
}
