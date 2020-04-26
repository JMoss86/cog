import React from 'react';

import Layout from '../components/Layout';

import intro from '../assets/images/intro1.jpg';
const IndexPage = () => (
  <Layout activeLink="home">
    <section className="page-section clearfix">
      <div className="container">
        <div className="intro">
          <img
            className="intro-img1 img-fluid mb-3 mb-lg-0 rounded"
            src={intro}
            alt=""
          />
          <div className="intro-text1 left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              {/*<span className="section-heading-upper"></span>*/}
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
              </a></div>*/}
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
                <span className="section-heading-lower">
                  Sunday Live Stream
                </span>
                <span className="section-heading-upper">
                  Come worship with us, wherever you are!
                </span>
              </h2>
              <p className="mb-0 text-justify"></p>
              <div className="iframe-container">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F113865308643822%2Fvideos%2F3227766800569035%2F&show_text=0&width=560"
                  width="auto"
                  height="auto"
                  scrolling="no"
                  frameborder="0"
                  allowTransparency="true"
                  allowFullScreen="true"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
