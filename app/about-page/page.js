{/*
   - Description of artist and background
   - Static images
   - Social media links 
    */}
import Navbar from '../components/navbar';
import Image from 'next/image';
import Link from 'next/link';
import '../globals.css'; 
export default function Page() {
    return (
      <main style={{ 
        padding: '10px 20px'}}>
        <Navbar />
        {/* Container for Two Columns */}
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        {/* Left Column */}
        <div
          style={{
            background: '#d9dfec',
            padding: '20px',
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
            <div style={{ background: '#d9dfec',}}>
          {/* Artist Description */}
          <section style={{ background: '#f2f2f2', padding: '20px' }}>
            <h2 style={{ marginBottom: '10px' }}>About the Artist</h2>
            <p>
              Hi, I’m Maliha, a digital artist with a particular interest in character focused artwork. 
              I have been doing digital art for over a decade, drawing inspiration from various artists online,
              especially anime style artwork. This is a hobby of mine that I like to share with others, and occasionally do on request.
            </p>
          </section>

          {/* Social Media Links */}
          <section style={{ background: '#f2f2f2', padding: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center'}}>
              <Link target="_blank" href="https://instagram.com////" passHref>
                    <Image src="/images/instagram.png" alt="Artwork 1" width={40} height={40} />
              </Link>
              <Link target="_blank" href="https://twitter.com" passHref>
                    <Image src="/images/twitter.png" alt="Artwork 1" width={40} height={40} />
              </Link>
              <Link target="_blank" href="https://www.redbubble.com/people/meltedmari/shop" passHref>
              <Image src="/images/redbubble.png" alt="Artwork 1" width={40} height={40} />
              </Link>
            </div>
          </section>
          </div>
        </div>

        {/* Right Column: Gallery */}
        <div
          style={{
            flex: '1',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
            background: '#d9dfec',
            padding: '10px',
          }}
        >
          <Image src="/images/artist.png" alt="Artist" width={463} height={720} />
        </div>
      </div>
    </main>
    );
}
