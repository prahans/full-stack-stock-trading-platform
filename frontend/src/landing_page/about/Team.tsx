function Team() {
  return (
    <div className="container">
      <div className="row p-3 ">
        <h1 className="fs-3 text-center" style={{ opacity: ".9" }}>
          People
        </h1>
      </div>
      <div
        className="row p-3  text-muted"
        style={{ lineHeight: "1.8", fontSize: "1rem" }}
      >
        <div className="col-6 p-3">
          <img
            src="media\images\prahans2.jpg"
            style={{
              borderRadius: "50%",
              width: "50%",
              marginLeft: "9rem",
              height: "50%",
              objectFit: "cover",
            }}
          />
          <h4 className="text-center mt-2">Prahan Panuhar</h4>
          <h6 className="text-center">Co-Founder, CTO</h6>
        </div>
        <div className="col-6 p-3 mt-5">
          <p>
            Prahan bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>{" "}
            /
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
