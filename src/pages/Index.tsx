import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ArtistShowcaseSection from "../components/ArtistShowcaseSection";
import SocialProofSection from "../components/SocialProofSection";
import FeaturedVideoSection from "../components/FeaturedVideoSection";
import AgendaSection from "../components/AgendaSection";
import GallerySection from "../components/GallerySection";
import ProjectsSection from "../components/ProjectsSection";
import ProdutoraIntroOverlay from "../components/ProdutoraIntroOverlay";
import ProdutoraSection from "../components/ProdutoraSection";
import SocialSection from "../components/SocialSection";
import BookingSection from "../components/BookingSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ProdutoraIntroOverlay />
      <Navbar />
      <HeroSection />
      <ArtistShowcaseSection />
      <SocialProofSection />
      <FeaturedVideoSection />
      <AgendaSection />
      <GallerySection />
      <ProjectsSection />
      <ProdutoraSection />
      <SocialSection />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;
