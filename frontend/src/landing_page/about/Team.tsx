function Team() {
  return (
    <div className="container mb-5">
      <div className="row  p-3 ">
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
            src="media\images\nithin-kamath.jpg"
            style={{
              borderRadius: "100%",
              width: "50%",
              marginLeft: "9rem",
            }}
          />
          <h4 className="text-center mt-2">Nithin Kamath</h4>
          <h6 className="text-center">Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
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
