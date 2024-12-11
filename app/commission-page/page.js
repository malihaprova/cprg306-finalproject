'use client'
{/*
   - Price calculator based on preset factors such as commission type, size and time.
   - Contact section with Email option.

   base prices:
   bust - $10
   half body - $15
   full body - $20

   Add additional characters?
    $10 * number of additional characters

   Choose between the following multipliers:
    Sketch only - *1.0
    Flat colors - *1.5
    Fully rendered - *2.0
    */}
    import { useState } from 'react';
    import Navbar from '../components/navbar';
    import Image from 'next/image';
    import Link from 'next/link';
    import '../globals.css'; 

    export default function Page() {
        const [base, setBase] = useState('bust');
        const [additionalCharacters, setAdditionalCharacters] = useState(0);
        const [multiplier, setMultiplier] = useState(1.0);
        const [totalPrice, setTotalPrice] = useState(0);

        const basePrices = {
            bust: 10,
            halfBody: 15,
            fullBody: 20,
        };

        const calculatePrice = () => {
        const basePrice = basePrices[base];
        const additionalCost = 10 * additionalCharacters;
        const total = (basePrice + additionalCost) * multiplier;
        setTotalPrice(total);
  };

  return (
    <main style={{ padding: '10px 20px' }}>
      <Navbar />

      <h2 style={{ textAlign: 'center', margin: '20px 0px' }}>Character Commission Estimate</h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {/* Calculator Section */}
        <div style={{ flex: '1', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label>
              <strong>Base Type:</strong>
              <select
                value={base}
                onChange={(e) => setBase(e.target.value)}
                style={{ marginLeft: '10px' }}
              >
                <option value="bust">Bust</option>
                <option value="halfBody">Half Body</option>
                <option value="fullBody">Full Body</option>
              </select>
            </label>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label>
              <strong>Additional Characters:</strong>
              <input
                type="number"
                value={additionalCharacters}
                onChange={(e) => setAdditionalCharacters(Number(e.target.value))}
                min="0"
                style={{ marginLeft: '10px', width: '50px' }}
              />
            </label>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <strong>Level of Detail:</strong>
            <div>
              <label>
                <input
                  type="radio"
                  value={1.0}
                  checked={multiplier === 1.0}
                  onChange={(e) => setMultiplier(Number(e.target.value))}
                />
                <a style={{margin:'10px'}}>Sketch Only</a>
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value={1.5}
                  checked={multiplier === 1.5}
                  onChange={(e) => setMultiplier(Number(e.target.value))}
                />
                <a style={{margin:'10px'}}>Flat colours</a>
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value={2.0}
                  checked={multiplier === 2.0}
                  onChange={(e) => setMultiplier(Number(e.target.value))}
                />
                <a style={{margin:'10px'}}>Fully rendered</a>
              </label>
            </div>
          </div>

          <button
            onClick={calculatePrice}
            style={{
                padding: '15px 30px',
                background: 'linear-gradient(90deg, #68758f, #98abd1)', 
                color: '#fff',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
                transition: 'transform 0.2s, box-shadow 0.2s', 
                display: 'inline-block', 
            }}
          >
            Calculate Price
          </button>

          <div style={{ marginTop: '20px', fontSize: '1.2em', textAlign: 'center' }}>
            <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
          </div>
          <div>
            <p style={{margin: '20px 0px',}}>For further inquiry, feel free to contact me by email:</p>
                    <a
                href="mailto:malihaprova@gmail.com?subject=Commission"
                style={{
                padding: '10px 20px',
                background: 'linear-gradient(90deg, #68758f, #98abd1)',
                color: '#fff',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                display: 'inline-block',
            }}
            >
            Email
            </a>
        </div>
        </div>

        {/* Example Image Section */}
        <div
          style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src="/images/fullbody.png" // Replace with your image path
            alt="Example Commission"
            width={200}
            height={300}
            style={{
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
      </div>
    </main>
  );
}