import Image from "next/image"

interface TestimonialCardProps {
  name: string
  location: string
  image: string
  text: string
  rating: number
}

export default function TestimonialCard({ name, location, image, text, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-3 shadow-md border border-gray-700">
      <div className="flex items-start gap-3 mb-2">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold text-sm text-gray-200">{name}</h4>
          <p className="text-xs text-gray-500">{location}</p>
          <div className="flex text-amber-400 mt-0.5">
            {Array.from({ length: rating }).map((_, i) => (
              <span key={i} className="text-[10px]">
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-400 text-xs italic">{text}</p>
    </div>
  )
}
