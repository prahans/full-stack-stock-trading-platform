import AccordionApp from "./AccordionApp";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <AccordionApp />
        </div>
        <div className="col-4 mt-5 p-5 text-muted">
          <div
            className="p-4"
            style={{
              borderLeft: "10px solid #ff9100",
              backgroundColor: "#ff91001a",
            }}
          >
            <ul>
              <a
                href=""
                className="mb-4"
                style={{
                  display: "inline-block",
                  color: "#397dd0",
                }}
              >
                <li>Adjustment of F&O contracts of TECHM due to dividend</li>
              </a>
              <a
                href=""
                style={{
                  display: "inline-block",
                  color: "#397dd0",
                }}
              >
                <li>Adjustment of F&O contracts of INFY due to dividend</li>
              </a>
            </ul>
          </div>
          <div className="mt-3">
            <div
              className="p-3"
              style={{
                backgroundColor: "#f6f6f6",
                border: ".8px solid #dedee3de",
                borderRadius: "3px",
                fontWeight: "600",
              }}
            >
              Quick links
            </div>
            <a
              href=""
              style={{
                textDecoration: "none",
                display: "inline-block",
                width: "100%",
                border: ".8px solid #dedee3de",
                borderRadius: "3px",
                color: "#397dd0",
              }}
              className="p-3"
            >
              1. Track account opening
            </a>
            <a
              href=""
              style={{
                textDecoration: "none",
                display: "inline-block",
                width: "100%",
                border: ".8px solid #dedee3de",
                borderRadius: "3px",
                color: "#397dd0",
              }}
              className="p-3"
            >
              2. Track segment activation
            </a>
            <a
              href=""
              style={{
                textDecoration: "none",
                display: "inline-block",
                width: "100%",
                border: ".8px solid #dedee3de",
                borderRadius: "3px",
                color: "#397dd0",
              }}
              className="p-3"
            >
              3. Intraday margins
            </a>
            <a
              href=""
              style={{
                textDecoration: "none",
                display: "inline-block",
                width: "100%",
                border: ".8px solid #dedee3de",
                borderRadius: "3px",
                color: "#397dd0",
              }}
              className="p-3"
            >
              4. Kite user manual
            </a>
            <a
              href=""
              style={{
                textDecoration: "none",
                display: "inline-block",
                width: "100%",
                border: ".8px solid #dedee3de",
                borderRadius: "3px",
                color: "#397dd0",
              }}
              className="p-3"
            >
              5. Learn how to create a ticket
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
