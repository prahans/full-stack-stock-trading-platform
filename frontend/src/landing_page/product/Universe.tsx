import { useNavigate } from "react-router-dom";

function Universe() {
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <h2 style={{ opacity: ".9" }} className="text-center mt-5 mb-3">
        The Zerodha Universe
      </h2>
      <p className="text-muted text-center" style={{ marginBottom: "6rem" }}>
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row mb-5">
        <div className="col-4">
          <img
            src="media\images\zerodhaFundhouse.png"
            style={{ width: "50%" }}
          />
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            Our asset management venture <br /> that is creating simple and
            transparent index <br /> funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4">
          <img src="media\images\sensibullLogo.svg" style={{ width: "50%" }} />
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            Options trading platform that lets you <br /> create strategies,
            analyze positions, and examine <br /> data points like open
            interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4">
          <img src="media\images\tijori.svg" style={{ width: "50%" }} />
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            Investment research platform <br />
            that offers detailed insights on stocks, <br />
            sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4">
          <img src="media\images\streakLogo.png" style={{ width: "50%" }} />
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            Systematic trading platform <br />
            that allows you to create and backtest
            <br />
            strategies without coding
          </p>
        </div>
        <div className="col-4">
          <img src="media\images\smallcaseLogo.png" style={{ width: "50%" }} />
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            Thematic investing platform <br />
            that helps you invest in diversified <br />
            baskets of stocks on ETFs
          </p>
        </div>
        <div className="col-4">
          <img src="media\images\dittoLogo.png" style={{ width: "50%" }} />
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            Personalized advice on life <br />
            and health insurance. No spam <br />
            and no mis-selling
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={() => navigate("/signup")}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
