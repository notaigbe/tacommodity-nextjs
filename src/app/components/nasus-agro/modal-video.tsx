'use client'

import { useState, useRef, Fragment } from 'react'
import { Dialog, DialogPanel, Transition } from '@headlessui/react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'

interface ModalVideoProps {
  thumb: StaticImageData
  thumbWidth: number
  thumbHeight: number
  thumbAlt: string
  video: string
  videoWidth: number
  videoHeight: number
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <>
      {/* Thumbnail */}
      <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
        <Image
          src={thumb}
          width={thumbWidth}
          height={thumbHeight}
          alt={thumbAlt}
          className="rounded-[20px]"
        />
        <button
        type="button"
          onClick={() => setModalOpen(true)}
          className="absolute group"
          aria-label="Watch the video"
        >
          <svg className="w-16 h-16 sm:w-20 sm:h-20 hover:opacity-75 transition duration-150 ease-in-out" viewBox="0 0 88 88">
            <defs>
              <linearGradient x1="78.169%" y1="9.507%" x2="24.434%" y2="90.469%" id="a">
                <stop stopColor="#EBF1F5" stopOpacity=".8" offset="0%" />
                <stop stopColor="#EBF1F5" offset="100%" />
              </linearGradient>
            </defs>
            <circle fill="url(#a)" cx="44" cy="44" r="44" />
            <path
              className="fill-current text-teal-600"
              d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z"
            />
          </svg>
        </button>
      </div>

      {/* Modal */}
      <Transition show={modalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[99999]"
          initialFocus={videoRef}
          onClose={() => {
            videoRef.current?.pause()
            setModalOpen(false)
          }}
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" aria-hidden="true" />

          <div className="fixed inset-0 flex items-center justify-center px-4 sm:px-6">
            <Transition
            show={modalOpen}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              afterEnter={() => videoRef.current?.play()}
            >
              <DialogPanel className="w-full max-w-6xl aspect-video bg-black overflow-hidden">
                <video
                  ref={videoRef}
                  width={videoWidth}
                  height={videoHeight}
                  controls
                  loop
                  preload="none"
                  controlsList="nodownload"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </DialogPanel>
            </Transition>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
