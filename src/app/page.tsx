'use client'

export default function HomePage() {
  return (
    <div className="min-h-screen pt-8 px-0 pb-160">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section grid grid-cols-[1fr_1fr] gap-16 items-center py-16 min-h-[70vh]">
          <div className="hero-content flex flex-col gap-8">
            <div className="hero-badge flex items-center gap-4 opacity-0 animate-fade-in">
              <span className="badge-line"></span>
              <span className="badge-text">Art Gallery</span>
            </div>
            
            <h1 className="hero-title animate-fade-in-up bg-blue" style={{ animationDelay: '0.2s'}}>
              Haries Gallery
              <br />
              <span className="title-accent">Creative, Art...</span>
            </h1>
            
            <p className="hero-description animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Explore the extraordinary world of modern art,
              <br />
              where creativity meets innovation
            </p>
          </div>
          
          <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="visual-grid">
              <div className="grid-item large">
                <div className="placeholder-box">
                  <span className="placeholder-text">Feature Artist</span>
                </div>
              </div>
              <div className="grid-item">
                <div className="placeholder-box accent">
                  <span className="placeholder-text">Collection</span>
                </div>
              </div>
              <div className="grid-item">
                <div className="placeholder-box dark">
                  <span className="placeholder-text">Exhibition</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Info Section */}
        <section className="info-section">
          <div className="info-grid">
            <div className="info-card animate-slide-in-left">
              <h3 className="info-number">180°</h3>
              <p className="info-label">Degrees of Art</p>
              <p className="info-description">
                Comprehensive exploration of artistic movements
              </p>
            </div>
            
            <div className="info-card animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <h3 className="info-title">Fauvism</h3>
              <p className="info-label">Movement Report</p>
              <p className="info-description">
                Bold colors and expressive brushwork
              </p>
            </div>
            
            <div className="info-card animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
              <h3 className="info-title">Nice</h3>
              <p className="info-label">Location</p>
              <p className="info-description">
                Where masterpieces were born
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <style jsx>{`

        .hero-badge {
          display: flex;
          align-items: center;
          gap: 1rem;
          opacity: 0;
        }

        .badge-line {
          width: 60px;
          height: 2px;
          background-color: var(--text-primary);
        }

        .badge-text {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-secondary);
        }

        .hero-title {
          opacity: 0;
          margin: 0;
        }

        .title-accent {
          position: relative;
          display: inline-block;
        }

        .title-accent::after {
          content: '';
          position: absolute;
          bottom: 0.5rem;
          left: 0;
          right: 0;
          height: 0.75rem;
          background-color: var(--accent-yellow);
          z-index: -1;
          opacity: 0.7;
        }

        .hero-description {
          font-size: 1.15rem;
          line-height: 1.8;
          color: var(--text-secondary);
          max-width: 500px;
          opacity: 0;
        }

        /* Visual Grid */
        .hero-visual {
          opacity: 0;
        }

        .visual-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          height: 500px;
        }

        .grid-item {
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s var(--transition-bounce);
        }

        .grid-item:hover {
          transform: translateY(-8px);
        }

        .grid-item.large {
          grid-row: 1 / 3;
        }

        .placeholder-box {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #e5d9c8 0%, #f2ebe1 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .placeholder-box:hover {
          border-color: rgba(0, 0, 0, 0.15);
        }

        .placeholder-box.accent {
          background: linear-gradient(135deg, var(--accent-yellow) 0%, #f4d458 100%);
        }

        .placeholder-box.dark {
          background: linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 100%);
        }

        .placeholder-text {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          opacity: 0.4;
        }

        .placeholder-box.dark .placeholder-text {
          color: white;
        }

        /* Info Section */
        .info-section {
          padding: 6rem 0 4rem;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .info-card {
          padding: 2.5rem;
          background: white;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          opacity: 0;
        }

        .info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
          border-color: rgba(0, 0, 0, 0.12);
        }

        .info-number {
          font-family: var(--font-serif);
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .info-title {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .info-label {
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-tertiary);
          margin-bottom: 1rem;
        }

        .info-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-section {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .visual-grid {
            height: 400px;
          }

          .info-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 2rem 0;
          }

          .visual-grid {
            height: 350px;
            gap: 1rem;
          }

          .info-card {
            padding: 2rem;
          }

          .info-number {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
}