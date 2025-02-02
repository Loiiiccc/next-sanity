import { Project } from "@/app/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    // projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    // dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    // apiVersion: "2021-08-31",
    // useCdn: process.env.NODE_ENV === "production",
    // Project ID
    projectId: "zlmd86gd",
    // Dataset Name
    dataset: "production",
    apiVersion: "2025-02-02",
  });

  return client.fetch(groq`*[_type == "project"]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    description,
    content}`);

//   const query = groq`*[_type == "project"]`;
//   const projects = await client.fetch(query);
//   return projects;
}
