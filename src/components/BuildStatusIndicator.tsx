import { useEffect, useState } from "react";

type Status = "idle" | "building" | "ready" | "error";

export function BuildStatusIndicator() {
  const [status, setStatus] = useState<Status>("ready");
  const [message, setMessage] = useState<string>("Build concluído");

  useEffect(() => {
    if (!import.meta.hot) return;
    const hot = import.meta.hot;

    const onBeforeUpdate = () => {
      setStatus("building");
      setMessage("Compilando...");
    };
    const onAfterUpdate = () => {
      setStatus("ready");
      setMessage("Build concluído");
    };
    const onError = (payload: { err?: { message?: string } }) => {
      setStatus("error");
      setMessage(payload?.err?.message ? `Erro: ${payload.err.message.split("\n")[0]}` : "Erro no build");
    };
    const onConnected = () => {
      setStatus("ready");
      setMessage("Build concluído");
    };

    hot.on("vite:beforeUpdate", onBeforeUpdate);
    hot.on("vite:beforeFullReload", onBeforeUpdate);
    hot.on("vite:afterUpdate", onAfterUpdate);
    hot.on("vite:error", onError);
    hot.on("vite:ws:connect", onConnected);
    hot.on("vite:ws:disconnect", () => {
      setStatus("building");
      setMessage("Reconectando...");
    });

    return () => {
      hot.off("vite:beforeUpdate", onBeforeUpdate);
      hot.off("vite:beforeFullReload", onBeforeUpdate);
      hot.off("vite:afterUpdate", onAfterUpdate);
      hot.off("vite:error", onError);
      hot.off("vite:ws:connect", onConnected);
    };
  }, []);

  const color =
    status === "building"
      ? "#FBBF24"
      : status === "error"
        ? "#EF4444"
        : "#22C55E";

  return (
    <div
      className="fixed bottom-3 left-3 z-[9999] flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-mono shadow-lg backdrop-blur"
      style={{
        backgroundColor: "rgba(9,21,26,0.85)",
        color: "#F5F0F0",
        border: `1px solid ${color}`,
      }}
      aria-live="polite"
    >
      <span
        className="inline-block h-2 w-2 rounded-full"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 8px ${color}`,
          animation: status === "building" ? "buildPulse 1s ease-in-out infinite" : undefined,
        }}
      />
      <span>{message}</span>
      <style>{`
        @keyframes buildPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
