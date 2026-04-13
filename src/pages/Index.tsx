import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ArtistShowcaseSection from "../components/ArtistShowcaseSection";
import SocialProofSection from "../components/SocialProofSection";
import FeaturedVideoSection from "../components/FeaturedVideoSection";
import AgendaSection from "../components/AgendaSection";
import GallerySection from "../components/GallerySection";
import ProjectsSection from "../components/ProjectsSection";
import SocialSection from "../components/SocialSection";
import BookingSection from "../components/BookingSection";
import FloatingContactButton from "../components/FloatingContactButton";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ArtistShowcaseSection />
      <SocialProofSection />
      <FeaturedVideoSection />
      <AgendaSection />
      <GallerySection />
      <ProjectsSection />
      <SocialSection />
      <BookingSection />
      <Footer />
      <FloatingContactButton />
    </div>
  );
};

export default Index;
