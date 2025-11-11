export interface Slide {
  id: number;
  image: string;
  alt: string;
}

export interface CarouselProps {
  slides: Slide[];
}
