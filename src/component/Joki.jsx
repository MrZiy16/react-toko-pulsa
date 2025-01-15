import { Link } from 'react-router-dom';

function Joki() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Our Development Services</h1>
      <p className="text-center text-muted mb-4">
        Offering top-notch development solutions to bring your ideas to life. Explore our skills below!
      </p>

      <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
        <div className="col">
          <div className="card border-5 shadow-sm" style={{ maxWidth: '90%' }}>
            <div className="card-body text-center p-4">
              <div
                className="rounded-circle bg-primary bg-opacity-10 mx-auto mb-4"
                style={{
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <i className="bi bi-code-slash fs-2 text-primary"></i>
              </div>
              <h2 className="card-title mb-3">Web Development</h2>
              <p className="text-muted">
                Expertise in building modern and scalable web applications using the latest technologies.
              </p>
              <ul className="list-unstyled text-start mb-4">
                <li className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <span>PHP</span>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <span>JavaScript</span>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <span>CodeIgniter 4</span>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <span>Laravel</span>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <span>HTML & CSS</span>
                </li> <br />

              <h6>💵 Price: 40k-200k</h6>
              </ul>
              <Link
                to="/products/task"
                className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
              >
                <i className="bi bi-whatsapp"></i>
                Order Via WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Joki;
