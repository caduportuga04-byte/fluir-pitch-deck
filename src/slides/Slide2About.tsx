import { Shield, Truck, Settings } from "lucide-react";
import { SlideWrapper, SlideHeadline } from "@/components/deck-primitives";
import vitoriaNoite from "@/assets/vitoria-noite.png";

const services = [
  {
    icon: <Shield size={28} strokeWidth={1.4} />,
    label: "Estruturação Tributária",
    desc: "Diagnóstico e migração para o regime Compete ES",
  },
  {
    icon: <Truck size={28} strokeWidth={1.4} />,
    label: "Operação Logística",
    desc: "Estrutura de CD e fluxo de mercadoria no ES",
  },
  {
    icon: <Settings size={28} strokeWidth={1.4} />,
    label: "Gestão Completa",
    desc: "Do contrato ao primeiro resultado no caixa",
  },
];

export function Slide2About() {
  return (
    <SlideWrapper>
      <img
        src={vitoriaNoite}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 70%",
          transform: "scale(1.03)",
          opacity: 0.9,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(4,25,56,0.97) 0%, rgba(4,25,56,0.85) 48%, rgba(4,25,56,0.30) 100%)",
          zIndex: 1,
        }}
      />

      <div
        className="flex-1 flex flex-col justify-center gap-6"
        style={{ position: "relative", zIndex: 2, maxWidth: "62%" }}
      >
        {/* Header */}
        <div>
          <div
            className="text-xs uppercase tracking-[0.25em] mb-2"
            style={{ color: "#609DFF", fontWeight: 700 }}
          >
            Consultoria Full Service
          </div>
          <SlideHeadline className="text-3xl md:text-4xl">A Fluir</SlideHeadline>
        </div>

        {/* Quem Somos */}
        <div>
          <div
            className="text-xs uppercase tracking-[0.18em] mb-2"
            style={{ color: "#C9A84C", fontWeight: 700 }}
          >
            Quem Somos
          </div>
          <p className="text-base leading-relaxed" style={{ color: "#E2E6E9" }}>
            Somos uma consultoria full service para distribuidores e atacadistas de cosméticos.
            Estruturamos operações no Espírito Santo do zero — diagnóstico tributário, setup
            logístico e acompanhamento até o resultado aparecer no caixa.
          </p>
        </div>

        {/* O Que Fazemos */}
        <div>
          <div
            className="text-xs uppercase tracking-[0.18em] mb-3"
            style={{ color: "#C9A84C", fontWeight: 700 }}
          >
            O Que Fazemos
          </div>
          <div className="grid grid-cols-3 gap-4">
            {services.map(({ icon, label, desc }) => (
              <div
                key={label}
                className="rounded-xl px-4 py-5 flex flex-col gap-2"
                style={{ backgroundColor: "#09151A", border: "1px solid #194A99" }}
              >
                <div style={{ color: "#609DFF" }}>{icon}</div>
                <div className="text-sm font-semibold" style={{ color: "#F5F0F0" }}>
                  {label}
                </div>
                <div className="text-xs leading-relaxed" style={{ color: "#8FB8FF" }}>
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
