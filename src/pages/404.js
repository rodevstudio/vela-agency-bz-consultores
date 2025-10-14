// pages/404.js
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000); // redirige en 3 segundos

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h1>404 - Página no encontrada</h1>
      <p>Serás redirigido a la página de inicio en unos segundos...</p>
    </div>
  );
}
