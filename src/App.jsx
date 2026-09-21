import './index.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Hab Pembelajaran</h1>
        <p>Tingkatan 4 • KSSM</p>
      </header>

      <main className="grid">
        {/* Ekonomi Card */}
        <div className="card ekonomi">
          <div>
            <h2>Ekonomi SPM</h2>
            <p>Bab 1 & Bab 2, Kuiz Interaktif, Nota</p>
          </div>
          <a 
            href="https://amryl65.github.io/Ekonomi-T4-App/" 
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buka App
          </a>
        </div>

        {/* Sejarah Card */}
        <div className="card sejarah">
          <div>
            <h2>Sejarah SPM</h2>
            <p>Bab 1 hingga 10, Video YouTube, Latihan Kuiz</p>
          </div>
          <a 
            href="https://amryl65.github.io/ting-4-sejarah-app/" 
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buka App
          </a>
        </div>

        {/* Akaun Card */}
        <div className="card akaun">
          <div>
            <h2>Prinsip Perakaunan</h2>
            <p>Modul Pembelajaran, Latihan Interaktif, Nota</p>
          </div>
          <a 
            href="https://amryl65.github.io/akaun_form_4/" 
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buka App
          </a>
        </div>

        {/* Sains Card */}
        <div className="card sains">
          <div>
            <h2>Sains SPM</h2>
            <p>Nota Padat, Latihan Kuiz, Video Pembelajaran</p>
          </div>
          <a 
            href="https://amryl65.github.io/ting-4-sains-app/" 
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buka App
          </a>
        </div>

        {/* Coming Soon Card */}
        <div className="card coming-soon">
          <div className="badge">Baru</div>
          <div>
            <h2>Subjek Lain</h2>
            <p>Lebih banyak subjek akan ditambah dari semasa ke semasa.</p>
          </div>
          <button className="btn" disabled>
            Akan Datang
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
