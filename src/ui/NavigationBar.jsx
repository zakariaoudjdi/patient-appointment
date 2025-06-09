import { useState } from "react";
import MobileHeader from "./MobileHeader";
import MobileSidebar from "./MobileSidebar";
import DesktopHeader from "./DesktopHeader";

function NavigationBar({ links = [], isHomePage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <MobileHeader
        isHomePage={isHomePage}
        onOpenMenu={() => setIsMobileMenuOpen(true)}
      />
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <MobileSidebar
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            links={links}
            isHomePage={isHomePage}
          />
        </>
      )}
      <DesktopHeader links={links} isHomePage={isHomePage} />
    </>
  );
}

export default NavigationBar;
