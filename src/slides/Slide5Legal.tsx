import { Shield, Calendar, TrendingUp } from "lucide-react";
import { ReactNode } from "react";
import {
  SlideWrapper,
  SlideHeadline,
  LegalFooter,
} from "@/components/deck-primitives";
import pressGazeta from "@/assets/press-gazeta.png";
import pressG1 from "@/assets/press-g1.png";

function PillarCard({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div
      className="rounded-xl flex items-center gap-3 px-4 py-3"
      style={{
        backgroundColor: "#09151A",
        border: "1px solid #C9A84C",
      }}
    >
      <div style={{ color: "#F0D78C" }}>{icon}</div>
      <div
        style={{
          color: "#F5F0F0",
          fontWeight: 600,
          fontSize: 13,
          lineHeight: 1.25,
        }}
      >
        {title}
      </div>
    </div>
  );
}

function PressCard({
  source,
  sourceBg,
  sourceColor,
  image,
  alt,
}: {
  source: string;
  sourceBg: string;
  sourceColor: string;
  image: string;
  alt: string;
}) {
  return (
    <div
      className="rounded-lg p-4"
      style={{
        backgroundColor: "#09151A",
        borderLeft: "3px solid #C9A84C",
      }}
    >
      <span
        className="inline-block px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-widest"
        style={{
          backgroundColor: sourceBg,
          color: sourceColor,
          fontWeight: 700,
          letterSpacing: "0.12em",
        }}
      >
        {source}
      </span>
      <div
        className="mt-3 rounded overflow-hidden"
        style={{ backgroundColor: "#F5F0F0" }}
      >
        <img
          src={image}
          alt={alt}
          style={{
            width: "100%",
            display: "block",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}

export function Slide5Legal() {
  return (
    <SlideWrapper>
      <SlideHeadline className="text-2xl md:text-3xl max-w-4xl">
        Base legal consolidada. Incentivos válidos até 2032.
      </SlideHeadline>
      <p
        className="mt-2 text-xs max-w-3xl"
        style={{ color: "#E2E6E9", fontWeight: 500 }}
      >
        Convalidados via LC 160/2017 e Convênio ICMS 190/2017 do CONFAZ
      </p>

      <div className="flex-1 grid grid-cols-5 gap-6 mt-6 min-h-0 pb-10">
        {/* Left: pillars */}
        <div className="col-span-2 flex flex-col gap-3 justify-center">
          <PillarCard
            icon={<Shield size={24} strokeWidth={1.6} />}
            title="Convalidado no CONFAZ"
          />
          <PillarCard
            icon={<Calendar size={24} strokeWidth={1.6} />}
            title="Válido até 2032"
          />
          <PillarCard
            icon={<TrendingUp size={24} strokeWidth={1.6} />}
            title="Previsibilidade para o investidor"
          />
        </div>

        {/* Right: press clippings */}
        <div className="col-span-3 flex flex-col gap-3 justify-center">
          <PressCard
            source="Gazeta ES"
            sourceBg="rgba(96, 157, 255, 0.15)"
            sourceColor="#609DFF"
            image={pressGazeta}
            alt="Reforma tributária: ES poderá manter incentivos fiscais até 2032"
          />
          <PressCard
            source="G1"
            sourceBg="#c4202a"
            sourceColor="#FFFFFF"
            image={pressG1}
            alt="Senado aprova projeto que prorroga incentivos fiscais no ICMS para quatro setores até 2032"
          />
        </div>
      </div>

      <LegalFooter>
        Base legal: LC 160/2017 · Convênio ICMS 190/2017 · LC 186/2021 ·
        Legislação estadual ES
      </LegalFooter>
    </SlideWrapper>
  );
}
