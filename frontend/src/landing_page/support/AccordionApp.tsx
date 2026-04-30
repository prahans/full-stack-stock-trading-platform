import { useState } from "react";
import "./AccordionApp.css";

function AccordionApp() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [curOpen, setCurOpen] = useState(-1);
  return (
    <div className="mt-5 mb-5 p-5">
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        num={0}
        title="Account Opening"
        key="Account Opening"
      >
        <ul>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Resident individual</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Minor</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Non Resident Indian (NRI)</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Company, Partnership, HUF and LLP</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Glossary</li>
          </a>
        </ul>
      </AccordionItem>
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        num={1}
        title="Your Zerodha Account"
        key="Your Zerodha Account"
      >
        <ul>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Your Profile</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Account modification</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Client Master Report (CMR) and Depository Participant (DP)</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Nomination</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Transfer and conversion of securities</li>
          </a>
        </ul>
      </AccordionItem>
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        num={2}
        title="Kite"
        key="Kite"
      >
        <ul>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>IPO</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Trading FAQs</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Margin Trading Facility (MTF) and Margins</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Charts and orders</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Alerts and Nudges</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>General</li>
          </a>
        </ul>
      </AccordionItem>
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        num={3}
        title="Funds"
        key="Funds"
      >
        <ul>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Add money</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Withdraw money</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Add bank accounts</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>eMandates</li>
          </a>
        </ul>
      </AccordionItem>
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        num={4}
        title="Console"
        key="Console"
      >
        <ul>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Portfolio</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Corporate actions</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Funds statement</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Reports</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Profile</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Segments</li>
          </a>
        </ul>
      </AccordionItem>
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        num={5}
        title="Coin"
        key="Coin"
      >
        <ul>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Mutual funds</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>National Pension Scheme (NPS)</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Fixed Deposit (FD)</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Features on Coin</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>Payments and Orders</li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#397dd0" }}>
            <li>General</li>
          </a>
        </ul>
      </AccordionItem>
    </div>
  );
}

type AccordionItemProps = {
  num: number;
  title: string;
  children: React.ReactNode;
  curOpen: number;
  onOpen: React.Dispatch<React.SetStateAction<number>>;
};

function AccordionItem({
  num,
  title,
  children,
  curOpen,
  onOpen,
}: AccordionItemProps) {
  const isOpen = num === curOpen;
  function handleToggle() {
    onOpen(isOpen ? -1 : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""} `} onClick={handleToggle}>
      <p className="number">
        {num === 0 && <i className="fa-solid fa-plus"></i>}
        {num === 1 && <i className="fa-regular fa-circle-user"></i>}
        {num === 2 && <i className="fa-solid fa-left-long"></i>}
        {num === 3 && <i className="fa-solid fa-indian-rupee-sign"></i>}
        {num === 4 && (
          <i
            className="fa-regular fa-circle-user"
            style={{ transform: "rotate(-90deg)" }}
          ></i>
        )}
        {num === 5 && <i className="fa-solid fa-coins"></i>}
      </p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

export default AccordionApp;
