'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  const menuItems = [
    { name: 'Gallery', path: '/gallery' },
    { name: 'Laboratory', path: '/laboratory' },
  ];
  
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link href="/" className="logo">
          <span className="logo-text">Haries</span>
          <span className="logo-accent">Gallery</span>
        </Link>
        
        {/* Navigation */}
        <nav className="nav">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            const isHovered = hoveredItem === item.name;
            
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="nav-text">{item.name}</span>
                <span className={`nav-underline ${isActive || isHovered ? 'visible' : ''}`} />
              </Link>
            );
          })}
        </nav>
      </div>
      
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: linear-gradient(to bottom, rgba(242, 235, 225, 0.98), rgba(242, 235, 225, 0.95));
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Logo Styles */
        .logo {
          display: flex;
          gap: 0.5rem;
          align-items: baseline;
          text-decoration: none;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .logo:hover {
          transform: translateY(-2px);
        }

        .logo-text {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #1a1a1a;
          letter-spacing: -0.02em;
        }

        .logo-accent {
          font-family: 'DM Sans', sans-serif;
          font-size: 1.75rem;
          font-weight: 300;
          color: #1a1a1a;
          letter-spacing: 0.05em;
        }

        /* Navigation Styles */
        .nav {
          display: flex;
          gap: 3rem;
          align-items: center;
        }

        .nav-item {
          position: relative;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          color: #4a4a4a;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: color 0.3s ease;
          padding: 0.5rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }

        .nav-item:hover {
          color: #1a1a1a;
        }

        .nav-item.active {
          color: #1a1a1a;
        }

        .nav-text {
          position: relative;
          z-index: 1;
        }

        .nav-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #f4c430;
          transform: scaleX(0);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .nav-underline.visible {
          transform: scaleX(1);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .header-container {
            padding: 1.25rem 1.5rem;
          }

          .logo-text,
          .logo-accent {
            font-size: 1.5rem;
          }

          .nav {
            gap: 1.5rem;
          }

          .nav-item {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </header>
  );
}