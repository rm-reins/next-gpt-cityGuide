function TourInfo({ tour }) {
  const { title, description, places } = tour;
  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-semibold mb-4">{title}</h1>
      <p className="leading-lose mb-6">{description}</p>

      <ul>
        {places.map((place) => {
          return (
            <li key={place} className="mb-4 bg-base-100 p-4 rounded-xl">
              {place}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default TourInfo;
