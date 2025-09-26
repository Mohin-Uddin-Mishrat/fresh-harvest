import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import BlogSection from "@/components/BlogSection";
import Login from "@/components/Login";
import Offers from "@/components/Offers";
import ProductSection from "@/components/ProductSection";
import Reviews from "@/components/Reviews";


export default function Home() {
 
  return (
    <main >
      {/* login */}
      <Login></Login>
      {/* Banner */}
      <Banner></Banner>
      {/* Product */}
     <ProductSection></ProductSection>
     {/* ABOUT US */}
     <AboutUs></AboutUs>
     {/* Offers */}
     <Offers></Offers>
     {/* REVIEWS */}
     <Reviews></Reviews>
     {/* BlogSection */}
     <BlogSection></BlogSection>
    </main>
  )
}