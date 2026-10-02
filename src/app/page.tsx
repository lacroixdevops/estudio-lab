"use client"

export default function Home() {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Bodoni+Moda:opsz,wght@6..96,300;6..96,400&display=swap');`}</style>
      <div className="min-h-screen bg-[#F6F5F2] text-[#0A0A0A]" style={{fontFamily:'Inter'}}>

        {/* NAV */}
        <nav className="fixed top-0 w-full z-50 bg-[#F6F5F2]/80 backdrop-blur-xl border-b border-black/5">
          <div className="max-w-[1240px] mx-auto px-6 h-[72px] flex items-center justify-between">
            <p className="font-black text-[13px] tracking-[0.35em]">ESTUDIO —</p>
            <div className="hidden md:flex gap-8 text-[10px] font-black tracking-[0.25em] text-black/40">
              <a href="#proyectos">PROYECTOS</a>
              <a href="#servicios">SERVICIOS</a>
              <a href="#estudio">ESTUDIO</a>
            </div>
            <a href="https://wa.me/5493586021014" className="bg-[#0A0A0A] text-white rounded-full px-6 py-2.5 text-[10px] font-black tracking-widest">COTIZAR</a>
          </div>
        </nav>

        {/* HERO */}
        <section className="max-w-[1240px] mx-auto px-6 pt-32 md:pt-48 pb-16 grid md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-7">
            <p className="text-[10px] tracking-[0.5em] font-black text-black/20">RÍO CUARTO • CÓRDOBA • AR</p>
            <h1 className="text-[54px] md:text-[92px] leading-[0.85] tracking-[-0.04em] mt-6" style={{fontFamily:'Bodoni Moda'}}>
              Arquitectura<br/><span className="italic font-light">que habita</span><br/>el tiempo.
            </h1>
          </div>
          <div className="md:col-span-5 pb-4">
            <p className="text-[15px] leading-relaxed text-black/50 font-bold max-w-[360px]">Diseñamos casas que no siguen tendencias. Espacios atemporales, materiales nobles y luz como protagonista.</p>
            <a href="#proyectos" className="mt-8 inline-block bg-[#0A0A0A] text-white rounded-full px-8 py-4 text-[10px] font-black tracking-widest">VER PROYECTOS</a>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-6">
          <div className="w-full h-[520px] md:h-[720px] bg-[#E8E6E1] rounded-[32px] overflow-hidden relative border border-black/5">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 bg-white rounded-full px-5 py-2.5 text-[10px] font-black tracking-widest">CASA LOMA • 2025 • VILLA GOLF</div>
          </div>
        </div>

        {/* PROYECTOS */}
        <section id="proyectos" className="max-w-[1240px] mx-auto px-6 py-24">
          <div className="flex justify-between items-end border-t border-black/5 pt-8">
            <h2 className="text-[28px] md:text-[36px] font-black tracking-[-0.02em]">Proyectos seleccionados.</h2>
            <p className="text-[10px] font-black tracking-widest text-black/20 hidden md:block">2020 — 2026</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              {name:"CASA PATIO", loc:"Río Cuarto • 2024", img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800"},
              {name:"CASA LOMA", loc:"Villa Golf • 2025", img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800"},
              {name:"REFUGIO", loc:"Los Molles • 2023", img:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800"},
            ].map(p=>(
              <div key={p.name} className="group cursor-pointer">
                <div className="h-[440px] bg-white border border-black/5 rounded-[24px] overflow-hidden relative">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{backgroundImage:`url(${p.img})`}}></div>
                </div>
                <div className="flex justify-between mt-3 px-1">
                  <p className="text-xs font-black tracking-wide">{p.name}</p>
                  <p className="text-[10px] font-bold text-black/30">{p.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="max-w-[1240px] mx-auto px-6 py-12">
          <p className="text-[10px] tracking-[0.4em] font-black text-black/20">SERVICIOS</p>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              {t:"Proyecto completo", p:"Desde $8 USD/m2", d:"Anteproyecto, planos municipales, renders, cómputo y presupuesto cerrado. Entrega en 30 días."},
              {t:"Dirección de obra", p:"Desde $5 USD/m2", d:"Visitas semanales, control de gremios, manejo de materiales y avance documentado."},
              {t:"Reforma integral", p:"Cotización personalizada", d:"Ampliaciones, patios, quinchos y puesta en valor. Diseño + obra llave en mano."},
            ].map(s=>(
              <div key={s.t} className="bg-white border border-black/5 rounded-[24px] p-8 shadow-sm flex flex-col justify-between h-[260px]">
                <div>
                  <p className="font-black text-[15px]">{s.t}</p>
                  <p className="text-[10px] font-black tracking-widest text-black/30 mt-1">{s.p}</p>
                  <p className="text-[13px] font-bold leading-relaxed text-black/50 mt-4">{s.d}</p>
                </div>
                <p className="text-[10px] font-black tracking-widest mt-6">→ INCLUYE REUNIÓN + VISITA</p>
              </div>
            ))}
          </div>
        </section>

        {/* ESTUDIO */}
        <section id="estudio" className="max-w-[1240px] mx-auto px-6 py-24 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="w-full h-[520px] bg-white border border-black/5 rounded-[24px] overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800')] bg-cover bg-center grayscale"></div>
            </div>
          </div>
          <div className="md:col-span-7 md:pl-12">
            <p className="text-[10px] tracking-[0.4em] font-black text-black/20">ESTUDIO</p>
            <h3 className="text-[34px] md:text-[48px] leading-[0.9] font-black tracking-[-0.03em] mt-4" style={{fontFamily:'Bodoni Moda'}}>Somos un estudio pequeño.<br/><span className="font-light text-black/40">Por eso cada obra sale bien.</span></h3>
            <p className="text-[14px] font-bold leading-relaxed text-black/60 mt-6 max-w-[480px]">No somos una empresa grande. Somos 2 arquitectos y un equipo de confianza. Tomamos 4 obras por año para estar de verdad en cada una.</p>
            <div className="mt-10 grid grid-cols-3 border-t border-black/5 pt-6">
              <div><p className="text-[24px] font-black">47</p><p className="text-[10px] font-black tracking-widest text-black/30">OBRAS</p></div>
              <div><p className="text-[24px] font-black">10</p><p className="text-[10px] font-black tracking-widest text-black/30">AÑOS</p></div>
              <div><p className="text-[24px] font-black">100%</p><p className="text-[10px] font-black tracking-widest text-black/30">RECOMENDADOS</p></div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0A0A0A] text-white rounded-t-[32px] md:rounded-t-[48px] py-20">
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="bg-white text-black rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h4 className="text-[30px] md:text-[44px] font-black tracking-[-0.03em] leading-[0.9]">¿Tenés un terreno?<br/><span className="font-light">Hablemos.</span></h4>
                <p className="text-sm font-bold text-black/40 mt-3">Primera reunión sin costo. Traé tu idea, nosotros el café.</p>
              </div>
              <a href="https://wa.me/5493586021014" className="bg-[#0A0A0A] text-white rounded-full px-10 py-5 text-xs font-black tracking-widest whitespace-nowrap">AGENDAR REUNIÓN →</a>
            </div>
          </div>
        </section>

        {/* FOOTER PRO */}
        <footer className="bg-[#0A0A0A] text-white border-t border-white/10 pt-16 pb-8">
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-5">
                <p className="font-black text-[22px] tracking-[0.35em]">ESTUDIO —</p>
                <p className="text-sm font-bold text-white/40 mt-4 max-w-[320px] leading-relaxed">Arquitectura atemporal en Río Cuarto y Córdoba. Diseñamos casas para vivir, no para mostrar.</p>
                <div className="flex gap-2 mt-6">
                  <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-black">IG</a>
                  <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-black">BE</a>
                  <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-black">WA</a>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-[10px] tracking-[0.3em] font-black opacity-30">NAVEGAR</p>
                <div className="mt-4 space-y-2 text-sm font-bold text-white/60">
                  <p><a href="#proyectos">Proyectos</a></p>
                  <p><a href="#servicios">Servicios</a></p>
                  <p><a href="#estudio">Estudio</a></p>
                  <p><a href="#">Contacto</a></p>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-[10px] tracking-[0.3em] font-black opacity-30">CONTACTO</p>
                <div className="mt-4 space-y-2 text-sm font-bold text-white/60">
                  <p>Río Cuarto, Córdoba</p>
                  <p>+54 9 358 602 1014</p>
                  <p>hola@estudio.com</p>
                </div>
              </div>
              <div className="md:col-span-3">
                <p className="text-[10px] tracking-[0.3em] font-black opacity-30">HORARIO</p>
                <p className="mt-4 text-sm font-bold text-white/60 leading-relaxed">Lunes a Viernes<br/>9:00 — 18:00<br/>Reuniones con cita previa</p>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-black tracking-widest opacity-20">
              <p>© 2026 ESTUDIO — • ARQUITECTURA ATEMPORAL</p>
              <p>DISEÑADO EN RÍO CUARTO • HECHO PARA DURAR 30 AÑOS</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}