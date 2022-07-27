import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MainLayout = ({children}) => {
  const notify = () => toast("Coming soon");
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark navigation">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item first-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="#"
                  >
                    Telehealth
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    href="https://eunoiacare.co.id/"
                  >
                    Medical Equipments Rental
                  </a>
                </li>
                <li className="nav-item" onClick={notify}>
                  <a className="nav-link text-white" href="#" tabIndex={-1}>
                    Home-care Nurses
                  </a>
                </li>
              </ul>
              <div className="d-flex">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#" tabIndex={-1}>
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <img
                      src={`/asset/language.png`}
                      alt=""
                      className="image-size-language"
                    />
                    <a
                      className="nav-link text-white dropdown-toggle"
                      href="#"
                      tabIndex={-1}
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      English
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item">English</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Bahasa</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {children}
      {/* Footer */}
      <footer className="text-center text-lg-start text-muted pt-1 pb-4 custom-footer mt-2 h-auto">
        <section className="">
          <div className="container text-center text-md-start mt-5 text-white">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-lg-6 col-12 col-sm-12 col-md-12  mb-4 mb-md-0 mx-auto mb-4 text-white">
                {/* Content */}
                <img src={`/asset/logo_footer.png`} alt="" className="mb-4" />
                <p className="text-white custom-width">
                  Donec ipsum, elit id sed. Elit natoque lectus odio aenean
                  egestas integer gravida sagittis hendrerit. Ut hendrerit est
                  euismod turpis euismod
                </p>
              </div>

              {/* Grid column */}
              {/* Grid column */}
              <div className="col-lg-3 col-12 col-sm-12 col-md-12  mx-auto mb-4">
                {/* Links */}
                <h4 className=" mb-4 text-white">Useful Links</h4>
                <p className="text-white">
                  <a href="#!" className="text-reset text-white">
                    Medical Equipment Rental
                  </a>
                </p>
                <p className="text-white">
                  <a href="#!" className="text-reset text-white">
                    Home-care Nurse
                  </a>
                </p>
                <p className="text-white">
                  <a href="#!" className="text-reset text-white">
                    Terms & Conditions
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-lg-3 col-12 col-sm-12 col-md-12  mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h4 className=" mb-4 text-white">Contact</h4>
                <p className="text-white color-gray">
                  <img
                    src={`/asset/phonecall_footer.png`}
                    className="icon-footer"
                  />
                  Phone <br /> (021) 29517888
                </p>
                <p className="text-white color-gray">
                  <img src={`/asset/mail_footer.png`} className="icon-footer" />
                  Email <br />
                  Johny@Semestamedika.com
                </p>
                <p className="text-white color-gray">
                  <img
                    src={`/asset/location_footer.png`}
                    className="icon-footer"
                  />
                  Address
                  <br /> JI. Kamal Raya Outer Ring Road Mutiara Taman Palem Blok
                  A2 No 28 Cengkareng – Jakarta Barat 11730
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
      </footer>
      {/* Footer */}
    </div>
  );
}

export default MainLayout