import { Hero } from "@/components/home/Hero"
import { FeaturedProducts } from "@/components/home/FeaturedProducts"
import TrendingProducts from "@/components/home/TrendingProducts"
import DiscountItem from "@/components/home/DiscountItem"
import TopCategories from "@/components/home/TopCategories"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import NewsletterSection from "@/components/home/NewsletterSection"
import CompanyLogos from "@/components/home/CompanyLogos"
import LatestBlog from "@/components/home/LatestBlog"

export default function Home() {
  return (
    <main className="bg-neutral-background min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Latest Products Section */}
      <section className="container mx-auto py-8 sm:py-16 px-4">
        <h2 className="text-center text-xl sm:text-2xl font-extrabold text-primary-dark mb-6 sm:mb-12">
          Latest Products
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
          <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">New arrival</button>
          <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">Best seller</button>
          <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">Featured</button>
          <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">Special offer</button>
        </div>
        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="p-3 sm:p-4 hover:shadow-lg transition-shadow">
              <div className="h-48 sm:h-60 relative mb-3 sm:mb-4">
                <Image
                  src={`/image ${1167 + item}.png`}
                  alt="Product image"
                  fill
                  className="object-contain"
                  sizes="(max-width: 450px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw"
                />
              </div>
              <h3 className="text-sm sm:text-base font-semibold">Product Name</h3>
              <p className="text-sm sm:text-base text-accent">$299.00</p>
            </Card>
          ))}
        </div>
      </section>

      {/* What Shopex Offers */}
      <section className="container mx-auto py-8 sm:py-16 px-4">
        <h2 className="text-center text-xl sm:text-2xl font-extrabold text-primary-dark mb-6 sm:mb-12">
          What Shopex Offers
        </h2>
        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {['24/7 Support', 'Cash Back', 'Monthly Offer', 'Free Delivery'].map((offer) => (
            <Card key={offer} className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">{offer}</h3>
              <p className="text-sm sm:text-base text-secondary-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Unique Features Section */}
      <section className="bg-primary-light py-8 sm:py-16 mt-8 sm:mt-16">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="relative h-[250px] sm:h-[350px]">
            <Image
              src="/sofa2.png"
              alt="Featured sofa"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-3xl font-extrabold text-secondary">
              Unique Features Of Latest & Trending Products
            </h2>
            <ul className="space-y-3 sm:space-y-4">
              {[
                'All frames constructed with hardwood solids and laminates',
                'Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails',
                'Arms, backs and seats are structurally reinforced'
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm sm:text-base text-secondary-light">
                  <span className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TrendingProducts />
      <DiscountItem />
      <TopCategories />
      <NewsletterSection />
      <CompanyLogos />
      <LatestBlog />
    </main>
  );
}
