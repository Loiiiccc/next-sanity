import { time } from "console";
import { plugin } from "postcss";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import project from "./sanity/schemas/project-schema";
import schemas from "./sanity/schemas";

const config = defineConfig({
    // Project ID
    projectId: "zlmd86gd",
    // Dataset Name
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2025-02-02",
    BasePath: "/admin",
    plugins: [structureTool()],
    schema:{types: schemas},
});

export default config;