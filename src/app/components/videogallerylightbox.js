'use client'; // For Next.js 13+ App Router

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Video from 'yet-another-react-lightbox/plugins/video';
import 'yet-another-react-lightbox/styles.css';
import Image from 'next/image';

export default function VideoLightboxGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [
    {
      type: 'video',
      width: 1280,
      height: 720,
      poster: '/images/video-thumb.jpg', // Optional thumbnail
      sources: [
        {
            src: 'https://youtu.be/EyWhzWh6Sa8',
            type: 'video/youtube',
        },
      ],
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <Image
          src="/images/video-thumb.jpg"
          alt="Video Thumbnail"
          width={300}
            height={200}
          className="cursor-pointer rounded shadow"
          onClick={() => {
            setIndex(0);
            setOpen(true);
          }}
        />
        
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        plugins={[Video]}
      />
    </div>
  );
}
