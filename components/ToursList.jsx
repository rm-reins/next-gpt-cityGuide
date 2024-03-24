import SingleTour from "./SingleTour.jsx";

function ToursList({ data }) {
  if (data.length === 0)
    return (
      <div className="flex justify-center">
        <h2 className="text-lg font-bold">No tours found...</h2>
      </div>
    );

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {data.map((tour) => {
        return <SingleTour key={tour.id} tour={tour} />;
      })}
    </div>
  );
}
export default ToursList;
