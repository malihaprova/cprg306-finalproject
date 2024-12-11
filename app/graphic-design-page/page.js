{/*
   - Showcase of digital designs
    */}

    import Navbar from '../components/navbar';
    import Image from 'next/image';
    import styles from '../components/imagestyle.module.css';
    import '../globals.css'; 
    
    export default function Page() {
      // Static data for digital designs
      const digitalDesigns = [
        {
          id: 1,
          title: 'Design 1',
          src: '/images/hikikomori.png',
          alt: 'Digital Design 1',
        },
        {
          id: 3,
          title: 'Design 3',
          src: '/images/eyes.gif',
          alt: 'Digital Design 3',
        },
        {
            id: 4,
            title: 'Design 4',
            src: '/images/cowhalo.png',
            alt: 'Digital Design 4',
          },
        // Add more designs as needed
      ];
    
      return (
        <main style={{ padding: '10px 20px' }}>
          <Navbar />
    
          {/* Showcase Container */}
          <div
            style={{
              background: '#d9dfec',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '20px',
              padding: '20px',
        }}
      >
        {digitalDesigns.map((design) => (
          <div key={design.id} className={styles.imageContainer}>
            <Image src={design.src} alt={design.alt} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </main>
  );
}