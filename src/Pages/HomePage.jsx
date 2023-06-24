import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import ContentHome from "../Components/Homepage/Content";
import Carousel from "../Components/Homepage/Carousel";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#262626] ">
      <NavigationBar />
      <Carousel />
      <div className="p-10">
        <ContentHome />
      </div>
      <Footer />
    </div>
  );
}
