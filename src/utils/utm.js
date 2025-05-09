// src/utils/utm.js
export function initUtmPersistence() {
  const utmKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];
  const params = new URLSearchParams(window.location.search);
  const hasUtm = utmKeys.some((k) => params.has(k));
  if (hasUtm) {
    const store = {};
    utmKeys.forEach((k) => {
      if (params.has(k)) store[k] = params.get(k);
    });
    localStorage.setItem("utm_params", JSON.stringify(store));
    console.log("📥 UTMs iniciais salvas:", store);
  }
}
