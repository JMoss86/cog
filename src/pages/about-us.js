import React from 'react';

import Layout from '../components/Layout';

import about1 from '../assets/images/about-01.jpg';
const IndexPage = () => (
  <Layout activeLink="about-us">
    <section className="page-section about-heading">
      <div className="container">
        <img
          className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
          src={about1}
          alt=""
        />
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">
                    Strong Faith, Strong Roots
                  </span>
                  <span className="section-heading-lower">
                    About Our Church
                  </span>
                </h2>
                <p>
                  For many years we have been working in our community, our
                  city, state and also internationally to spread the good news
                  of God’s love and plan of salvation through Jesus Christ, His
                  Son. We are a Spirit filled, bible based, outwardly focused
                  and worshiping community. We also work closely with our sister
                  congregation, Pacto de Gracia to serve the growing Hispanic
                  community of our city.
                  <br />
                  <br />
                  Covenant of Grace is a unique church with a fascinating
                  history and an exciting future. We have been a stable and
                  transforming influence in our community and state for over
                  thirty years and plan to be around a long time. If you are
                  looking for a church that will encourage and build you up and
                  also challenge you to give yourself to something bigger than
                  yourself we might just be the place for you and your family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
