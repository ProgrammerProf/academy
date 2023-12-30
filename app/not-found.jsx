import Error from "@/app/component/error";
import { api } from "@/public/script/public";

export const metadata = {title: 'خطأ - 404 !'}

export default async function Page () {

    const data = await api('default');

    return <Error settings={data.settings || {}}/>

}
