import About from "./component";
import { api } from "@/public/script/public";

export const metadata = {title: 'تواصل معنا'}

export default async function Page () {

    const data = await api('default');

    return <About categories={data.categories || []} settings={data.settings || {}}/>
        
}
