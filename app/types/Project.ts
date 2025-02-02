import { PortableTextBlock } from "sanity";

export type Project
    = {
        _id: string;
        _createdAt: string;
        title: string;
        slug: string;
        image:string;
        url: string;
        description: string;
        content: PortableTextBlock[];
    };