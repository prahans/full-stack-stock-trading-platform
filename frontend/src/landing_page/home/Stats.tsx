function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5" style={{ opacity: ".9" }}>
            Trust with confidence
          </h1>
          <h2 className="fs-4 mb-3" style={{ opacity: ".9" }}>
            Customer-first always
          </h2>
          <p className="text-muted mb-3" style={{ lineHeight: "1.8" }}>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h2 className="fs-4 mb-3" style={{ opacity: ".9" }}>
            No spam or gimmicks
          </h2>
          <p className="text-muted mb-3" style={{ lineHeight: "1.8" }}>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>
          <h2 className="fs-4 mb-3" style={{ opacity: ".9" }}>
            The Zerodha universe
          </h2>
          <p className="text-muted mb-3" style={{ lineHeight: "1.8" }}>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4 mb-3" style={{ opacity: ".9" }}>
            Do better with money
          </h2>
          <p className="text-muted mb-3" style={{ lineHeight: "1.8" }}>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="media\images\ecosystem.png"
            alt="ecosystem"
            style={{ width: "110%" }}
          />
          <div className="text-center">
            <a className="mx-5" style={{ textDecoration: "none" }} href="">
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a style={{ textDecoration: "none" }} href="">
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
