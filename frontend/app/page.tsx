'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [status, setStatus] = useState('loading') 
  
 useEffect(() => {
    fetch('http://localhost:4000/health')
      .then((response) => response.text())
      .then((data) => {
        setStatus(data);
      })
      .catch(() => {
        setStatus('error');
      });
  }, []);

  return (
    <>
<div><h1>{status}</h1></div>
    </>
  );
}
