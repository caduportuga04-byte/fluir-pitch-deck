import { ReactNode } from "react";
import { SlideWrapper, GoldDivider } from "@/components/deck-primitives";

function ProgramCard({
  label,
  audience,
  rate,
  rateSuffix,
  note,
  noteColor,
}: {
  label: string;
  audience: string;
  rate: string;
  rateSuffix: string;
  note: string;
  noteColor: string;
}) {
  return (
    <div
      style={{
        backgroundColor: "#09151A",
        border: "1px solid #194A99",
        borderRadius: 12,
        padding: 20,
      }}
    >
      <div
        style={{
          color: "#609DFF",
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          fontWeight: 700,
          marginBottom: 4,
        }}
      >
        {label}
      </div>
      <div
        style={{
          color: "#F5F0F0",
          fontWeight: 700,
          fontSize: 16,
          marginBottom: 12,
        }}
      >
        {audience}
      </div>
      <div
        style={{
          color: "#609DFF",
          fontSize: 48,
          fontWeight: 800,
          lineHeight: 1,
        }}
      >
        {rate}
      </div>
      <div style={{ color: "#E2E6E9", fontSize: 13, marginTop: 6 }}>
        {rateSuffix}
      </div>
      <div style={{ color: noteColor, fontSize: 12, marginTop: 10 }}>
        {note}
      </div>
    </div>
  );
}

function CompareCard({
  title,
  color,
  rows,
  result,
}: {
  title: string;
  color: string;
  rows: { label: string; value: ReactNode }[];
  result: string;
}) {
  return (
    <div
      className="flex-1 rounded-lg p-4 flex flex-col"
      style={{
        backgroundColor: "#09151A",
        borderLeft: `3px solid ${color}`,
      }}
    >
      <div
        style={{
          color,
          fontSize: 13,
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          marginBottom: 12,
        }}
      >
        {title}
      </div>
      <div className="flex flex-col gap-3 flex-1">
        {rows.map((r) => (
          <div key={r.label}>
            <div style={{ color: "#8FB8FF", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              {r.label}
            </div>
            <div style={{ color: "#F5F0F0", fontSize: 15, fontWeight: 700, marginTop: 2 }}>
              {r.value}
            </div>
          </div>
        ))}
      </div>
      <div
        className="mt-3 pt-3"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          color,
          fontSize: 13,
          fontWeight: 700,
          fontStyle: "italic",
        }}
      >
        {result}
      </div>
    </div>
  );
}

export function Slide3WhyES() {
  return (
    <SlideWrapper>
      <h1
        className="max-w-5xl leading-tight tracking-tight"
        style={{
          color: "#F5F0F0",
          fontWeight: 800,
          fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
        }}
      >
        O Espírito Santo transformou incentivo fiscal em vantagem competitiva
        permanente.
      </h1>

      <div
        className="grid gap-8 mt-8 flex-1 min-h-0"
        style={{ gridTemplateColumns: "45fr 55fr" }}
      >
        {/* Left: program cards */}
        <div className="flex flex-col gap-4 justify-center">
          <ProgramCard
            label="COMPETE-ES"
            audience="E-commerce e Atacado"
            rate="1,14%"
            rateSuffix="nas vendas interestaduais"
            note="vs. 12%–18% no regime normal"
            noteColor="#c44545"
          />
          <ProgramCard
            label="INVEST-ES"
            audience="Importadores"
            rate="1,085%"
            rateSuffix="na saída"
            note="100% ICMS diferido na entrada"
            noteColor="#2dd47e"
          />
        </div>

        {/* Right: comparison panel */}
        <div className="flex flex-col min-h-0">
          <div
            style={{
              color: "#E2E6E9",
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              fontWeight: 600,
              marginBottom: 10,
            }}
          >
            A diferença na prática
          </div>
          <div className="flex items-stretch gap-3 flex-1">
            <CompareCard
              title="Sem ES"
              color="#c44545"
              rows={[
                { label: "ICMS Atacado / E-commerce", value: "12% a 18%" },
                { label: "ICMS Importação (entrada)", value: "Cobrado integral" },
              ]}
              result="Margem comprimida"
            />
            <div
              className="flex items-center justify-center"
              style={{
                color: "#C9A84C",
                fontWeight: 800,
                fontSize: 22,
                letterSpacing: "0.05em",
              }}
            >
              VS
            </div>
            <CompareCard
              title="Com ES"
              color="#2dd47e"
              rows={[
                { label: "ICMS Atacado / E-commerce", value: "1,14%" },
                { label: "ICMS Importação (entrada)", value: "100% diferido" },
              ]}
              result="Vantagem competitiva real"
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <GoldDivider className="mb-3" />
        <div
          className="text-center"
          style={{ color: "#E2E6E9", fontSize: 12, fontWeight: 500 }}
        >
          Hub logístico estratégico — Porto de Vitória · Acesso ao Sudeste
        </div>
      </div>
    </SlideWrapper>
  );
}
