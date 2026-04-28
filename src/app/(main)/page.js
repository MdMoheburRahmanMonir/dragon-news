import HomeData from "@/Components/HomeData";
import { getData } from '@/lib/Data';

export default async function Home() {
  const data = await getData();
  return (
    <div className=" text-black p-4  flex items-center justify-center">
      <HomeData data={data} active={'08'}></HomeData> 
    </div>
  );
}
