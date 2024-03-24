import TourInfo from "@/components/TourInfo.jsx";
import { getTourById } from "@/utils/actions.js";
import Link from "next/link.js";
import { redirect } from "next/navigation.js";
import { MdArrowBackIos } from "react-icons/md";
import axios from "axios";
import Image from "next/image.js";

const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_KEY}&query=`;

async function SingleTourPage({ params }) {
  const tour = await getTourById(params.id);

  if (!tour) {
    redirect("/torus");
  }

  const { data } = await axios.get(`${url}${tour.city}`);
  const tourImage = data?.results[0]?.urls?.raw;

  return (
    <div className="flex flex-col">
      <Link href="/tours" className="btn btn-primary mb-12 text-bold sm:max-w-40 ">
        <MdArrowBackIos />
        Back to Tours
      </Link>
      {tourImage ? (
        <div>
          <Image
            src={tourImage}
            width={300}
            height={300}
            className="rounded-xl shadow-xl mb-16 w-96 object-cover"
            alt={tour.title}
            priority
          />
        </div>
      ) : null}
      <TourInfo tour={tour} />
    </div>
  );
}
export default SingleTourPage;
