function LeftSection({
  imageURL,
  productName,
  productDescription,
  linkFirst,
  linkSecond,
}: {
  imageURL: string;
  productName: string;
  productDescription: string;
  linkFirst?: string;
  linkSecond?: string;
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5">
          <h2 style={{ opacity: ".9" }} className="fs-3">
            {productName}
          </h2>
          <p className="text-muted mt-4" style={{ lineHeight: "1.8" }}>
            {productDescription}
          </p>
          <div className="mt-5">
            {linkFirst && (
              <a href="" style={{ textDecoration: "none" }}>
                {linkFirst} <i className="fa-solid fa-arrow-right"></i>
              </a>
            )}
            {linkSecond && (
              <a href="" style={{ textDecoration: "none", marginLeft: "6rem" }}>
                {linkSecond} <i className="fa-solid fa-arrow-right"></i>
              </a>
            )}
          </div>
          <div className="mt-4">
            <a href="">
              <img src="media\images\googlePlayBadge.svg" />
            </a>
            <a href="">
              <img
                src="media\images\appstoreBadge.svg"
                style={{ marginLeft: "4rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
