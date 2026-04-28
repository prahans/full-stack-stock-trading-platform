function PageNotFound() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 fs-2" style={{ opacity: 0.9 }}>
          404 Not Found
        </h1>
        <p className="text-muted">
          Sorry, the page your are looking for does not exist.
        </p>
      </div>
    </div>
  );
}

export default PageNotFound;
