import Category from "./component";
import { api } from "@/public/script/public";
import { redirect } from "next/navigation";

export const metadata = {}

export default async function Page ({ params }) {

    if ( !params.id ) return redirect('/');

    const data = await api('category', {id: params.id});

    if ( !Object.keys(data.category || {}).length ) return redirect('/');

    metadata.title = data.category.name;

    return <Category categories={data.categories} data={data.category || {}} settings={data.settings || {}}/>
        
}
