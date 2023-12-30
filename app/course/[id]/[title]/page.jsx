import Course from "./component";
import { api } from "@/public/script/public";
import { redirect } from "next/navigation";

export const metadata = {}

export default async function Page ({ params }) {

    if ( !params.id ) return redirect('/');

    const data = await api('course', {id: params.id});

    if ( !Object.keys(data.course || {}).length ) return redirect('/');

    metadata.title = data.course.name;

    return <Course categories={data.categories} data={data.course || {}} settings={data.settings || {}}/>
        
}
