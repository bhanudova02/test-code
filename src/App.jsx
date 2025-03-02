import { Route, Routes } from "react-router-dom";
import BenefitsAccordion from "./components/BenefitsAccordion";
import { Card } from "./components/Card";
import Carousel from "./components/Carousel";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { HeaderComponent } from "./components/HeaderComponent";
import { ProductCard } from "./components/ProductCard";
import SLider from "./components/Slider";
import Testomonial from "./components/Testomonial";
import { benefitsData, cardData, carouselCaptions, carouselData, mobileData, slideData } from "./constants/data";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <div>
            <HeaderComponent />
            <Carousel images={carouselData} captions={carouselCaptions} />
            <Card data={cardData} />
            <SLider images={slideData} captions={carouselCaptions} />
            <ProductCard data={mobileData} />
            <Testomonial />
            <Form />
            <BenefitsAccordion data={benefitsData} />
            <Footer />
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
