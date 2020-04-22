import React from 'react';

import Layout from '../components/Layout';

import intro from '../assets/images/intro1.jpg';
const IndexPage = () => (
  <Layout activeLink="home">
    <section className="page-section clearfix">
      <div className="container">
        <div className="intro">
          <img
            className="intro-img img-fluid mb-3 mb-lg-0 rounded"
            src={intro}
            alt=""
          />
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              {/*              <span className="section-heading-upper"></span>*/}
              <span className="section-heading-lower">In Faith We Gather</span>
            </h2>
            <p className="mb-3 text-justify">
              Covenant of Grace is a congregation of people who love Jesus and
              are committed to His Kingdom purpose for our lives personally and
              corporately. We are a multi-cultural and multi-generational body
              of believers located in North Central Phoenix in an area known
              locally as Sunnyslope, named for the sunny slopes of the Phoenix
              Mountain Preserve right outside our back door.
            </p>
            {/*<div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" href="/#">
                Visit Us Today!
              </a>
</div>*/}
          </div>
        </div>
      </div>
    </section>

    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">Our Mission</span>
                {/*<span className="section-heading-lower">To You</span>*/}
              </h2>
              <p className="mb-0 text-justify">
                For many years we have been working in our community, our city,
                state and also internationally to spread the good news of God’s
                love and plan of salvation through Jesus Christ, His Son. We are
                a Spirit filled, bible based, outwardly focused and worshiping
                community. We also work closely with our sister congregation,
                Pacto de Gracia to serve the growing Hispanic community of our
                city.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
