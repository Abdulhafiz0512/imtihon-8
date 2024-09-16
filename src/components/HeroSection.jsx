import { CountriesCarousel } from "./Carousel";

export default function HeroSection() {
  return (
    <div className='hero bg-cover text-center text-white'>
      <div className='min-h-60 p-8 backdrop-brightness-50'>
        <h1 className='text-4xl mb-4'>Countries</h1>
        <CountriesCarousel>

        </CountriesCarousel>
      </div>
    </div>
  );
}
