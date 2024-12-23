import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="site-footer footer-bar-active footer-bar-align-right">
        <footer className="site-info" aria-label="Site">
          <div className="inside-site-info grid-container grid-parent text-center md:text-right">
            {/* Copyright Section */}
            <div className="copyright-bar text-center md:text-right" style={{ color: '#e5e7eb' }}>
              © CoffeeAdnan {currentYear}
            </div>

            {/* Block-12 */}
            <aside
              id="block-12"
              className="widget inner-padding widget_block mt-4 md:mt-0 flex justify-center md:justify-end"
            >
              <div className="flex items-center space-x-4">
                {/* <a
                  href="https://www.facebook.com/groups/606571133119922"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fa fa-facebook" style={{ color: '#e5e7eb' }} />
                </a>
                <a
                  href="https://www.instagram.com/homegroundsco/?igshid=MzRlODBiNWFlZA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fa fa-instagram" style={{ color: '#e5e7eb' }} />
                </a> */}
                <a href="https://wa.me/9613860682" aria-label="Email">
                  <i className="fa fa-whatsapp" style={{ color: '#e5e7eb',fontSize: "22px"}} />
                </a>
              </div>
            </aside>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
