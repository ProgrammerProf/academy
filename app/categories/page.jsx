import Categories from "./component";
import { api } from "@/public/script/public";

export const metadata = {title: 'أقسام الأكاديمية'}

export default async function Page () {

    const data = await api('categories');

    return <Categories data={data.all_categories || []} settings={data.settings || {}}/>
        
}
