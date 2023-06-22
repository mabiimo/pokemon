import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import ContentHome from "../Components/Homepage/Content";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#262626] p-10">
      <NavigationBar />
      <ContentHome />
      <Footer />
    </div>
  );
}
