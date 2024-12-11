'use client'
{/*
   - Multiple illustrations that can be selected to enlarge and view more information
    */}

import Navbar from '../components/navbar';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../components/imagestyle.module.css'; // Shared styles module
import '../globals.css'; 

export default function Page() {
  const [selectedIllustration, setSelectedIllustration] = useState(null);

  const illustrations = [
    {
      id: 1,
      title: 'Sunny and Basil',
      src: '/images/sunnflower.jpg',
      alt: 'Sunny and Basil',
      description: 'Dimensions: 1377px by 1791px Medium: Krita',
    },
    {
      id: 2,
      title: 'Riverdale x PMM',
      src: '/images/riverdale.jpg',
      alt: 'Riverdale x PMM',
      description: 'Dimensions: 1200px by 1600px Medium: Krita',
    },
    {
      id: 3,
      title: 'Spidercat',
      src: '/images/spidercat.jpg',
      alt: 'Spidercat',
      description: 'Dimensions: 1000px by 1000px Medium: Krita',
    },
    {
      id: 4,
      title: 'Bug Demon',
      src: '/images/bugcubus.png',
      alt: 'Bugcubus',
      description: 'Dimensions: 2381px by 2548px Medium: MS Paint'
    },
    {
      id: 5,
      title: 'Cat',
      src: '/images/boycat.png',
      alt: 'Catgirl',
      description: 'Dimensions: 852px by 851px Medium: Clip Studio Paint',
    },
    {
      id: 6,
      title: 'Connie',
      src: '/images/connie.jpg',
      alt: 'Connie',
      description: 'Dimensions: 1377px by 1377px Medium: Krita',
    },
  ];

  return (
    <main style={{ padding: '10px 20px' }}>
      <Navbar />

      {/* Gallery Grid */}
      <div className={styles.galleryContainer} style={{ margin: '10px, 0px', background: '#d9dfec'}}>
        {illustrations.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedIllustration(item)}
            className={styles.imageContainer}
          >
            <Image src={item.src} alt={item.alt} layout="fill" objectFit="cover" />
            <p className={styles.imageTitle}>{item.title}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIllustration && (
        <div
          onClick={() => setSelectedIllustration(null)}
          className={styles.modalOverlay}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={styles.modalContent}
          >
            <Image
              src={selectedIllustration.src}
              alt={selectedIllustration.alt}
              width={600}
              height={600}
            />
            <h2>{selectedIllustration.title}</h2>
            <p>{selectedIllustration.description}</p>
          </div>
        </div>
      )}
    </main>
  );
}