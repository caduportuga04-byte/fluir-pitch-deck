import { Truck, TrendingUp, Shield, Calendar } from "lucide-react";
import { ReactNode } from "react";
import { SlideHeader } from "@/components/deck-primitives";

// Espírito Santo hub position in SVG space
const ES = { x: 456, y: 328 };

type StateEntry = { id: string; label: string[]; x: number; y: number };

// Approximate centroids — equirectangular projection
// x = (lng + 74) / 40 * 520 + 20   (lng range: -74 to -34)
// y = (5 - lat) / 39 * 490 + 20    (lat range: 5N to -34S)
const states: StateEntry[] = [
  { id: "RR", label: ["RORAIMA"], x: 183, y: 58 },
  { id: "AP", label: ["AMAPÁ"], x: 306, y: 70 },
  { id: "AM", label: ["AMAZONAS"], x: 130, y: 121 },
  { id: "PA", label: ["PARÁ"], x: 290, y: 121 },
  { id: "AC", label: ["ACRE"], x: 72, y: 196 },
  { id: "RO", label: ["RONDÔNIA"], x: 163, y: 221 },
  { id: "MT", label: ["MATO GROSSO"], x: 248, y: 246 },
  { id: "TO", label: ["TOCANTINS"], x: 355, y: 209 },
  { id: "MA", label: ["MARANHÃO"], x: 391, y: 146 },
  { id: "PI", label: ["PIAUÍ"], x: 430, y: 171 },
  { id: "CE", label: ["CEARÁ"], x: 469, y: 140 },
  { id: "RN", label: ["RIO GRANDE", "DO NORTE"], x: 515, y: 148 },
  { id: "PB", label: ["PARAÍBA"], x: 520, y: 170 },
  { id: "PE", label: ["PERNAMBUCO"], x: 498, y: 185 },
  { id: "AL", label: ["ALAGOAS"], x: 516, y: 202 },
  { id: "SE", label: ["SERGIPE"], x: 502, y: 216 },
  { id: "BA", label: ["BAHIA"], x: 432, y: 236 },
  { id: "MS", label: ["MATO GROSSO", "DO SUL"], x: 262, y: 335 },
  { id: "GO", label: ["GOIÁS"], x: 326, y: 276 },
  { id: "DF", label: ["DISTRITO", "FEDERAL"], x: 360, y: 282 },
  { id: "MG", label: ["MINAS GERAIS"], x: 408, y: 309 },
  { id: "RJ", label: ["RIO DE JANEIRO"], x: 422, y: 362 },
  { id: "SP", label: ["SÃO PAULO"], x: 350, y: 366 },
  { id: "PR", label: ["PARANÁ"], x: 310, y: 398 },
  { id: "SC", label: ["SANTA CATARINA"], x: 316, y: 430 },
  { id: "RS", label: ["RIO GRANDE", "DO SUL"], x: 290, y: 462 },
];

function BrazilMap() {
  return (
    <svg viewBox="40 30 530 460" width="100%" height="100%">
      <defs>
        <filter id="line-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="es-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="esAura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2dd47e" stopOpacity="0.28" />
          <stop offset="60%" stopColor="#2dd47e" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#2dd47e" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Lines radiating from ES */}
      {states.map((s) => (
        <line
          key={`line-${s.id}`}
          x1={ES.x} y1={ES.y}
          x2={s.x} y2={s.y}
          stroke="#2dd47e"
          strokeWidth="0.9"
          strokeOpacity="0.42"
          filter="url(#line-glow)"
        />
      ))}

      {/* State dots */}
      {states.map((s) => (
        <circle
          key={`dot-${s.id}`}
          cx={s.x} cy={s.y} r="2.5"
          fill="#2dd47e" fillOpacity="0.65"
        />
      ))}

      {/* State labels */}
      {states.map((s) => {
        const totalH = s.label.length * 9;
        const baseY = s.y - 6 - totalH;
        return (
          <text
            key={`label-${s.id}`}
            textAnchor="middle"
            fill="#c8d8e8"
            fontSize="7.5"
            fontWeight="500"
            fontFamily="system-ui, sans-serif"
            opacity="0.72"
          >
            {s.label.map((line, i) => (
              <tspan key={i} x={s.x} y={baseY + i * 9 + 9}>{line}</tspan>
            ))}
          </text>
        );
      })}

      {/* ES aura glow */}
      <circle cx={ES.x} cy={ES.y} r="52" fill="url(#esAura)" />

      {/* ES pulsing ring */}
      <circle cx={ES.x} cy={ES.y} r="14" fill="none" stroke="#2dd47e" strokeWidth="1" strokeOpacity="0.25" />

      {/* ES dot */}
      <circle cx={ES.x} cy={ES.y} r="8" fill="#2dd47e" filter="url(#es-glow)" />
      <circle cx={ES.x} cy={ES.y} r="4.5" fill="#ffffff" />

      {/* ES label */}
      <text
        x={ES.x} y={ES.y + 22}
        textAnchor="middle"
        fill="#2dd47e"
        fontSize="12" fontWeight="800"
        fontFamily="system-ui, sans-serif"
        filter="url(#line-glow)"
      >
        ESPÍRITO
      </text>
      <text
        x={ES.x} y={ES.y + 35}
        textAnchor="middle"
        fill="#2dd47e"
        fontSize="12" fontWeight="800"
        fontFamily="system-ui, sans-serif"
        filter="url(#line-glow)"
      >
        SANTO
      </text>
    </svg>
  );
}

