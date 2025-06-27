import { redirect } from "@remix-run/node";
import { getSession, destroySession } from "../session.server";

export const action = async ({ request }) => {
    const session = await getSession(request);
    return redirect("/login", {
        headers: {
            "Set-Cookie": await destroySession(session)
        }
    });
};
