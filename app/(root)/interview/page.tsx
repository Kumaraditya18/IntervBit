import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
    const user = await getCurrentUser();

    if (!user) {
        return <p>User not found. Please log in.</p>;
    }

    return (
        <>
            <h3 className="text-2xl font-semibold mb-4">Interview Generation</h3>
            <Agent userName={user.name} userId={user.id} type="generate" />
        </>
    );
};

export default Page;
