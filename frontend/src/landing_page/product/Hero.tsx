function Hero() {
  return (
    <div className="container border-bottom">
      <div className="text-center mt-5 p-5">
        <h2 style={{ opacity: ".9" }}>Zerodha Products</h2>
        <h4 className="mt-3" style={{ opacity: ".9" }}>
          Sleek, modern, and intuitive trading platforms
        </h4>
        <p className="text-muted mt-3 mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
