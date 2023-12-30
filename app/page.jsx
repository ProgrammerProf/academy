import Home from "@/app/component/home";
import { api } from "@/public/script/public";

export const metadata = {}

export default async function Page () {

    const data = await api('default');

    metadata.title = data.settings.name || 'الأكاديمية السعودية';

    return <Home data={data} settings={data.settings || {}}/>
        
}
