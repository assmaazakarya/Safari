import RecommendationSection from "../../components/RecommendationSection";
import NearbyHotelsSection from "../../components/NearbyHotelsSection";

export default function Home() {
  return (
    <div className="px-4  md:px-28">
      <RecommendationSection />
      <NearbyHotelsSection />
    </div>
  );
}
