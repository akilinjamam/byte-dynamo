import Header from "./Header";



export default function HomePage() {
    const date = new Date();
    const recentYear = date.getFullYear();

    
  return (
    <main className="bg-[#0A0F1C] text-gray-200">
    {/* HEADER */}
    <Header/>
    
      {/* HERO */}
      <section className="pt-36 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 via-cyan-500/10 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Smart ERP & POS <br /> for Modern Businesses
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-lg">
            Byte Dynamo builds powerful, secure, and scalable ERP & POS software
            that helps businesses automate operations and grow faster.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="#projects"
              className="bg-linear-to-r from-blue-500 to-cyan-400 px-8 py-3 rounded-lg font-semibold text-black  "
            >
              Request a Demo
            </a>
            <a
              href="#services"
              className="border border-white/30 px-8 py-3 rounded-lg hover:bg-white/10 transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
      {/* PROJECTS */}
      <section id="projects" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          
          <h3 className="text-4xl font-bold text-center mb-6 text-white">
            Client Projects
          </h3>

          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
            A selection of ERP, POS, and custom software solutions delivered to real businesses.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "POS ERP System",
                client: "Optical Shop",
                desc: "Complete ERP & POS solution with sales, inventory, payroll, barcode, invoices & reporting. (Only Desktop version available)",
                tech: ["React", "Node.js", "MongoDB", "Express", "Redux"],
                link: "https://portfolio-erp-pos-optical-soft-clie.vercel.app/login"
              },
              {
                title: "Optical E-Commerce Platform",
                client: "Eyeline Optica",
                desc: "Online eyewear store with appointment booking & consultation features.",
                tech: ["Next.js", "Typescript", "Tailwind", "Node", "Express", "Mongo DB"],
                link: "https://eyelineoptica.com"
              },
            ].map((project, i) => (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8
                          hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-white mb-1">
                  {project.title}
                </h4>

                <p className="text-sm text-cyan-400 mb-3">
                  Client: {project.client}
                </p>

                <p className="text-gray-400 mb-5 text-sm leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <a
                    href={`${project.link}`}
                    className="text-sm px-4 py-2 rounded-md bg-linear-to-r from-blue-500 to-cyan-400 text-black font-semibold"
                  >
                    Request Demo
                  </a>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SERVICES */}
      <section id="services" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-16 text-white">
            What We Do
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["ERP & POS Software", "Custom ERP & POS tailored to your business workflow."],
              ["Inventory Management", "Real-time stock updates with intelligent tracking."],
              ["Payroll & HR", "Salary, incentive & employee management systems."],
              ["Custom Web Apps", "Scalable web applications built with modern stacks."],
              ["Business Automation", "Automate repetitive tasks & boost efficiency."],
              ["Cloud Deployment", "Secure VPS & AWS cloud infrastructure setup."],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:scale-[1.02] hover:border-cyan-400/40 transition"
              >
                <h4 className="text-xl font-semibold mb-3 text-white">
                  {title}
                </h4>
                <p className="text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solutions" className="py-28 bg-linear-to-b from-transparent to-black/40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-10 text-white">
            Our Core Product
          </h3>

          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-10 max-w-3xl mx-auto">
            <h4 className="text-2xl font-semibold mb-6 text-white">
              POS ERP Software
            </h4>

            <div className="flex items-center justify-around">
              <div>
              <ul className="space-y-3 text-gray-300 text-left">
              <li>✔ Sales & smart billing system</li>
              <li>✔ Inventory & stock management</li>
              <li>✔ Barcode & invoice generation</li>
            </ul>
              </div>
              <div>
                <ul className="space-y-3 text-gray-300 text-left">
                <li>✔ Employee & payroll modules</li>
                <li>✔ Business analytics & reports</li>
                <li>✔ Single & multi-branch support</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6 text-white">
            About Byte Dynamo
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Byte Dynamo is a software solutions company focused on building
            enterprise-grade ERP and POS systems for small and medium-sized
            businesses. We combine modern technology with real business needs
            to deliver scalable and secure software.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-28 bg-linear-to-br from-blue-600/20 to-cyan-500/10"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6 text-white">
            Let’s Work Together
          </h3>
          <p className="text-gray-300 mb-10">
            Need ERP or POS software? Contact us for a free consultation.
          </p>

          <div className="space-y-3 text-gray-200 text-lg">
            <p>📞 +8801516708479</p>
            <p>📧 akilinjamam@gmail.com</p>
            <p>📍 Kolpolok Residential Area, Road-1, Block-E ,Chittagong, Bangladesh</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {recentYear} Byte Dynamo. All rights reserved.
      </footer>
    </main>
  );
}
