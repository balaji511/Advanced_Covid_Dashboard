import { useMediaQuery } from "@mui/material";
import { createContext, useEffect, useState } from "react";

export interface IMobileDisplayContextType {
  isMobileScreen: boolean;
}

export const MobileDisplayContext = createContext<IMobileDisplayContextType>({
  isMobileScreen: false,
});

const MobileDisplayContextProvider = ({ children }: any) => {
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(
    useMediaQuery("(max-width:727px)")
  );
  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 727);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MobileDisplayContext.Provider
      value={{
        isMobileScreen: isMobileScreen,
      }}
    >
      {children}
    </MobileDisplayContext.Provider>
  );
};

export default MobileDisplayContextProvider;
