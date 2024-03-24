import Tours from "@/components/Tours.jsx";
import { getAllTours } from "@/utils/actions.js";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

async function ToursPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["tours", ""],
    queryFn: () => getAllTours(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Tours />
    </HydrationBoundary>
  );
}

export default ToursPage;
