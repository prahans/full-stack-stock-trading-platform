function Education() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-6 p-5">
          <img
            src="media\images\education.svg"
            alt="education"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5 mt-5" style={{ opacity: ".9" }}>
            Free and open market education
          </h1>
          <div className="mb-5">
            <p className="text-muted mb-3">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a style={{ textDecoration: "none" }} href="">
              Varsity <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mb-5">
            <p className="text-muted mb-3">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a style={{ textDecoration: "none" }} href="">
              TradingQ&A <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
