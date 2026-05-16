export default function Home() {
  const whatsapp = "https://wa.me/527445082879";

  return (
    <main className="bg-[#fff4f8] text-zinc-800 overflow-hidden">

      {/* NAVBAR */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 lg:px-12 py-4">

          {/* LOGO */}
          <a href="/" className="flex flex-col">
            <span className="text-4xl lg:text-5xl font-serif italic text-black leading-none">
              Impresamente
            </span>

            <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 mt-1">
              Diseños que emocionan
            </span>
          </a>

          {/* MENU */}
          <nav className="hidden lg:flex items-center gap-12 font-semibold text-zinc-900">

            <a
              href="/"
              className="text-pink-500 border-b-2 border-pink-500 pb-1"
            >
              Inicio
            </a>

            <a
              href="#modal-combos"
              className="hover:text-pink-500 transition"
            >
              Combos
            </a>

            <a
              href="#modal-agendas"
              className="hover:text-pink-500 transition"
            >
              Agendas
            </a>

            <a
              href="#modal-termos"
              className="hover:text-pink-500 transition"
            >
              Termos
            </a>

            <a
              href="#opiniones"
              className="hover:text-pink-500 transition"
            >
              Opiniones
            </a>

            <a
              href="#contacto"
              className="hover:text-pink-500 transition"
            >
              Contacto
            </a>

          </nav>

          {/* BOTON */}
          <a
            href={`${whatsapp}?text=Hola%20quiero%20hacer%20un%20pedido`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 transition text-white px-7 py-4 rounded-2xl font-bold shadow-lg"
          >
            Hacer mi pedido
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="w-full overflow-hidden">
        <img
          src="/imagenes/hero.png"
          alt="Hero Impresamente"
          className="w-full h-[60vh] md:h-[75vh] object-cover"
        />
      </section>

      {/* BOTONES */}
      <section className="bg-white py-8 px-6">
        <div className="flex flex-wrap justify-center gap-5">

          <a
            href={`${whatsapp}?text=Hola%20quiero%20cotizar%20un%20producto%20personalizado`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 transition text-white px-10 py-5 rounded-2xl font-bold shadow-xl text-xl"
          >
            Pedir por WhatsApp
          </a>

          <a
            href="#modal-combos"
            className="bg-zinc-900 hover:bg-zinc-800 transition text-white px-10 py-5 rounded-2xl font-bold shadow-xl text-xl"
          >
            Ver catálogo
          </a>

        </div>
      </section>

      {/* ESTADISTICAS */}
      <section className="px-6 lg:px-20 py-14 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#fff4f8] rounded-[35px] p-8 shadow-lg">

            <div className="text-center">
              <h3 className="text-4xl lg:text-5xl font-black text-pink-500">
                +10,000
              </h3>

              <p className="mt-3 font-semibold text-zinc-700">
                Pedidos entregados
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl lg:text-5xl font-black text-pink-500">
                +10,000
              </h3>

              <p className="mt-3 font-semibold text-zinc-700">
                Clientes felices
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl lg:text-5xl font-black text-pink-500">
                +18 años
              </h3>

              <p className="mt-3 font-semibold text-zinc-700">
                De experiencia
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl lg:text-5xl font-black text-pink-500">
                100%
              </h3>

              <p className="mt-3 font-semibold text-zinc-700">
                Hecho con amor
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CATEGORIAS */}
      <section className="py-20 px-6 lg:px-20 bg-[#fff4f8]">

        <div className="max-w-7xl mx-auto">

          <p className="text-center text-2xl text-zinc-500">
            Diseños{" "}
            <span className="text-pink-500 font-bold">
              premium
            </span>{" "}
            creados con amor ✨
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">

            {/* COMBOS */}
            <div className="bg-white rounded-[35px] overflow-hidden shadow-xl hover:-translate-y-2 transition">

              <img
                src="/imagenes/combo1.png"
                alt="Combos"
                className="h-[280px] w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-black">
                  Combos premium
                </h3>

                <p className="mt-4 text-zinc-500">
                  Agendas y termos personalizados premium.
                </p>

                <a
                  href="#modal-combos"
                  className="inline-block mt-6 text-pink-500 font-bold"
                >
                  Ver combos →
                </a>

              </div>

            </div>

            {/* AGENDAS */}
            <div className="bg-white rounded-[35px] overflow-hidden shadow-xl hover:-translate-y-2 transition">

              <img
                src="/imagenes/agenda1.png"
                alt="Agendas"
                className="h-[280px] w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-black">
                  Agendas
                </h3>

                <p className="mt-4 text-zinc-500">
                  Diseños únicos personalizados.
                </p>

                <a
                  href="#modal-agendas"
                  className="inline-block mt-6 text-pink-500 font-bold"
                >
                  Ver agendas →
                </a>

              </div>

            </div>

            {/* TERMOS */}
            <div className="bg-white rounded-[35px] overflow-hidden shadow-xl hover:-translate-y-2 transition">

              <img
                src="/imagenes/termo1.png"
                alt="Termos"
                className="h-[280px] w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-black">
                  Termos skinny
                </h3>

                <p className="mt-4 text-zinc-500">
                  Termos personalizados premium.
                </p>

                <a
                  href="#modal-termos"
                  className="inline-block mt-6 text-pink-500 font-bold"
                >
                  Ver termos →
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* OPINIONES */}
      <section
        id="opiniones"
        className="py-24 px-6 lg:px-20 bg-white"
      >

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-pink-500 uppercase tracking-[0.25em] font-bold">
            Opiniones reales
          </p>

          <h2 className="text-4xl lg:text-5xl font-black mt-4">
            Clientes felices con sus regalos
          </h2>

          <div className="mt-12 rounded-[40px] overflow-hidden shadow-2xl bg-[#fff4f8]">

            <img
              src="/imagenes/opiniones.png"
              alt="Opiniones"
              className="w-full h-auto object-cover"
            />

          </div>

        </div>

      </section>

      {/* PIDE EN 3 PASOS */}
      <section className="py-24 px-6 lg:px-20 bg-[#fff4f8]">

        <div className="max-w-6xl mx-auto bg-white rounded-[45px] shadow-2xl p-10 lg:p-16">

          <div className="text-center mb-14">

            <p className="text-pink-500 uppercase tracking-[0.25em] font-bold">
              Proceso fácil
            </p>

            <h2 className="text-4xl lg:text-5xl font-black mt-4">
              Pide en 3 pasos
            </h2>

            <p className="mt-5 text-xl text-zinc-500">
              Personalizar tu regalo es rápido, bonito y sencillo.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-[#fff4f8] rounded-[35px] p-8 shadow-lg">

              <div className="w-16 h-16 rounded-full bg-pink-500 text-white flex items-center justify-center text-3xl font-black">
                1
              </div>

              <h3 className="text-2xl font-black mt-6">
                Mándanos tu idea
              </h3>

              <p className="mt-3 text-zinc-500 leading-relaxed">
                Cuéntanos qué diseño tienes en mente.
              </p>

            </div>

            <div className="bg-[#fff4f8] rounded-[35px] p-8 shadow-lg">

              <div className="w-16 h-16 rounded-full bg-pink-500 text-white flex items-center justify-center text-3xl font-black">
                2
              </div>

              <h3 className="text-2xl font-black mt-6">
                Diseñamos para ti
              </h3>

              <p className="mt-3 text-zinc-500 leading-relaxed">
                Creamos tu diseño personalizado.
              </p>

            </div>

            <div className="bg-[#fff4f8] rounded-[35px] p-8 shadow-lg">

              <div className="w-16 h-16 rounded-full bg-pink-500 text-white flex items-center justify-center text-3xl font-black">
                3
              </div>

              <h3 className="text-2xl font-black mt-6">
                Recibe tu pedido
              </h3>

              <p className="mt-3 text-zinc-500 leading-relaxed">
                Lo hacemos llegar con amor.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="px-6 lg:px-20 py-24 bg-white"
      >

        <div className="max-w-5xl mx-auto text-center bg-[#fff4f8] rounded-[45px] shadow-2xl p-12">

          <h2 className="text-4xl lg:text-5xl font-black">
            ¿Lista para crear tu diseño?
          </h2>

          <p className="mt-6 text-xl text-zinc-500">
            Cuéntanos tu idea y la convertimos en un regalo que emociona.
          </p>

          <a
            href={`${whatsapp}?text=Hola%20quiero%20crear%20un%20diseño%20personalizado`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-pink-500 hover:bg-pink-600 transition text-white px-10 py-5 rounded-2xl font-bold shadow-xl text-xl"
          >
            Cotizar por WhatsApp
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-white pt-20 border-t border-pink-100">

        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">

          <h2 className="text-5xl lg:text-6xl font-serif italic text-black">
            Impresamente
          </h2>

          <p className="uppercase tracking-[0.3em] text-zinc-500 mt-3 text-sm">
            Acapulco
          </p>

          <p className="mt-8 text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Creamos recuerdos personalizados hechos con amor.
          </p>

          {/* REDES */}
          <div className="flex justify-center items-center gap-6 mt-10 flex-wrap">

            <a
              href="https://www.instagram.com/creativosimpresamente/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="w-8 h-8"
              />
            </a>

            <a
              href="https://www.facebook.com/creativosimpresamente"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                className="w-8 h-8"
              />
            </a>

            <a
              href="https://www.tiktok.com/@impresamente?_r=1&_t=ZS-96MlWsKIDQb"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png"
                alt="TikTok"
                className="w-8 h-8"
              />
            </a>

            <a
              href="https://wa.me/527445082879"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
                className="w-8 h-8"
              />
            </a>

          </div>

        </div>

        {/* COPYRIGHT FINAL */}
        <div className="w-full bg-[#ffc7d7] py-4 border-t border-pink-200 mt-20">

          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">

            <p className="text-sm text-zinc-700 text-center md:text-left">
              © 2026 Impresamente Acapulco. Todos los derechos reservados.
            </p>

            <p className="text-sm text-zinc-700 text-center md:text-right">
              Hecho con ❤️ en Acapulco
            </p>

          </div>

        </div>

      </footer>

      {/* MODAL COMBOS */}
      <section id="modal-combos" className="fixed inset-0 z-[9999] hidden target:flex bg-black/70 backdrop-blur-sm items-center justify-center p-6">
        <div className="relative bg-[#fff4f8] w-full max-w-7xl max-h-[90vh] overflow-y-auto rounded-[40px] p-8 shadow-2xl">

          <a href="#" className="absolute top-5 right-5 bg-pink-500 text-white w-12 h-12 rounded-full text-3xl font-bold flex items-center justify-center">
            ×
          </a>

          <h2 className="text-5xl font-black text-center mt-8 mb-12">
            Combos premium
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[1, 2, 3, 4].map((num) => (
              <a
                key={num}
                href={`https://wa.me/527445082879?text=Hola%20quiero%20información%20sobre%20el%20combo%20${num}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-[30px] overflow-hidden shadow-xl hover:-translate-y-2 transition"
              >
                <img
                  src={`/imagenes/combo${num}.png`}
                  alt={`Combo ${num}`}
                  className="h-[320px] w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-black">
                    Combo {num}
                  </h3>

                  <p className="mt-3 text-pink-500 font-bold">
                    Pedir información →
                  </p>
                </div>

              </a>
            ))}

          </div>

        </div>
      </section>

      {/* MODAL AGENDAS */}
      <section id="modal-agendas" className="fixed inset-0 z-[9999] hidden target:flex bg-black/70 backdrop-blur-sm items-center justify-center p-6">
        <div className="relative bg-[#fff4f8] w-full max-w-7xl max-h-[90vh] overflow-y-auto rounded-[40px] p-8 shadow-2xl">

          <a href="#" className="absolute top-5 right-5 bg-pink-500 text-white w-12 h-12 rounded-full text-3xl font-bold flex items-center justify-center">
            ×
          </a>

          <h2 className="text-5xl font-black text-center mt-8 mb-12">
            Agendas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[1, 2, 3, 4].map((num) => (
              <a
                key={num}
                href={`https://wa.me/527445082879?text=Hola%20quiero%20información%20sobre%20la%20agenda%20${num}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-[30px] overflow-hidden shadow-xl hover:-translate-y-2 transition"
              >
                <img
                  src={`/imagenes/agenda${num}.png`}
                  alt={`Agenda ${num}`}
                  className="h-[320px] w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-black">
                    Agenda {num}
                  </h3>

                  <p className="mt-3 text-pink-500 font-bold">
                    Pedir información →
                  </p>
                </div>

              </a>
            ))}

          </div>

        </div>
      </section>

      {/* MODAL TERMOS */}
      <section id="modal-termos" className="fixed inset-0 z-[9999] hidden target:flex bg-black/70 backdrop-blur-sm items-center justify-center p-6">
        <div className="relative bg-[#fff4f8] w-full max-w-7xl max-h-[90vh] overflow-y-auto rounded-[40px] p-8 shadow-2xl">

          <a href="#" className="absolute top-5 right-5 bg-pink-500 text-white w-12 h-12 rounded-full text-3xl font-bold flex items-center justify-center">
            ×
          </a>

          <h2 className="text-5xl font-black text-center mt-8 mb-12">
            Termos skinny
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[1, 2, 3, 4].map((num) => (
              <a
                key={num}
                href={`https://wa.me/527445082879?text=Hola%20quiero%20información%20sobre%20el%20termo%20${num}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-[30px] overflow-hidden shadow-xl hover:-translate-y-2 transition"
              >
                <img
                  src={`/imagenes/termo${num}.png`}
                  alt={`Termo ${num}`}
                  className="h-[320px] w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-black">
                    Termo {num}
                  </h3>

                  <p className="mt-3 text-pink-500 font-bold">
                    Pedir información →
                  </p>
                </div>

              </a>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}
