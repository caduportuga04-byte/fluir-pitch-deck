import logo from "@/assets/fluir-logo.png";

interface Props {
  size?: number;
  className?: string;
}

export function FluirLogo({ size = 80, className }: Props) {
  return (
    <img
      src={logo}
      alt="Fluir Consultoria"
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}
