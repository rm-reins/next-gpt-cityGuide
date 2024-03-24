"use client";

import { getAllTours } from "@/utils/actions.js";
import { useQuery } from "@tanstack/react-query";
import ToursList from "./ToursList.jsx";
import { useState } from "react";

function Tours() {
  const [search, setSearch] = useState("");

  const { data, isPending } = useQuery({
    queryKey: ["tours", search],
    queryFn: () => getAllTours(search),
  });

  return (
    <div className="w-full sm:pb-0 pb-12">
      <div className="flex justify-center w-full mb-12">
        <div className="join w-full max-w-2xl">
          <input
            type="text"
            placeholder="Enter City or Country"
            className="input input-bordered join-item w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          <button
            className="btn btn-primary join-item"
            type="button"
            disabled={isPending}
            onClick={() => setSearch("")}
          >
            {isPending ? "Searching" : "Reset"}
          </button>
        </div>
      </div>

      <div>
        {isPending ? (
          <div className="flex justify-center">
            <span className="loading loading-ring"></span>
          </div>
        ) : (
          <ToursList data={data} />
        )}
      </div>
    </div>
  );
}
export default Tours;
