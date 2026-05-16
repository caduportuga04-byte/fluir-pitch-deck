import { Shield, Calendar, TrendingUp } from "lucide-react";
import { ReactNode } from "react";
import {
  SlideWrapper,
  SlideHeadline,
  LegalFooter,
} from "@/components/deck-primitives";

function PillarCard({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div
      className="rounded-xl flex items-center gap-4 px-4 py-3"
      style={{
        backgroundColor: "#09151A",
        border: "1px solid #C9A84C",
      }}
    >
      <div style={{ color: "#F0D78C" }}>{icon}</div>
      <div
        style={{ color: "#F5F0F0", fontWeight: 600, fontSize: 14, lineHeight: 1.25 }}
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
  headline,
}: {
  source: string;
  sourceBg: string;
  sourceColor: string;
  headline: string;
}) {
  return (
    <div
      className="rounded-lg p-5"
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
      <p
        className="mt-3 italic leading-snug"
        style={{ color: "#F5F0F0", fontWeight: 500, fontSize: 16 }}
      >
        "{headline}"
      </p>
    </div>
  );
}

export function Slide5Legal() {
  return (
    <SlideWrapper>
      <SlideHeadline className="text-3xl md:text-4xl max-w-5xl">
        Base legal consolidada. Incentivos convalidados e prorrogados até 2032.
      </SlideHeadline>
      <p
        className="mt-3 text-sm max-w-3xl"
        style={{ color: "#E2E6E9", fontWeight: 500 }}
      >
        Convalidados via LC 160/2017 e Convênio ICMS 190/2017 do CONFAZ
      </p>

      <div className="flex-1 grid grid-cols-5 gap-8 mt-8 min-h-0 pb-10">
        {/* Left column: 3 pillars (40%) */}
        <div className="col-span-2 flex flex-col gap-3 justify-center">
          <PillarCard
            icon={<Shield size={28} strokeWidth={1.6} />}
            title="Convalidado no CONFAZ"
          />
          <PillarCard
            icon={<Calendar size={28} strokeWidth={1.6} />}
            title="Válido até 2032"
          />
          <PillarCard
            icon={<TrendingUp size={28} strokeWidth={1.6} />}
            title="Previsibilidade para o investidor"
          />
        </div>

        {/* Right column: press clippings (60%) */}
        <div className="col-span-3 flex flex-col gap-4 justify-center">
          <PressCard
            source="Gazeta ES"
            sourceBg="rgba(96, 157, 255, 0.15)"
            sourceColor="#609DFF"
            headline="Reforma tributária: ES poderá manter incentivos fiscais até 2032"
          />
          <PressCard
            source="G1"
            sourceBg="#c4202a"
            sourceColor="#FFFFFF"
            headline="Senado aprova projeto que prorroga incentivos fiscais no ICMS para quatro setores até 2032"
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
