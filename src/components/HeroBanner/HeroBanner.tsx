import { Image } from "@heroui/react";
import { ButtonProps } from "../Button/Button";
import { Button } from "../Button/Button";
// import { ArrowRight } from "lucide-react";

export type HeroBannerProps = {
  title: string;
  body: string;
  button: ButtonProps;

}

export default function HeroBanner({}: HeroBannerProps) {
  return (
    <section className="w-full bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Build Amazing Digital Experiences
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Create stunning websites and applications with our powerful platform. 
              Fast, reliable, and built for modern teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                colour="primary"
                size="lg"
                // endContent={<ArrowRight size={20} />}
                label={"Get Started"}
              >
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
              alt="Hero image"
              className="rounded-2xl shadow-xl"
              classNames={{
                wrapper: "w-full"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}