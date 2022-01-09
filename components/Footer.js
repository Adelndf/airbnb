import React from "react";
import { footerData } from "../constants/constants";

function Footer() {
  return (
    <div className="bg-gray-200 p-8 mt-8 md:px-16 border-t border-gray-300">
      <div className="text-xs text-gray-700 sm:text-sm grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
        {footerData.map((item, index) => (
          <div key={index} className="space-y-2 sm:space-y-3">
            <h5 className="font-bold text-gray-900">{item.title}</h5>
            <p className="footer-pTag">{item.subTitle[0]}</p>
            <p className="footer-pTag">{item.subTitle[1]}</p>
            <p className="footer-pTag">{item.subTitle[2]}</p>
            <p className="footer-pTag">{item.subTitle[3]}</p>
            <p className="footer-pTag">{item.subTitle[4]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
