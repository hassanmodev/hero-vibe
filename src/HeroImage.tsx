interface HeroImageProps {
  image: string;
  imageBlockClass: string;
}

export const HeroImage = (({ image }: HeroImageProps) => (
  <img
    alt="Hero Visual"
    className="rounded-xl w-full max-w-xl h-auto max-h-[500px] object-cover shadow-xl hover:shadow-2xl transition-shadow duration-300"
    src={image}
    loading="eager" />
));
