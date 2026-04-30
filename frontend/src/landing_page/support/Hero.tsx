function Hero() {
  return (
    <div style={{ backgroundColor: "#f6f6f6" }} className="p-3">
      <div className="container">
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="mt-5 mb-5"
        >
          <h3 style={{ opacity: ".9" }}>Support Portal</h3>
          <button className="btn btn-primary" style={{ opacity: ".9" }}>
            My tickets
          </button>
        </div>
        <input
          className="form-control form-control-lg mb-5 text-muted"
          type="text"
          placeholder="Eg: How do I open my account, How do i activate F&O..."
          aria-label=".form-control-lg example"
        />
      </div>
    </div>
  );
}

export default Hero;
