// components/ServiceCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description?: string;
  iconSrc: string;
  iconAlt: string;
  iconWidth: number;
  iconHeight: number;
  href?: string;
}

export default function ServiceCard({
  title,
  description,
  iconSrc,
  iconAlt,
  iconWidth,
  iconHeight,
  href,
}: ServiceCardProps) {
  return (
    <Link href={href || ''}>
      <Card className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white border-none rounded-lg">
        <CardHeader className="text-center pb-0">
          <div className="mx-auto mb-4">
            {iconSrc && <Image
              src={iconSrc}
              alt={iconAlt}
              width={iconWidth}
              height={iconHeight}
              className="transition-transform group-hover:scale-110"
            />}
          </div>
          <CardTitle className="text-xl font-semibold text-orange-500 group-hover:text-orange-600">
            {title}
          </CardTitle>
        </CardHeader>
        {description && (
          <CardContent className="text-center text-gray-600 pt-2">
            <p>{description}</p>
          </CardContent>
        )}
      </Card>
    </Link>
  );
}