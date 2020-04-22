import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout activeLink="contact">
    <section className="page-section about-heading">
      <div className="container">
        <div className="img-fluid rounded about-heading-img mb-3 mb-lg-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6647.788586581568!2d-112.0888933314553!3d33.58209373676824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6db05e337843%3A0xdd48ab4660b212a!2s906%20W%20Peoria%20Ave%2C%20Phoenix%2C%20AZ%2085029!5e0!3m2!1sen!2sus!4v1587552375124!5m2!1sen!2sus"
            width="1200"
            height="450"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>

        <div className="text-center">
          <div className="about-heading-content">
            <div className="row">
              <div className="col-xl-9 col-lg-10 mx-auto">
                <div className="bg-faded rounded p-5">
                  <h2 className="section-heading mb-4">
                    <span className="section-heading-upper">Contact Us</span>
                    <span className="section-heading-lower">
                      Covenant of Grace Christian Fellowship
                    </span>
                  </h2>
                  <p>
                    906 West Peoria Avenue, Phoenix, Arizona 85029, United
                    States
                    <br />
                    <br />
                    (602) 678-0999
                    <br />
                    <a
                      href="mailto:office@covenantofgrace.org"
                      className="text-darker"
                    >
                      office@covenantofgrace.org
                    </a>
                    <br />
                    <a
                      href="mailto:len@covenantofgrace.org"
                      className="text-darker"
                    >
                      len@covenantofgrace.org
                    </a>
                    <br />
                    <a
                      href="mailto:sharon@covenantofgrace.org"
                      className="text-darker"
                    >
                      sharon@covenantofgrace.org
                    </a>
                  </p>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
