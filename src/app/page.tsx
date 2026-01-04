'use client'

export default function HomePage() {
  return (
    <div className="min-h-screen pt-8 px-0 pb-160">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section grid grid-cols-[1fr_1fr] gap-16 items-center py-16 min-h-[70vh]">
          <div className="hero-content flex flex-col gap-8">
            <div className="hero-badge flex items-center gap-4 opacity-0 animate-fade-in">
              <span className="badge-line w-15 h-0.5 bg-var(--text-primary)"></span>
              <span className="badge-text font-sans text-[1rem] font-medium tracking-[0.15em] uppercase text-[var(--text-secondary)]">Art Gallery</span>
            </div>
            
            <h1 className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s'}}>
              Haries Gallery
              <br />
              <span
                className="title-accent relative inline-block after:content-[''] after:absolute after:bottom-2 after:left-0 after:right-0 after:h-3 after:bg-[var(--accent-yellow)] after:z-[-1] after:opacity-70">
                Creative, Art...
              </span>
            </h1>
            
            <p
              className="hero-description text-[1.15rem] leading-[1.8] text-[var(--text-secondary)] max-w-500px opacity-0 animate-fade-in-up"
              style={{animationDelay: '0.4s'}}>
              Explore the extraordinary world of modern art,
              <br />
              where creativity meets innovation
            </p>
          </div>
          
          <div className="hero-visual opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="visual-grid grid grid-cols-[repeat(2,_1fr)] gap-6 h-[500px]">
              <div className="grid-item large rounded-lg overflow-hidden duration-300 [transition:transform_0.3s_var(--transition-bounce)] hover:-translate-y-2 row-span-2">
                <div className="placeholder-box">
                  <span className="placeholder-text">Feature Artist</span>
                </div>
              </div>
              <div className="grid-item rounded-lg overflow-hidden [transition:transform_0.3s_var(--transition-bounce)] hover:-translate-y-2">
                <div className="placeholder-box accent">
                  <span className="placeholder-text">Collection</span>
                </div>
              </div>
              <div className="grid-item rounded-lg overflow-hidden [transition:transform_0.3s_var(--transition-bounce)] hover:-translate-y-2">
                <div className="placeholder-box dark w-full">
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