'use client'

export default function GalleryPage() {
  return (
    <div className="gallery-page">
      <div className="container">
        {/* Page Header */}
        <section className="page-header">
          <div className="header-content animate-fade-in-up">
            <span className="header-tag">Gallery</span>
            <h1 className="page-title">Mondrian Collection</h1>
            <p className="page-description">
              Explore the geometric abstraction and primary colors of Piet Mondrian
            </p>
          </div>
        </section>
        
        {/* Coming Soon Section */}
        <section className="coming-soon">
          <div className="mondrian-preview">
            <div className="mondrian-grid">
              <div className="mondrian-cell red"></div>
              <div className="mondrian-cell white large"></div>
              <div className="mondrian-cell blue"></div>
              <div className="mondrian-cell yellow"></div>
              <div className="mondrian-cell white"></div>
              <div className="mondrian-cell white tall"></div>
              <div className="mondrian-cell blue small"></div>
            </div>
            <div className="preview-text">
              <h2>Mondrian Style</h2>
              <p>Gallery page in development</p>
            </div>
          </div>
        </section>
      </div>
      
      <style jsx>{`
        .gallery-page {
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

        /* Coming Soon Section */
        .coming-soon {
          padding: 4rem 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .mondrian-preview {
          text-align: center;
          max-width: 700px;
        }

        /* Mondrian Grid Preview */
        .mondrian-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(3, 120px);
          gap: 8px;
          background: #1a1a1a;
          padding: 8px;
          border-radius: 4px;
          margin-bottom: 3rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          animation: fadeInUp 0.8s var(--transition-bounce) 0.3s forwards;
          opacity: 0;
        }

        .mondrian-cell {
          background: white;
          transition: all 0.3s ease;
        }

        .mondrian-cell:hover {
          transform: scale(0.95);
        }

        .mondrian-cell.red {
          background: #e74c3c;
          grid-column: 1 / 2;
          grid-row: 1 / 2;
        }

        .mondrian-cell.blue {
          background: #3498db;
          grid-column: 3 / 4;
          grid-row: 1 / 2;
        }

        .mondrian-cell.yellow {
          background: #f4c430;
          grid-column: 1 / 2;
          grid-row: 2 / 3;
        }

        .mondrian-cell.large {
          grid-column: 2 / 4;
          grid-row: 1 / 3;
        }

        .mondrian-cell.tall {
          grid-column: 4 / 5;
          grid-row: 1 / 4;
        }

        .mondrian-cell.small {
          background: #2c3e50;
          grid-column: 2 / 3;
          grid-row: 3 / 4;
        }

        .preview-text {
          animation: fadeIn 0.6s ease 0.6s forwards;
          opacity: 0;
        }

        .preview-text h2 {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .preview-text p {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .page-header {
            padding: 3rem 0 2rem;
            margin-bottom: 3rem;
          }

          .mondrian-grid {
            grid-template-rows: repeat(3, 80px);
            gap: 6px;
            padding: 6px;
          }

          .preview-text h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}