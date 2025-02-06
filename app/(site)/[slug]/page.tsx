import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";


type Props = {
    params: Promise<{slug: string}>
}

export default async function Page({params}: Props) {
    const page = await getPage((await params).slug);
    return (
        <div>
            <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-7xl font-bold">{page.title}</h1>
            <div>
                
            <PortableText value={page.content} />
            </div>
        </div>
    );
}

//Params type other fix ( i didn't test it in deployement )(i think it will work)  


// type ParamsType =  Promise<{slug: string}>;

// export default async function Page(props: {params: ParamsType}) {
//     const page = await getPage((await props.params).slug);
//     return (
//         <div>
//             <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-7xl font-bold">{page.title}</h1>
//             <div>
                
//             <PortableText value={page.content} />
//             </div>
//         </div>
//     );
// }