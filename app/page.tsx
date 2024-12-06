import CampaignStats from "@/components/home/campaignStats";
import Hero from "@/components/home/hero";
import Newsletter from "@/components/home/newsletter";
import Reservation from "@/components/home/reservation";
import Services from "@/components/home/services";
import Video from "@/components/home/video";

export default function Home() {
  return (
    <>
      <Hero />
      <Video />
      <Reservation />
      <Services />
      <CampaignStats />
      <Newsletter />
    </>
  );
}
