const Projects = () => {
  const publication = {
    title:
      "An SBERT and DNN-Enhanced Boosted Rules Classifier Framework for Accurate Multi-Class Sentiment Analysis of Product Reviews",
    authors:
      "E. Sravanthi, Shaik Zaheer, Nemalikuntla Vennela, Polavena Ajay",
    journal:
      "International Journal of Engineering Research and Science & Technology (IJERST)",
    volume: "Vol. 22, No. 2(1), 2026, pp. 1740–1752",
    publisher: "IJERST Publications",
    link: "https://ijerst.org/index.php/ijerst",
  };

  const projects = [
    {
      title: "Remote Patient Monitoring",
      description:
        "Remote Parkinson's detection using voice data and Machine Learning via Internet of Things.",
      github: "https://github.com/zaheershaik01/remote-patient-monitoring",
    },
    {
      title: "Medical Imaging Diagnosis",
      description:
        "A comparative analysis of Machine Learning classifiers for diagnosing diseases from medical images.",
      github: "https://github.com/zaheershaik01/medical-imaging-diagnosis",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #1a1040 0%, #2d1f6e 30%, #3b2a8a 55%, #1e1b6b 75%, #0f0c2e 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 1.5rem",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

        .proj-page * {
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }

        .proj-page-title {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 700;
          color: #e8e0ff;
          text-align: center;
          margin: 0 0 1.8rem 0;
          letter-spacing: 0.01em;
        }

        .proj-section-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #a89fd4;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-align: center;
          margin: 0 0 0.9rem 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
        }
        .proj-section-label::before,
        .proj-section-label::after {
          content: '';
          display: inline-block;
          width: 35px;
          height: 1px;
          background: rgba(168, 159, 212, 0.45);
        }

        /* ── Publication card — black background ── */
        .pub-card {
          width: 100%;
          background: rgba(0, 0, 0, 0.75);
          border: 1px solid rgba(140, 100, 220, 0.3);
          border-radius: 16px;
          padding: 1.5rem 1.8rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          transition: transform 0.25s ease, background 0.25s ease;
        }
        .pub-card:hover {
          transform: translateY(-3px);
          background: rgba(10, 0, 20, 0.85);
        }

        .pub-body { flex: 1; }

        /* Blue heading for publication title */
        .pub-title {
          font-size: clamp(0.85rem, 1.8vw, 1rem);
          font-weight: 700;
          color: #60a5fa;
          line-height: 1.5;
          margin: 0 0 0.8rem 0;
          text-align: left;
        }

        /* White body text */
        .pub-meta-row {
          font-size: clamp(0.72rem, 1.4vw, 0.82rem);
          color: #ffffff;
          line-height: 1.8;
          margin: 0;
          text-align: left;
        }
        .pub-meta-row b {
          color: #ffffff;
          font-weight: 600;
        }

        /* ── Project cards grid ── */
        .proj-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.2rem;
          width: 100%;
        }

        /* Black card background */
        .proj-card {
          background: rgba(0, 0, 0, 0.75);
          border: 1px solid rgba(140, 100, 220, 0.3);
          border-radius: 16px;
          padding: 1.6rem 1.4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.65rem;
          transition: transform 0.25s ease, background 0.25s ease;
        }
        .proj-card:hover {
          transform: translateY(-4px);
          background: rgba(10, 0, 20, 0.85);
        }

        /* Blue heading for project titles */
        .proj-card-title {
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          font-weight: 700;
          color: #60a5fa;
          margin: 0;
        }

        /* White description text */
        .proj-card-desc {
          font-size: clamp(0.75rem, 1.5vw, 0.875rem);
          color: #ffffff;
          line-height: 1.6;
          margin: 0;
          flex: 1;
        }

        /* ── Blue pill button with white text — matches cert page ── */
        .proj-btn {
          display: inline-block;
          margin-top: 0.4rem;
          padding: 0.5rem 1.6rem;
          border-radius: 999px;
          border: none;
          background: #3b82f6;
          color: #ffffff;
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
          cursor: pointer;
          white-space: nowrap;
        }
        .proj-btn:hover {
          background: #2563eb;
          transform: scale(1.05);
        }

        /* ── Mobile ── */
        @media (max-width: 600px) {
          .pub-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 1.2rem;
          }
          .proj-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div
        className="proj-page"
        style={{
          width: "100%",
          maxWidth: "900px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* ── Page Title ── */}
        <h2 className="proj-page-title">Publications &amp; Projects</h2>

        {/* ── Research Publication ── */}
        <div className="proj-section-label">Research Publication</div>

        <div className="pub-card">
          <div className="pub-body">
            <p className="pub-title">{publication.title}</p>
            <p className="pub-meta-row">
              <b>Authors:</b> {publication.authors}<br />
              <b>Journal:</b> {publication.journal}<br />
              <b>Volume:</b> {publication.volume}<br />
              <b>Publisher:</b> {publication.publisher}
            </p>
          </div>
          <a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-btn"
            style={{ flexShrink: 0 }}
          >
            View
          </a>
        </div>

        {/* ── Projects ── */}
        <div className="proj-section-label" style={{ marginTop: "0.1rem" }}>
          Projects
        </div>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <div key={i} className="proj-card">
              <h3 className="proj-card-title">{p.title}</h3>
              <p className="proj-card-desc">{p.description}</p>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-btn"
              >
                View
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
