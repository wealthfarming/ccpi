'use client';

import { useEffect, useState } from 'react';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { getCustomRichTextConverters } from '@/components/rich-text/custom-rich-text-converters';

interface Props {
  post: any;
}

export default function News({ post }: Props) {
  const [isClient, setIsClient] = useState(false);

  // mark as client
  useEffect(() => {
    setIsClient(true);
  }, []);
  // fetch post data when client and slug or language changes
  if (!isClient) return null;

  return (
    <div className="pb-[100px]">
      <RichText
        data={post.description}
        converters={({ defaultConverters }) =>
          getCustomRichTextConverters(defaultConverters)
        }
      />
    </div>
  );
}