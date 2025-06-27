import { createCookieSessionStorage } from "@remix-run/node";

// Création du stockage avec un cookie sécurisé
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secrets: ["une-cle-secrete-pour-signature"], // à personnaliser en prod
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secure: false // à mettre à true en production HTTPS
  }
});

export const getSession = (request) => sessionStorage.getSession(request.headers.get("Cookie"));
export const commitSession = (session) => sessionStorage.commitSession(session);
export const destroySession = (session) => sessionStorage.destroySession(session);
