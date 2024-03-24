import TourInfo from "@/components/TourInfo.jsx";
import { getTourById } from "@/utils/actions.js";
import Link from "next/link.js";
import { redirect } from "next/navigation.js";
import { MdArrowBackIos } from "react-icons/md";

async function SingleTourPage({ params }) {
  const tour = await getTourById(params.id);

  if (!tour) {
    redirect("/torus");
  }

  return (
    <div className="flex flex-col">
      <Link href="/tours" className="btn btn-primary mb-12 text-bold sm:max-w-40 ">
        <MdArrowBackIos />
        Back to Tours
      </Link>
      <TourInfo tour={tour} />
    </div>
  );
}
export default SingleTourPage;
