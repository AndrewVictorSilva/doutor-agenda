import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="">
      <Link href={"/authentication"}>
        <Button>Login</Button>
      </Link>
    </div>
  );
}
