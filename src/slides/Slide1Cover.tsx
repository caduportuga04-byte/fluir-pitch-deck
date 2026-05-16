import { SlideWrapper, GoldDivider } from "@/components/deck-primitives";

export function Slide1Cover() {
  return (
    <SlideWrapper gradient>
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <GoldDivider className="mb-12" />
        <h1
          className="max-w-5xl leading-tight"
          style={{
            color: "#F5F0F0",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
          }}
        >
          Conectamos Oportunidades.
          <br />
          Impulsionamos o Espírito Santo.
        </h1>
        <p
          className="mt-10 text-lg md:text-xl max-w-3xl"
          style={{ color: "#E2E6E9", fontWeight: 400 }}
        >
          Consultoria especializada em estruturação tributária e atração de
          operações para o Espírito Santo
        </p>
      </div>
    </SlideWrapper>
  );
}
