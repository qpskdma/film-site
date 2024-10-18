import Footer from "./Footer/Footer";
import NewSection from "./NewSection/NewSection";
import PromoSection from "./PromoSection/PromoSection";
import TopSection from "./TopSection/TopSection";
import TrailerSection from "./TrailerSection/TrailerSection";

export default function Home() {
  return (
    <div>
      <TrailerSection />
      <NewSection />
      <PromoSection />
      <TopSection />
      <Footer />
    </div>
  );
}
