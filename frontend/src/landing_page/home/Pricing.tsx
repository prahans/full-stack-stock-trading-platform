function Pricing() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-5 p-5">
          <h1 className="mb-3 fs-4" style={{ opacity: ".9" }}>
            Unbeatable pricing
          </h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a style={{ textDecoration: "none" }} href="">
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2 p-5 mt-4">
          <img
            src="media\images\pricing0.svg"
            alt="0rs"
            style={{ height: "40%", marginLeft: "-80px" }}
          />
          <p
            style={{ fontSize: "10px", display: "inline-block" }}
            className="text-muted"
          >
            Free account <br /> opening
          </p>
        </div>
        <div className="col-2 p-5 mt-4">
          <img
            src="media\images\pricing0.svg"
            alt="0rs"
            style={{ height: "40%", marginLeft: "-111px" }}
          />
          <p
            style={{ fontSize: "10px", display: "inline-block" }}
            className="text-muted"
          >
            Free equity delivery <br />
            and direct mutual funds
          </p>
        </div>
        <div className="col-3 p-5 mt-4">
          <img
            src="media\images\intradayTrades.svg"
            alt="20rs"
            style={{ height: "40%" }}
          />
          <p
            style={{ fontSize: "10px", display: "inline-block" }}
            className="text-muted"
          >
            Intraday and <br />
            F&O
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
