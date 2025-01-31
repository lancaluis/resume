import Image from "next/image";
import Link from "next/link";

import { PlaceTemplate as PlaceTemplateProps } from "../../types";
import { ArrowLeft } from "lucide-react";

export default function PlaceTemplate({ place }: PlaceTemplateProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <section className="relative z-10 flex flex-col items-center max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex justify-start mb-8">
          <Link href="/trips" passHref>
            <div className="flex items-center text-gray-400 hover:text-gray-200 transition-colors duration-300 cursor-pointer">
              <ArrowLeft className="mr-2" />
              <span>Back to Trips</span>
            </div>
          </Link>
        </div>

        <div className="container flex flex-col gap-8">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-100">
              {place.title}
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {place.subtitle}
            </p>
          </div>

          <div dangerouslySetInnerHTML={{ __html: place.content.html }} />

          <div
            className={`grid gap-6 ${
              place.gallery.length === 1
                ? "grid-cols-1"
                : "grid-cols-1 md:grid-cols-2"
            }`}
          >
            {place.gallery.map((image, index) => (
              <div
                key={`image-${index}`}
                className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  className="object-cover transition-transform duration-300 hover:scale-105 shimmer"
                  src={image.url || "/placeholder.svg"}
                  alt={`${place.title} - Image ${index + 1}`}
                  fill
                  sizes={
                    place.gallery.length === 1
                      ? "100vw"
                      : "(max-width: 640px) 100vw, 50vw"
                  }
                  quality={90}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
