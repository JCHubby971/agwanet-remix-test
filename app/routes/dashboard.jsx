import { redirect } from "@remix-run/node";
import { getSession } from "../session.server";

// Ce loader protège la route
export const loader = async ({ request }) => {
    const session = await getSession(request);
    const token = session.get("token");

    if (!token) {
        return redirect("/login");
    }

    return null; // autorisé
};

export default function Dashboard() {
    return (
        <div style={{ padding: "2rem" }}>
            <h1>Bienvenue dans ton espace AGWANET !</h1>
            <form method="post" action="/logout">
                <button type="submit">Se déconnecter</button>
            </form>
        </div>
    );
}
