import { PrismaClient } from "@repo/db/client"; 
const client = new PrismaClient();


export default function Home() {
  return (
    <div className="text-1xl">
      Hi there
    </div>
  );
}
