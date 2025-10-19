import { Image } from "@heroui/react";
import { ButtonProps } from "../Button/Button";
import { Button } from "../Button/Button";
// import { ArrowRight } from "lucide-react";

export type HeroBannerProps = {
  title: string;
  body: string;
  button: ButtonProps;
  image: {
    src: string;
    alt: string;
  }
}
export const HeroBanner: React.FC<HeroBannerProps> = ({ title, body, button, image }) => {
// export function HeroBanner({button, body, title}: HeroBannerProps) {
  return (
    <section className="w-full bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              {body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                colour={button.colour}
                size={button.size}
                // endContent={<ArrowRight size={20} />}
                label={button.label}
              >
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Image
              src={image.src}
              alt={image.alt}
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