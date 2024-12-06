import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Video() {
  return (
    <section className=" bg-primary mt-10">
      <div className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold text-white text-center">
          Faites briller votre marque en la montrant au monde...
        </h2>
        <div className="relative aspect-video w-full overflow-hidden bg-black/20">
          <Button
            size="icon"
            variant="outline"
            className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-transparent"
          >
            <Image src="/play-icon.svg" alt="Play" width={40} height={40} />
          </Button>
        </div>
        <div className="flex justify-center">
          <Button className="border border-white rounded-full bg-transparent p-8 mt-10">
            <Link href="#">Prendre un rendez-vous</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Video;
