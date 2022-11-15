import React, { Component } from 'react';
import '../css/contactus.css'

class Contact extends Component {
  state = {  } 
  
  render() { 
    return (
      <React.Fragment>
        <section className="contact mt-5 pt-3">
            <div className="row gy-4 " style={{ width: '100%' }}>
                <div className="col-lg-12 mx-5">
                    <div className="row gy-4 mx-5">
                        <div className="col-md-6 ">
                            <div className="info-box">
                                <i className="bi bi-geo-alt"></i>
                                <h3>Address</h3>
                                <p>
                                    Marathalli, Bengaluru.
                                    <br />
                                    Karnataka, 560037
                                    <br />
                                    India
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div
                                className="info-box"
                            >
                                <i
                                    className="bi bi-telephone"
                                ></i>
                                <h3>Call Us</h3>
                                <p>
                                    +91 7004901819
                                    <br />
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="info-box">
                                <i className="bi bi-envelope"></i>
                                <h3>Email Us</h3>
                                <p>
                                    dmapper.application@gmail.com
                                    <br />
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div
                                className="info-box"
                            >
                                <i
                                    className="bi bi-clock"
                                ></i>
                                <h3>Open Hours</h3>
                                <p>
                                    Monday - Friday
                                    <br />
                                    9:00AM - 05:00PM
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="col-lg-6">
          <form
            className="php-email-form"
          >
            <div className="row gy-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  required=""
                />
              </div>

              <div className="col-md-6 ">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  required=""
                />
              </div>

              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  required=""
                />
              </div>

              <div className="col-md-12">
                <textarea
                  className="form-control"
                  name="message"
                  rows="6"
                  placeholder="Message"
                  required=""
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div> */}
            </div>
        </section>

      </React.Fragment>
    );
  }
}
 
export default Contact;