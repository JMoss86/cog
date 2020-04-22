import React from 'react';

export default function Footer() {
  return (
    <footer className="footer text-faded text-center py-5">
      <div className="container">
        <p className="m-0 small">
          Copyright &copy; Covenant of Grace Christian Fellowship 2020
        </p>
        <p>
          <a
            href="https:www.facebook.com/Covenant-of-Grace-Christian-Fellowship-113865308643822/"
            target="_blank"
            className="text-faded"
          >
            <i class="fab fa-facebook foot-space"></i>
          </a>{' '}
          <a
            href="https://www.youtube.com/channel/UC_yBwRImZgQLXDxtpqHZsrw/"
            target="_blank"
            className="text-faded"
          >
            {' '}
            <i class="fab fa-youtube foot-space"></i>
          </a>
        </p>
      </div>
    </footer>
  );
}
