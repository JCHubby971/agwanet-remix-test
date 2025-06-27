import { useLoaderData, Form } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getSession } from "../session.server";

export const loader = async ({ request }) => {
    const session = await getSession(request);
    const token = session.get("token");

    if (!token) {
        throw new Response("Non connecté", { status: 401 });
    }

    const url = new URL(request.url);
    const filtre = url.searchParams.get("filtre") || "tous";

    const res = await fetch("http://localhost:5000/api/documents", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!res.ok) {
        throw new Response("Erreur API", { status: res.status });
    }

    const allDocs = await res.json();

    const docsFiltres =
        filtre === "tous"
            ? allDocs
            : allDocs.filter((doc) => doc.type === filtre);

    return json({ docs: docsFiltres, filtre });
};

export default function Documents() {
    const { docs, filtre } = useLoaderData();

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Mes documents</h1>

            <Form method="get">
                <label>Filtrer par type : </label>
                <select name="filtre" defaultValue={filtre}>
                    <option value="tous">Tous</option>
                    <option value="devis">Devis</option>
                    <option value="facture">Facture</option>
                    <option value="rapport">Rapport</option>
                </select>
                <button type="submit">Filtrer</button>
            </Form>

            <ul>
                {docs.map((doc) => (
                    <li key={doc.id}>
                        <strong>{doc.nom}</strong> | {doc.type} | {doc.statut} |{" "}
                        <a href={doc.lien}>Télécharger</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
