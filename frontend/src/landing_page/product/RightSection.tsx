function RightSection({
  imageURL,
  productName,
  productDescription,
  link,
}: {
  imageURL: string;
  productName: string;
  productDescription: string;
  link?: string;
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6" style={{ marginTop: "12rem" }}>
          <h2 style={{ opacity: ".9" }} className="fs-3">
            {productName}
          </h2>
          <p className="text-muted mt-4" style={{ lineHeight: "1.8" }}>
            {productDescription}
          </p>
          <div className="mt-5">
            {link && (
              <a href="" style={{ textDecoration: "none" }}>
                {link} <i className="fa-solid fa-arrow-right"></i>
              </a>
            )}
          </div>
        </div>
        <div className="col-6 p-5">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
