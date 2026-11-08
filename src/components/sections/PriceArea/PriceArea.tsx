export function PriceArea() {
  return (
    <section className="st-price-area pt-120 pb-90" data-bg-color="#101216">
      <div className="container">
        <div className="st-price-top-wrap mb-80">
          <div className="row">
            <div className="col-xl-2">
              <div className="oit-section-subtitle-box text-center text-lg-start">
                <span className="oit-section-subtitle">Plan</span>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="offset-xl-1 col-xl-8">
              <div className="oit-section-title-box pl-70 text-center text-lg-start">
                <h3 className="oit-section-title oit-title-revel">Flexible Pricing</h3>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="st-price-tab-btn mt-50 d-flex justify-content-center justify-content-lg-start justify-content-xl-end">
                <div className="oit-price-head-btn">
                  <nav>
                    <div className="nav nav-tab" id="price-nav-tab" role="tablist">
                      <button
                        className="nav-links active"
                        id="price-personal-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#price-personal"
                        type="button"
                        role="tab"
                        aria-controls="price-personal"
                        aria-selected="true"
                      >
                        Personal
                      </button>
                      <button
                        className="nav-links"
                        id="price-business-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#price-business"
                        type="button"
                        role="tab"
                        aria-controls="price-business"
                        aria-selected="false"
                      >
                        Business
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-content" id="price-tab-content">
          <div
            className="tab-pane fade show active"
            id="price-personal"
            role="tabpanel"
            aria-labelledby="price-personal-tab"
            tabIndex={0}
          >
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <div className="st-price-item mb-30">
                  <div className="st-price-head">
                    <div className="st-price-badge-wrap d-flex justify-content-between">
                      <span className="st-price-badge">Basic</span>
                      <i className="st-price-ratting">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M8 0l2.1 5.1 5.5.4-4.2 3.6 1.3 5.3L8 11.5l-4.7 2.9 1.3-5.3L.4 5.5l5.5-.4L8 0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </i>
                    </div>
                    <h4 className="st-price-value">
                      $2000<span>/ month</span>
                    </h4>
                    <p>
                      We are a creative web agency specializing in innovative design <br />
                      and cutting-edge development.
                    </p>
                  </div>
                  <div className="st-price-body">
                    <span className="st-price-list-label">What&apos;s included:</span>
                    <div className="st-price-list">
                      <ul>
                        <li>Custom website design</li>
                        <li>Basic SEO optimization</li>
                        <li>Responsive &amp; mobile-friendly layouts</li>
                        <li>Analytics &amp; reporting</li>
                        <li>2 Revisions per request</li>
                      </ul>
                    </div>
                    <div className="st-price-btn">
                      <a
                        href="#"
                        className="oit-btn-border d-inline-flex justify-content-center align-items-center w-100"
                      >
                        <span>
                          <span className="text-1">Start Your Retainer</span>
                          <span className="text-2">Start Your Retainer</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="st-price-item active mb-30">
                  <div className="st-price-head">
                    <div className="st-price-badge-wrap d-flex justify-content-between">
                      <span className="st-price-badge">Standard</span>
                      <i className="st-price-ratting">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M8 0l2.1 5.1 5.5.4-4.2 3.6 1.3 5.3L8 11.5l-4.7 2.9 1.3-5.3L.4 5.5l5.5-.4L8 0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </i>
                    </div>
                    <h4 className="st-price-value">
                      $2900<span>/ month</span>
                    </h4>
                    <p>
                      We are a creative web agency specializing in innovative design <br />
                      and cutting-edge development.
                    </p>
                  </div>
                  <div className="st-price-body">
                    <span className="st-price-list-label">What&apos;s included:</span>
                    <div className="st-price-list">
                      <ul>
                        <li>Custom website design</li>
                        <li>Basic SEO optimization</li>
                        <li>Responsive &amp; mobile-friendly layouts</li>
                        <li>Analytics &amp; reporting</li>
                        <li>2 Revisions per request</li>
                      </ul>
                    </div>
                    <div className="st-price-btn">
                      <a
                        href="#"
                        className="oit-btn-border d-inline-flex justify-content-center align-items-center w-100"
                      >
                        <span>
                          <span className="text-1">Start Your Retainer</span>
                          <span className="text-2">Start Your Retainer</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="st-price-item mb-30">
                  <div className="st-price-head">
                    <div className="st-price-badge-wrap d-flex justify-content-between">
                      <span className="st-price-badge">Premium</span>
                      <i className="st-price-ratting">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M8 0l2.1 5.1 5.5.4-4.2 3.6 1.3 5.3L8 11.5l-4.7 2.9 1.3-5.3L.4 5.5l5.5-.4L8 0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </i>
                    </div>
                    <h4 className="st-price-value">
                      $5000<span>/ month</span>
                    </h4>
                    <p>
                      We are a creative web agency specializing in innovative design <br />
                      and cutting-edge development.
                    </p>
                  </div>
                  <div className="st-price-body">
                    <span className="st-price-list-label">What&apos;s included:</span>
                    <div className="st-price-list">
                      <ul>
                        <li>Custom website design</li>
                        <li>Basic SEO optimization</li>
                        <li>Responsive &amp; mobile-friendly layouts</li>
                        <li>Analytics &amp; reporting</li>
                        <li>2 Revisions per request</li>
                      </ul>
                    </div>
                    <div className="st-price-btn">
                      <a
                        href="#"
                        className="oit-btn-border d-inline-flex justify-content-center align-items-center w-100"
                      >
                        <span>
                          <span className="text-1">Start Your Retainer</span>
                          <span className="text-2">Start Your Retainer</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="price-business"
            role="tabpanel"
            aria-labelledby="price-business-tab"
            tabIndex={0}
          >
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <div className="st-price-item mb-30">
                  <div className="st-price-head">
                    <div className="st-price-badge-wrap d-flex justify-content-between">
                      <span className="st-price-badge">Basic</span>
                      <i className="st-price-ratting">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M8 0l2.1 5.1 5.5.4-4.2 3.6 1.3 5.3L8 11.5l-4.7 2.9 1.3-5.3L.4 5.5l5.5-.4L8 0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </i>
                    </div>
                    <h4 className="st-price-value">
                      $2000<span>/ month</span>
                    </h4>
                    <p>
                      We are a creative web agency specializing in innovative design <br />
                      and cutting-edge development.
                    </p>
                  </div>
                  <div className="st-price-body">
                    <span className="st-price-list-label">What&apos;s included:</span>
                    <div className="st-price-list">
                      <ul>
                        <li>Custom website design</li>
                        <li>Basic SEO optimization</li>
                        <li>Responsive &amp; mobile-friendly layouts</li>
                        <li>Analytics &amp; reporting</li>
                        <li>2 Revisions per request</li>
                      </ul>
                    </div>
                    <div className="st-price-btn">
                      <a
                        href="#"
                        className="oit-btn-border d-inline-flex justify-content-center align-items-center w-100"
                      >
                        <span>
                          <span className="text-1">Start Your Retainer</span>
                          <span className="text-2">Start Your Retainer</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="st-price-item active mb-30">
                  <div className="st-price-head">
                    <div className="st-price-badge-wrap d-flex justify-content-between">
                      <span className="st-price-badge">Standard</span>
                      <i className="st-price-ratting">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M8 0l2.1 5.1 5.5.4-4.2 3.6 1.3 5.3L8 11.5l-4.7 2.9 1.3-5.3L.4 5.5l5.5-.4L8 0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </i>
                    </div>
                    <h4 className="st-price-value">
                      $2900<span>/ month</span>
                    </h4>
                    <p>
                      We are a creative web agency specializing in innovative design <br />
                      and cutting-edge development.
                    </p>
                  </div>
                  <div className="st-price-body">
                    <span className="st-price-list-label">What&apos;s included:</span>
                    <div className="st-price-list">
                      <ul>
                        <li>Custom website design</li>
                        <li>Basic SEO optimization</li>
                        <li>Responsive &amp; mobile-friendly layouts</li>
                        <li>Analytics &amp; reporting</li>
                        <li>2 Revisions per request</li>
                      </ul>
                    </div>
                    <div className="st-price-btn">
                      <a
                        href="#"
                        className="oit-btn-border d-inline-flex justify-content-center align-items-center w-100"
                      >
                        <span>
                          <span className="text-1">Start Your Retainer</span>
                          <span className="text-2">Start Your Retainer</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="st-price-item mb-30">
                  <div className="st-price-head">
                    <div className="st-price-badge-wrap d-flex justify-content-between">
                      <span className="st-price-badge">Premium</span>
                      <i className="st-price-ratting">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M8 0l2.1 5.1 5.5.4-4.2 3.6 1.3 5.3L8 11.5l-4.7 2.9 1.3-5.3L.4 5.5l5.5-.4L8 0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </i>
                    </div>
                    <h4 className="st-price-value">
                      $5000<span>/ month</span>
                    </h4>
                    <p>
                      We are a creative web agency specializing in innovative design <br />
                      and cutting-edge development.
                    </p>
                  </div>
                  <div className="st-price-body">
                    <span className="st-price-list-label">What&apos;s included:</span>
                    <div className="st-price-list">
                      <ul>
                        <li>Custom website design</li>
                        <li>Basic SEO optimization</li>
                        <li>Responsive &amp; mobile-friendly layouts</li>
                        <li>Analytics &amp; reporting</li>
                        <li>2 Revisions per request</li>
                      </ul>
                    </div>
                    <div className="st-price-btn">
                      <a
                        href="#"
                        className="oit-btn-border d-inline-flex justify-content-center align-items-center w-100"
                      >
                        <span>
                          <span className="text-1">Start Your Retainer</span>
                          <span className="text-2">Start Your Retainer</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
