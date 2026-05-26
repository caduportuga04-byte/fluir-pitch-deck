import { SlideWrapper, GoldDivider } from "@/components/deck-primitives";
import porto from "@/assets/porto-vitoria.jpeg";
import fluirLogo from "@/assets/fluir-logo.png";

export function Slide1Cover() {
  return (
    <SlideWrapper gradient>
      {/* Blurred port background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${porto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(14px) brightness(0.35)",
          transform: "scale(1.1)",
          opacity: 0.55,
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,42,92,0.55) 0%, rgba(2,13,31,0.85) 100%)",
        }}
      />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
        <img
          src={fluirLogo}
          alt="Fluir"
          style={{ height: "clamp(120px, 18vw, 200px)", objectFit: "contain" }}
        />
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
