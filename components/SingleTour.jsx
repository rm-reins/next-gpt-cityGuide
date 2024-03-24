import Link from "next/link.js";

function SingleTour({ tour }) {
  const { city, country, title, id, description } = tour;

  return (
    <Link href={`/tours/${id}`} className="card card-compact bg-base-100 shadow-xl">
      <div className="card-body sm:h-60">
        <h2 className="card-title">{title}</h2>
        <p>{description.substring(0, 140)}...</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{city}</div>
          <div className="badge badge-outline">{country}</div>
        </div>
      </div>
    </Link>
  );
}
export default SingleTour;
