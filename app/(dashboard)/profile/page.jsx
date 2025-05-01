"use client";
import { UserProfile, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function ProfilePage() {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <div className="grid gap-9">
      <button
        onClick={handleSignOut}
        className="btn btn-primary sm:hidden justify-self-stretch mx-8 text-lg "
      >
        Log out
      </button>
      <UserProfile />
    </div>
  );
}
export default ProfilePage;
