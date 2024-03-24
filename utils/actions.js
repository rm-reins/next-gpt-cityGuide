"use server";
import prisma from "@/prisma/db.ts";
import OpenAI from "openai";

const openAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function chatResponse(messages) {
  try {
    const resp = await openAI.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a city guide helper. Your purpose is to assist users in discovering attractive places to visit in their specified city.",
        },
        ...messages,
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });
    return resp.choices[0].message;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getTour({ city, country }) {
  return prisma.tour.findUnique({
    where: {
      city_country: {
        city,
        country,
      },
    },
  });
}

export async function getAllTours(searchParam) {
  if (!searchParam) {
    const tours = await prisma.tour.findMany({
      orderBy: {
        city: "asc",
      },
    });
    return tours;
  }

  const tours = await prisma.tour.findMany({
    where: {
      OR: [
        {
          city: {
            contains: searchParam,
            mode: "insensitive",
          },
        },

        {
          country: {
            contains: searchParam,
            mode: "insensitive",
          },
        },
      ],
    },
    orderBy: {
      city: "asc",
    },
  });
  return tours;
}

export async function genTourRes({ city, country }) {
  const query = `Find a city ${city} in following country ${country}. If this said city exists in said country, create a list of things users can do in city ${city} country ${country}.
  As soon as you have the list, create a one day tour. Response should be in following JSON format:
  {
    "tour": {
      "city": "${city}",
      "country": "${country}",
      "title": "tour title",
      "description": "description of the city and tour",
      "places": ["short paragraph (no more than 200 words) for first place to visit", "short paragraph (no more than 200 words) for second place to visit","short paragraph (no more than 200 words) for third place to visit"]
    }
  }
  In case you cannot find information on exact ${city}, or ${city} does not exist, or it is not located in country ${country}, response should be in following JSON format:
  {
    "tour": null
  }
  `;

  try {
    const resp = await openAI.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a city guide helper. Your purpose is to assist users in discovering attractive places to visit in their specified city",
        },
        {
          role: "user",
          content: query,
        },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });

    const data = JSON.parse(resp.choices[0].message.content);

    if (!data.tour) {
      return null;
    }

    return data.tour;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function createTour(tour) {
  return prisma.tour.create({
    data: tour,
  });
}

export async function getTourById(id) {
  return prisma.tour.findUnique({
    where: {
      id,
    },
  });
}
