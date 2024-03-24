"use client";

import TourInfo from "./TourInfo.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getTour, genTourRes, createTour } from "@/utils/actions.js";
import toast from "react-hot-toast";

function NewTour() {
  const queryClient = useQueryClient();
  const { mutate, isPending, data } = useMutation({
    mutationFn: async (destination) => {
      const existTour = await getTour(destination);

      if (existTour) return existTour;

      const newTour = await genTourRes(destination);

      if (newTour) {
        await createTour(newTour);
        queryClient.invalidateQueries({ queryKey: ["tours"] });
        return newTour;
      }

      toast.error("Sorry, there's no such place...");
      return null;
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    mutate(destination);
  }

  if (isPending) {
    return <span className="loading loading-lg"></span>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <h2 className="mb-4 font-bold">Where do you want to go now?</h2>
        <div className="join w-full">
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="City"
            name="city"
            required
          />
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="Country"
            name="country"
            required
          />

          <button className="btn btn-primary join-item" type="submit">
            Generate Tour
          </button>
        </div>
      </form>
      <div className="mt-16">{data ? <TourInfo tour={data} /> : null}</div>
    </div>
  );
}
export default NewTour;
