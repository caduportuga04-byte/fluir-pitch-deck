import { Shield, Truck, Settings } from "lucide-react";
import { ReactNode } from "react";
import { SlideWrapper } from "@/components/deck-primitives";

function CompactCard({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div
      className="rounded-xl flex flex-col items-center text-center"
      style={{
        backgroundColor: "#09151A",
        border: "1px solid #194A99",
        padding: 14,
      }}
    >
      <div className="mb-2" style={{ color: "#609DFF" }}>
        {icon}
      </div>
      <div
        style={{ color: "#F5F0F0", fontWeight: 600, fontSize: 12, lineHeight: 1.3 }}
      >
        {title}
      </div>
    </div>
  );
}

export function Slide2About() {
  return (
    <SlideWrapper>
      {/* pull headline closer to header */}
      <div style={{ marginTop: -26 }}>
        <h1
          className="font-extrabold tracking-tight leading-tight max-w-4xl"
          style={{
            color: "#F5F0F0",
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.2vw, 1.9rem)",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          Você provavelmente está pagando mais ICMS do que precisa.
        </h1>
      </div>

      <div
        className="rounded-xl max-w-4xl"
        style={{
          backgroundColor: "#09151A",
          border: "2px solid #C9A84C",
          padding: "14px 18px",
          marginTop: 12,
        }}
      >
        <div
          className="uppercase tracking-widest mb-1"
          style={{ color: "#F0D78C", fontWeight: 600, fontSize: 10 }}
        >
          Nossa Missão
        </div>
        <div
          style={{ color: "#F5F0F0", fontWeight: 600, fontSize: 14, lineHeight: 1.4 }}
        >
          Transformar incentivo fiscal em vantagem competitiva real — da
          estruturação ao dia a dia da operação.
        </div>
      </div>

      <p
        className="max-w-4xl"
        style={{
          color: "#E2E6E9",
          fontWeight: 400,
          fontSize: 13,
          lineHeight: 1.5,
          marginTop: 12,
        }}
      >
        A Fluir é uma consultoria full-service especializada em estruturar
        operações no Espírito Santo — o estado com os incentivos fiscais mais
        competitivos do Brasil para atacado, e-commerce e importação. Não
        vendemos consultoria. Entregamos a operação funcionando, do incentivo
        aprovado à apuração mensal.
      </p>

      <div
        className="grid grid-cols-3 gap-4 max-w-5xl"
        style={{ marginTop: 12 }}
      >
        <CompactCard icon={<Shield size={24} strokeWidth={1.6} />} title="Estruturação Tributária" />
        <CompactCard icon={<Truck size={24} strokeWidth={1.6} />} title="Consultoria Logística" />
        <CompactCard icon={<Settings size={24} strokeWidth={1.6} />} title="Operação Completa" />
      </div>
    </SlideWrapper>
  );
}
