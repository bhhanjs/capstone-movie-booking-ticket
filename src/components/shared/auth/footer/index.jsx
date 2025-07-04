import React from "react";

export default function AuthFooter() {
  return (
    <>
      <footer className="bg-yama-main-green mt-10">
        <div className="footer__container flex flex-col justify-center items-center w-full">
          {/* footer top */}
          <div className="footer__top py-5 flex flex-col lg:flex-row justify-center items-center border-b-[1px] border-white w-full text-white text-sm space-y-2">
            <div className="footer__items">
              <a href="#">Private Policy</a>
            </div>
            <div className="footer__items">
              <a href="#">
                Description based on the Specified Commercial Transactions Act
              </a>
            </div>
            <div className="footer__items">
              <a href="#">Staff Recruitment </a>
            </div>
            <div className="footer__items border-r-none">
              <a href="#">List of cinemas</a>
            </div>
          </div>
          {/* footer under */}
          <div className="footer_under py-5 flex justify-between items-center">
            <div>
              <p className="text-white text-xs font-light">
                Ⓒ 2017 Forum Cinema Network All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
