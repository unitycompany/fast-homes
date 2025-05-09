// src/utils/utm.js
export function initUtmPersistence() {
  console.log("📌 UTM Debugging Script Iniciado");

  const urlParams = new URLSearchParams(window.location.search);
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
  let utmData = {};
  const hasUtmInUrl = utmKeys.some(key => urlParams.has(key));

  // Só limpar se você quiser reiniciar a cada load
  localStorage.removeItem("utm_params");
  localStorage.removeItem("utm_session");

  if (hasUtmInUrl) {
    console.log("✅ UTM detectadas na URL!");
    utmKeys.forEach(key => {
      if (urlParams.has(key)) {
        utmData[key] = urlParams.get(key);
      }
    });
    localStorage.setItem("utm_params", JSON.stringify(utmData));
    localStorage.setItem("utm_session", "true");
    console.log("📥 UTM salvas no localStorage:", utmData);
  }

  const stored = localStorage.getItem("utm_params");
  const sessionStartedWithUtm = localStorage.getItem("utm_session") === "true";

  if (stored && sessionStartedWithUtm) {
    utmData = JSON.parse(stored);
    console.log("📤 UTM recuperadas do localStorage:", utmData);

    // Reaplicar na URL atual se não existir
    const current = new URL(window.location.href);
    const missing = utmKeys.some(k => !current.searchParams.has(k));
    if (missing) {
      Object.entries(utmData).forEach(([k, v]) => current.searchParams.set(k, v));
      window.history.replaceState({}, "", current.toString());
      console.log("♻️ UTM reaplicadas na URL atual:", current.toString());
    }

    // Atualizar todos os links
    document.querySelectorAll("a").forEach(link => {
      if (link.hostname === window.location.hostname) {
        const href = new URL(link.href);
        let updated = false;
        utmKeys.forEach(k => {
          if (!href.searchParams.has(k)) {
            href.searchParams.set(k, utmData[k]);
            updated = true;
          }
        });
        if (updated) {
          link.href = href.toString();
          console.log("🔗 Link atualizado com UTM:", link.href);
        }
      }
    });

    // Interceptar cliques para navegação SPA
    document.addEventListener("click", e => {
      const link = e.target.closest("a");
      if (link && link.hostname === window.location.hostname) {
        const to = new URL(link.href);
        let updated = false;
        utmKeys.forEach(k => {
          if (!to.searchParams.has(k)) {
            to.searchParams.set(k, utmData[k]);
            updated = true;
          }
        });
        if (updated) {
          e.preventDefault();
          console.log("➡️ Redirecionando com UTM:", to.toString());
          window.location.href = to.toString();
        }
      }
    });
  } else {
    console.log("🚫 Nenhuma UTM armazenada ou sessão começou sem UTM.");
  }
}
