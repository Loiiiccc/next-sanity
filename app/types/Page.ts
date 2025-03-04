import { PortableTextBlock } from "next-sanity";

export type Page = {
    _id: string;
    _createdAt: string;
    title: string;
    slug: string;
    content: PortableTextBlock[];}