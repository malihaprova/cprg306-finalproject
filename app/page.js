'use client'
import Image from "next/image";
import Link from 'next/link';
import Navbar from './components/navbar.js';
import './globals.css'; 
 {/*
    - Brief Description of site contents
    - Highlights section for each page
    */}
export default function Home() {
    const illustrationsPreview = [
        '/images/sunnflower.jpg',
        '/images/riverdale.jpg',
        '/images/spidercat.jpg',
      ];
    
      const designsPreview = [
        '/images/design1.jpg',
        '/images/design2.jpg',
        '/images/design3.jpg',
      ];
    
      return (
        <main style={{ 
            padding: '10px 20px'}}>
          <Navbar />
    
          {/* Site Description */}
          <section style={{ 
              background: '#d9dfec',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '20px',
              padding: '20px',
              textAlign: 'center', 
            }}>
            <h1>Malihas Digital Art Portfolio</h1>
            <p style={{ maxWidth: '70%', margin: '0 auto' }}>
              Within this site, you will find a collection of some of my 
              character art and other digitally made designs. For information on commissions, 
              visit the commissions page for a price estimate and further contact information.
            </p>
          </section>
    
          {/* Previews Section */}
          <section style={{
              background: '#d9dfec',
              flexWrap: 'wrap',
              justifyContent: 'center',
              padding: '20px',
              display: 'flex', 
              flexDirection: 'column', 
              gap: '40px' }}>
            {/* Illustrations Preview */}
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '20px',
                  flexWrap: 'wrap',
                  marginBottom: '30px',
                }}
              >
                {illustrationsPreview.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`Illustration Preview ${index + 1}`}
                    width={150}
                    height={150}
                    style={{
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                ))}
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link href="./illustrations-page">
                  <p
                    style={{
                        padding: '15px 30px',
                        background: 'linear-gradient(90deg, #68758f, #98abd1)', // Gradient background
                        color: '#fff',
                        borderRadius: '25px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
                        transition: 'transform 0.2s, box-shadow 0.2s', // Smooth hover animation
                        display: 'inline-block', // Ensure proper spacing
                    }}
                  >
                    View Gallery
                  </p>
                </Link>
              </div>
            </div>
          </section>
        </main>
      );
    }