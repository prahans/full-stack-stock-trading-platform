import React, { useState, type ReactNode } from "react";

import BuyActionWindow from "./BuyActionWindow";

type GeneralContextValue = {
  openBuyWindow: (uid: string) => void;
  closeBuyWindow: () => void;
};

const GeneralContext = React.createContext<GeneralContextValue>({
  openBuyWindow: () => undefined,
  closeBuyWindow: () => undefined,
});

export const GeneralContextProvider = ({ children }: { children: ReactNode }) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid: string) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
