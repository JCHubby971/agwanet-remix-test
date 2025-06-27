import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { getSession, commitSession } from "../session.server";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    if (email === "client@agwanet.com" && password === "123456") {
        const session = await getSession(request);
        session.set("token", "fake-jwt-token-123"); // simulate un token

        return redirect("/dashboard", {
            headers: {
                "Set-Cookie": await commitSession(session)
            }
        });
    }

    return new Response("Identifiants incorrects", { status: 401 });
};

export default function Login() {
    return (
        <div style={{ padding: "2rem" }}>
            <h1>Connexion</h1>
            <Form method="post">
                <input type="email" name="email" placeholder="Email" required />
                <br />
                <input type="password" name="password" placeholder="Mot de passe" required />
                <br />
                <button type="submit">Se connecter</button>
            </Form>
        </div>
    );
}