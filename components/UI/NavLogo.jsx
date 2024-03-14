import Image from "next/image.js";

function NavLogo() {
  return (
    <div>
      <Image src="/logo_guide.svg" alt="navlogo" width={60} height={60} />
    </div>
  );
}
export default NavLogo;
