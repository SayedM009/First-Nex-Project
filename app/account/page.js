import { auth } from "../_lib/auth";
export const metadata = {
  title: "Account",
};

export default async function page() {
  const session = await auth();
  return <h1 className="text-7xl text-accent-500">{session?.user?.name}</h1>;
}