type CardProps = {
  icon: ReactNode;
  tag: string;
  title: string;
  body: string;
  color: string;
};

function ESCard({ icon, tag, title, body, color }: CardProps) {
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "rgba(9,21,26,0.82)",
        border: "1px solid #1a3f70",
        borderRadius: 10,
        padding: "12px 16px",
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color }}>{icon}</span>
        <span
          style={{
            color,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
          }}
        >
          {tag}
        </span>
      </div>
      <div style={{ color: "#F5F0F0", fontWeight: 700, fontSize: 16, lineHeight: 1.25 }}>
        {title}
      </div>
      <div style={{ color: "#adc2d8", fontSize: 12, lineHeight: 1.45 }}>
        {body}
      </div>
    </div>
  );
}

const cards: CardProps[] = [
  {
    icon: <Truck size={16} strokeWidth={1.5} />,
    tag: "Hub Logístico Nacional",
    title: "1.200 km de 60% do PIB nacional",
    body: "Portos + EFVM + posição costeira estratégica — menor custo e menor prazo para distribuição em todo o Brasil.",
    color: "#609DFF",
  },
  {
    icon: <TrendingUp size={16} strokeWidth={1.5} />,
    tag: "Governo que Investe",
    title: "R$ 137,6 bi em pipeline",
    body: "Fundo Soberano do ES + logística como setor prioritário de 2024 a 2029, com novos portos e parques logísticos em implantação.",
    color: "#2dd47e",
  },
  {
    icon: <Shield size={16} strokeWidth={1.5} />,
    tag: "Estado mais Fiscal do Brasil",
    title: "Nota A · 1º em equilíbrio fiscal",
    body: "O Espírito Santo lidera o ranking nacional de responsabilidade fiscal — governo previsível, sem risco de reversão de incentivos.",
    color: "#F0D78C",
  },
  {
    icon: <Calendar size={16} strokeWidth={1.5} />,
    tag: "Incentivo com Raiz",
    title: "Compete ES desde 2003",
    body: "Mais de 20 anos de vigência contínua. Convalidado no CONFAZ e estendido até 2032 — base legal sólida para planejamento de longo prazo.",
    color: "#C9A84C",
  },
];

export function SlideESVantagens() {
  return (
    <div
      className="relative w-full h-full flex flex-col overflow-hidden"
      style={{ backgroundColor: "#010f1c" }}
    >
      <SlideHeader />

      <div style={{ display: "flex", flex: 1, overflow: "hidden", minHeight: 0 }}>
        {/* Left — Brazil map */}
        <div
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px 0 16px 16px",
          }}
        >
          <BrazilMap />
        </div>

        {/* Right — title + cards */}
        <div
          style={{
            width: 408,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            padding: "20px 32px 20px 0",
          }}
        >
          <div style={{ marginBottom: 14 }}>
            <div style={{ color: "#F5F0F0", fontWeight: 800, fontSize: 38, lineHeight: 1.15 }}>
              Por que o
            </div>
            <div style={{ color: "#2dd47e", fontWeight: 800, fontSize: 38, lineHeight: 1.1 }}>
              Espírito Santo?
            </div>
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10, minHeight: 0 }}>
            {cards.map((c) => (
              <ESCard key={c.tag} {...c} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
