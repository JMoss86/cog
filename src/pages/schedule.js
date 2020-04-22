import React from 'react';

import Layout from '../components/Layout';

import about from '../assets/images/about-01.jpg';

const IndexPage = () => (
  <Layout activeLink="schedule">
    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-5">
                <span className="section-heading-upper">
                  Unfortunately, due to COVID-19
                </span>
                <span className="section-heading-lower">
                  All services and events on hiatus
                </span>
              </h2>
              <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                <li className="list-unstyled-item list-hours-item d-flex">
                  Sunday
                  <span className="ml-auto">Closed</span>
                </li>
                {/*<li className="list-unstyled-item list-hours-item d-flex">
                  Monday
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Tuesday
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Wednesday
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Thursday
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Friday
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Saturday
                  <span className="ml-auto">9:00 AM to 5:00 PM</span>
</li>*/}
              </ul>
              <p className="address mb-5">
                <em>
                  <strong>906 West Peoria Avenue</strong>
                  <br />
                  Phoenix, Arizona 85029
                </em>
              </p>
              <p className="mb-0">
                {/*<small>
                  <em>Call Anytime</em>
                </small>
                <br />*/}
                (602) 678-0999
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
