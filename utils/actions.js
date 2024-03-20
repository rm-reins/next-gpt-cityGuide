"use server";
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
  return null;
}

export async function genTourRes({ city, country }) {
  return null;
}

export async function createTour(tour) {
  return null;
}
