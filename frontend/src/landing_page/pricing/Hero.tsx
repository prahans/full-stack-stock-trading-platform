function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h2 style={{ opacity: ".9" }}>Charges</h2>
        <h4 className="mt-3 text-muted">List of all charges and taxes</h4>
      </div>
      <div className="row mt-5 p-5">
        <div className="col-4 p-5">
          <img src="media\images\pricing0.svg" style={{ width: "80%" }} />
          <h3 style={{ opacity: ".9" }}>Free equity delivery</h3>
          <p className="text-muted mt-3">
            All equity delivery investments (NSE, BSE), <br /> are absolutely
            free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media\images\intradayTrades.svg" style={{ width: "80%" }} />
          <h3 style={{ opacity: ".9" }}>Intraday and F&O trades</h3>
          <p className="text-muted mt-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per
            <br /> executed order on intraday trades across
            <br /> equity, currency, and commodity trades. Flat <br /> ₹20 on
            all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media\images\pricing0.svg" style={{ width: "80%" }} />
          <h3 style={{ opacity: ".9" }}>Free direct MF</h3>
          <p className="text-muted mt-3">
            All direct mutual fund investments are <br /> absolutely free — ₹ 0
            commissions & DP
            <br /> charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
