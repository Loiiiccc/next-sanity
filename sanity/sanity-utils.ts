import { Project } from "@/app/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/app/types/Page";

export async function getProjects(): Promise<Project[]> {
  // const client = createClient({
  //   // projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  //   // dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  //   // apiVersion: "2021-08-31",
  //   // useCdn: process.env.NODE_ENV === "production",
  //   // Project ID
  //   projectId: "zlmd86gd",
  //   // Dataset Name
  //   dataset: "production",
  //   apiVersion: "2025-02-02",
  // });

  return createClient(clientConfig).fetch(groq`*[_type == "project"]{
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


export async function getProject(slug: string): Promise<Project> {
  
  return createClient(clientConfig).fetch(groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    description,
    content
  }`,

  {slug});

}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(groq`*[_type == "page"]{
    _id,
    _createdAt,
    title,
    "slug": slug.current 
  }`);
}


export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(groq`*[_type == "page" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content
  }`, {slug});
}