import { Link } from "react-router-dom";

export default function HomeFooter() {
  return (
    <>
      <footer className="bg-yama-main-green mt-10">
        <div className="footer__container flex flex-col justify-center items-center w-full">
          {/* footer top */}
          <div className="footer__top py-5 flex flex-col lg:flex-row justify-center items-center border-b-[1px] border-white w-full text-white text-sm space-y-2">
            <div className="footer__items">
              <Link to="#">Private Policy</Link>
            </div>
            <div className="footer__items">
              <Link to="#">
                Description based on the Specified Commercial Transactions Act
              </Link>
            </div>
            <div className="footer__items">
              <Link to="#">Staff Recruitment </Link>
            </div>
            <div className="footer__items border-r-none">
              <Link to="#">List of cinemas</Link>
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
