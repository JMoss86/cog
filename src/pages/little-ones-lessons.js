import React from 'react';

import Layout from '../components/Layout';
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
                <p className="media-text1">
                  The latest Little Ones Lessons by Early Childhood Pastor Lily
                  Blair.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="media-heading-img iframe-container">
          <iframe
            className="intro-img1  mb-3 mb-lg-0 rounded"
            src="https://www.youtube.com/embed/videoseries?list=PLNaNnSfcM9SxRDLvBecnUC4H4bv8HZWMH"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
          ></iframe>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
