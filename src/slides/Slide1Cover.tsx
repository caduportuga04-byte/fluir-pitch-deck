import { SlideWrapper, GoldDivider } from "@/components/deck-primitives";
import { FluirLogo } from "@/components/FluirLogo";
import porto from "@/assets/porto-vitoria.jpeg";

export function Slide1Cover() {
  return (
    <SlideWrapper gradient showLogo={false}>
      {/* Port background — sharp, no blur */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${porto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark navy overlay — keeps image visible but text readable */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,20,60,0.62) 0%, rgba(2,10,30,0.78) 100%)",
        }}
      />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center gap-6">
          <FluirLogo size={120} />
          <span
            style={{
              fontWeight: 700,
              fontSize: "clamp(4rem, 8vw, 7rem)",
              letterSpacing: "0.15em",
              color: "#F5F0F0",
              lineHeight: 1,
            }}
          >
            FLU<span style={{ color: "#609DFF" }}>I</span>R
          </span>
        </div>
        <GoldDivider className="mt-10 mb-8" />
        <p
          className="text-lg md:text-xl max-w-3xl"
          style={{ color: "#E2E6E9", fontWeight: 400 }}
        >
          Consultoria especializada em estruturação tributária e atração de
          operações para o Espírito Santo
        </p>
      </div>
    </SlideWrapper>
  );
}
