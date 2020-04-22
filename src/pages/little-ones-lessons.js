import React from 'react';

import Layout from '../components/Layout';

import about1 from '../assets/images/about-01.jpg';
const IndexPage = () => (
  <Layout activeLink="little-ones-lessons">
    <section className="page-section media-heading">
      <div className="container">
        <div className="media-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading media-heading-title mb-4">
                  <span className="section-heading-lower">
                    Little Ones Lessons
                  </span>
                  <span className="section-heading-upper">
                    YouTube playlist
                  </span>
                </h2>
                <p className="media-text">
                  The latest Little Ones Lessons by Early Childhood Pastor Lily
                  Blair.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="media-heading-img">
          <iframe
            className="intro-img1  mb-3 mb-lg-0 rounded"
            width="560"
            height="450"
            src="https://www.youtube.com/embed/videoseries?list=PLNaNnSfcM9SxRDLvBecnUC4H4bv8HZWMH"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
