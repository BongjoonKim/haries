'use client'

export default function LaboratoryPage() {
  return (
    <div className="laboratory-page">
      <div className="container">
        {/* Page Header */}
        <section className="page-header">
          <div className="header-content animate-fade-in-up">
            <span className="header-tag">Laboratory</span>
            <h1 className="page-title">Creative Lab</h1>
            <p className="page-description">
              A space for artistic experimentation and innovation
            </p>
          </div>
        </section>
        
        {/* Lab Grid */}
        <section className="lab-grid">
          <div className="lab-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="card-icon">🎨</div>
            <h3 className="card-title">Color Theory</h3>
            <p className="card-description">
              Explore the relationships between colors and their emotional impact
            </p>
          </div>
          
          <div className="lab-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="card-icon">🖼️</div>
            <h3 className="card-title">Composition</h3>
            <p className="card-description">
              Study the principles of visual arrangement and balance
            </p>
          </div>
          
          <div className="lab-card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="card-icon">✨</div>
            <h3 className="card-title">Technique</h3>
            <p className="card-description">
              Discover various artistic methods and their applications
            </p>
          </div>
          
          <div className="lab-card animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="card-icon">🔬</div>
            <h3 className="card-title">Analysis</h3>
            <p className="card-description">
              Deep dive into artistic movements and their historical context
            </p>
          </div>
        </section>
      </div>
      
      <style jsx>{`
        .laboratory-page {
          min-height: 100vh;
          padding: 2rem 0 4rem;
        }

        /* Page Header */
        .page-header {
          padding: 4rem 0 3rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          margin-bottom: 4rem;
        }

        .header-content {
          max-width: 800px;
          opacity: 0;
        }

        .header-tag {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-tertiary);
          margin-bottom: 1rem;
          padding: 0.5rem 1.25rem;
          background: rgba(0, 0, 0, 0.04);
          border-radius: 20px;
        }

        .page-title {
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .page-description {
          font-size: 1.2rem;
          line-height: 1.8;
          color: var(--text-secondary);
          max-width: 600px;
        }

        /* Lab Grid */
        .lab-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 2rem 0;
        }

        .lab-card {
          padding: 3rem 2.5rem;
          background: white;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          opacity: 0;
        }

        .lab-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.1);
          border-color: var(--accent-yellow);
        }

        .card-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          line-height: 1;
        }

        .card-title {
          font-family: var(--font-serif);
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .card-description {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .page-header {
            padding: 3rem 0 2rem;
            margin-bottom: 3rem;
          }

          .lab-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .lab-card {
            padding: 2.5rem 2rem;
          }
        }
      `}</style>
    </div>
  );
}