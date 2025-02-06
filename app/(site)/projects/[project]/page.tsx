import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props ={
    params: Promise<{project: string}>
}
export default async function Project({params}: Props) {

    const slug = (await params).project;
    const project = await getProject(slug);
    return (
        <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]" >
            <header className="flex items-center justify-between ">
                <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-4xl ">{project.title}</h1>
                <p>{project.description}</p>
                <a href={project.url} title="Visit Project" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 rounded-lg font-bold py-4 px-4 whitespace-nowrap text-white hover:shadow-2xl hover:shadow-purple-600/30">Visit project</a> 
            </header>

            <div className=" text-lg text-gray-400 mt-5">
                <PortableText value={project.content}/> 
            </div>

            <Image src={project.image} alt={project.title} width={780} height={720} className="object-cover rounded-xl border border-gray-500" />
        </div>
    );
}