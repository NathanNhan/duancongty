import React, {useState} from "react";
import MainLayout from "../Layout/MainLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const HomePage = () => {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [value, setValue] = useState();
  //show message
  const notify = () => {
    toast("Coming soon");
  };
  return (
    <MainLayout>
      <main className="body">
        <img src={`/asset/Ellipse.png`} alt="" className="image-icon-section" />
        <img src={`/asset/group_603.png`} className="icon_star_1" alt="" />
        <img src={`/asset/group_606.png`} className="icon_start" alt="" />
        <section className="bottom-nav">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12 padding-nav">
                <img src={`/asset/Logo_indentity.png`} alt="" />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12  col-12 padding-nav">
                <div className="button-contain">
                  <button className="btn-1">
                    <img src={`/asset/message.png`} />
                    Message
                  </button>
                  <button className="btn-2">
                    <img src={`/asset/booknow.png`} />
                    Booking
                  </button>
                  <button
                    className="btn-3"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={`/asset/phone_call.png`} />
                    Call Clinic
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li className="custom-flex">
                      <img src={`/asset/phone_icon.png`} alt="" />
                      <a className="dropdown-item" href="#">
                        Call Now
                      </a>
                    </li>
                    <li className="custom-flex">
                      <img src={`/asset/ear_phone.png`} alt="" />
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Request to call me back
                      </a>
                    </li>
                  </ul>
                </div>
                {/* show Popup */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="contain-modal">
                      <div className="wrap">
                        <div className="img-modal">
                          <img src={`/asset/logo_modal.png`} alt="" />
                        </div>
                        <div className="contatent-modal">
                          <p className="content1">
                            Our admin will call you right back! 👍🏻
                          </p>
                          <p className="content2">
                            We will contact through your phone number right
                            away!
                          </p>

                          <div className="sdt">
                            <img src="/asset/hinhco.png" alt="" />
                            <img src="/asset/muiten.png" alt="" />
                            <img src="/asset/line.png" alt="" />
                            <input
                              type="tel"
                              placeholder="xxxx-xxxx-xxxx"
                              className="input-field"
                            />
                          </div>
                        </div>
                        <div className="footer-modal ">
                          <button className="call_me_back">
                            <img src={`/asset/modal_phone_icon.png`} alt="" />
                            Call me Back
                          </button>
                        </div>
                      </div>
                      <img
                        src={`/asset/btn_close.png`}
                        alt=""
                        className="img_close"
                        data-bs-dismiss="modal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-last order-md-first  custom-content">
                <h1 className="heavy">
                  Professional medical equipment and staff for your home
                  recovery.
                </h1>
                <p>
                  Wondering which equipment you should choose? With us you won’t
                  make a mistake.
                </p>
              </div>
              <div className="col-lg-6 col-sm-12 col-md-12 col-12 order-first order-md-last  custom-hero">
                <img src={`/asset/hero.png`} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="three-card">
          <div className="container">
            <div className="row">
              <div className="contain-card">
                <div className=" col-lg-12 col-md-12 col-sm-12 col-12 col-xl-4 col-xxl-4 mb-5">
                  <div className="card bg-white border-0 h-100 custom-padding">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <div className="feature bg-gradient text-white rounded-3 mb-4 mt-4">
                        <img
                          src={`/asset/Icon.png`}
                          alt=""
                          className="img-icon"
                        />
                      </div>
                      <div className="wrap-content-middle">
                        <h2 className="fs-4 fw-bold">Tele-Consultation</h2>
                        <p className="mb-4 mt-2">
                          Join a teleconsult with our medically trained staff to
                          help you pick the best equipment for you & your loved
                          ones.
                        </p>
                      </div>
                      <a href="https://eunoiacare.co.id/">
                        <button className="button-cart m-auto text-white">
                          <img src={`/asset/NEW.png`} alt="" />
                          <p>Book an appointment</p>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="img-arrow">
                  <img src={`/asset/Fill.png`} alt="" width={20} height={40} />
                </div>
                <div className=" col-lg-12 col-md-12 col-sm-12 col-12 col-xl-4 col-xxl-4 mb-5">
                  <div className="card bg-white border-0 h-100 custom-padding">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <div className="feature bg-gradient text-white rounded-3 mb-4 mt-4">
                        <img
                          src={`/asset/icon_rent.png`}
                          alt=""
                          className="img-icon"
                        />
                      </div>
                      <div className="wrap-content-middle">
                        <h2 className="fs-4 fw-bold">
                          Medical Equipment Rental
                        </h2>
                        <p className="mb-4 mt-2">
                          Rich selection of medical equipment to rent.
                        </p>
                      </div>

                      <a href="https://eunoiacare.co.id/">
                        <button className="button-cart m-auto text-white">
                          <img src={`/asset/Icon_search.png`} alt="" />
                          <p>Search Categories</p>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="img-arrow">
                  <img src={`/asset/Fill.png`} alt="" />
                </div>
                <div className=" col-lg-12 col-md-12 col-sm-12 col-12 col-xl-4 col-xxl-4 mb-5">
                  <div className="card bg-white border-0 h-100 custom-padding">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <div className="feature bg-gradient text-white rounded-3 mb-4 mt-4">
                        <img
                          src={`/asset/icon-heart.png`}
                          alt=""
                          className="img-icon"
                        />
                      </div>
                      <div className="wrap-content-middle">
                        <h2 className="fs-4 fw-bold">Homecare Nurses</h2>
                        <p className="mb-4 mt-2">
                          If you need professional help visit our website to
                          hire well trained and caring nurses for any period of
                          time.
                        </p>
                      </div>

                      <button
                        className="button-cart m-auto text-white"
                        onClick={notify}
                      >
                        <img src={`/asset/icon_subtract_2.png`} alt="" />
                        <p>Find a Nurse</p>
                      </button>
                      <ToastContainer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default HomePage;
