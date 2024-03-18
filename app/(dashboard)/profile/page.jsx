"use client";
import { UserProfile, useAuth } from "@clerk/nextjs";

function ProfilePage() {
  const { signOut } = useAuth();
  return (
    <div className="grid gap-9">
      <button
        onClick={signOut}
        className="btn btn-primary sm:hidden justify-self-stretch mx-8 text-lg "
      >
        Log out
      </button>
      <UserProfile />
    </div>
  );
}
export default ProfilePage;
