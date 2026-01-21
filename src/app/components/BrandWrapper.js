import Topbar from "./topbar";
import { Header, PHAGROHeader, BFGHeader } from "./header";
import { TACommodityFooter, PHAGROFooter, BFGFooter } from "./footer";

export default function BrandWrapper({ children, brand = "TA" }) {
  // Brand logic for Header and Footer
  const renderHeader = () => {
    switch (brand) {
      case "PHAGRO": return <PHAGROHeader />;
      case "BFG":    return <BFGHeader />;
      default:       return <Header />;
    }
  };

  const renderFooter = () => {
    switch (brand) {
      case "PHAGRO": return <PHAGROFooter />;
      case "BFG":    return <BFGFooter />;
      default:       return <TACommodityFooter />;
    }
  };

  return (
    <div className={`${brand.toLowerCase()}-brand-context`}>
      <Topbar brand={brand} />
      {renderHeader()}
      
      <main>{children}</main>
      
      {renderFooter()}
    </div>
  );
}