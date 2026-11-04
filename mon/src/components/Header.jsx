import React from 'react';

export default function Header({ title, subtitle }) {

  // Recuperer la date actuelle
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="header">
      <h1>{title}</h1>

      <p>{subtitle}</p>

      <small
        style={{
          color: '#94a3b8',
          display: 'block',
          marginTop: '6px'
        }}
      >
        Session Date: {currentDate}
      </small>
    </header>
  );
}
