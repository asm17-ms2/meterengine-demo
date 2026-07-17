import { AiAssist } from "@/components/ai-assist";
import { Cta } from "@/components/cta";
import { Features } from "@/components/features";
import { GetStarted } from "@/components/get-started";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { Trust } from "@/components/trust";
import { Why } from "@/components/why";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Why />
        <HowItWorks />
        <Features />
        <GetStarted />
        <AiAssist />
        <Trust />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
