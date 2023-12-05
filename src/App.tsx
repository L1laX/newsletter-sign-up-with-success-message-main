import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState(""); //1
  const [isHidden, setIsHidden] = useState(false);
  const [validText, setValidText] = useState(false);
  function validateEmail(email: string) {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)) {
      setIsHidden(true);
    } else {
      setValidText(true);
    }
  }

  return (
    <>
      <main className="flex justify-center items-center xl:bg-slate-600 xl:h-screen ${isHidden ? 'hidden' : ''}">
        <section className="stay-update-box flex flex-col gap-4 w-screen xl:flex-row-reverse xl:items-center xl:justify-center xl:rounded-xl bg-white xl:w-[48rem] xl:p-5 relative">
          <div className="image flex justify-center m-0 p-0">
            <img
              className="image-mobile xl:hidden"
              src="/images/illustration-sign-up-mobile.svg"
              alt=""
            />
            <img
              className="imgae-destop hidden xl:flex"
              src="/images/illustration-sign-up-desktop.svg"
              alt=""
            />
          </div>
          <div className="stay-update-text flex flex-col gap-4 mx-5 py-2 xl:gap-2">
            <div className="header-text">
              <h1 className="text-3xl py-2 xl:text-4xl">Stay Update!</h1>
            </div>
            <div className="text">
              Join 60,000+ product managers receiving monthly updates on:
            </div>
            <div className="checkbox-list mt-2">
              <ul className="flex flex-col gap-4 xl:gap-2">
                <li className="list-items flex items-center gap-4">
                  <img
                    className="check-icon"
                    src="/images/icon-list.svg"
                    alt=""
                  />
                  Product discovery and building what matters
                </li>
                <li className="list-items flex items-center gap-4">
                  <img
                    className="check-icon"
                    src="/images/icon-list.svg"
                    alt=""
                  />
                  Measuring to ensure updates are a success
                </li>
                <li className="list-items flex items-center gap-4">
                  <img
                    className="check-icon"
                    src="/images/icon-list.svg"
                    alt=""
                  />
                  And much more!
                </li>
              </ul>
            </div>

            <form
              className="subscribe-form mt-5 flex flex-col gap-3 xl:mt-2 relative"
              action=""
            >
              <label htmlFor="email">Email address</label>
              <input
                className={`email-box p-5 rounded-xl border border-gray-300 xl:p-4  ${
                  validText ? "border-orange-500 text-orange-500" : ""
                }`}
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="email@company.com"
                required
                onChange={(e) => {
                  setEmail(e.target.value); //2
                }}
              />
              <button
                className={`submit-btn xl:mt-2 submit-button mt-4 bg-blue-950 p-5 rounded-xl text-white xl bg-gradient-to-r hover:from-pink-500 hover:to-orange-500`}
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  validateEmail(email); //3
                }}
              >
                Subscribe to monthly newsletter
              </button>
              <div
                className={`validate-Text text-orange-500 absolute top-0 right-0 font-bold ${
                  validText ? "" : "hidden"
                }`}
              >
                <p>Valid email required</p>
              </div>
            </form>
          </div>
        </section>
        <div
          className={`thanks-popup-card w-screen h-screen absolute bg-blend-normal bg-white bottom-0 top-0 xl:bg-slate-700 ${
            isHidden ? "" : "hidden"
          }`}
        >
          <div className="thanks-content-box xl:flex xl:justify-center xl:items-center w-full h-full">
            <article className="thanks-popup-content flex flex-col h-full justify-center mx-6 gap-5 xl:w-[25rem] xl:h-[28rem] xl:bg-white xl:px-10 xl:rounded-3xl">
              <div className="img-icon">
                <img
                  className="w-16 h-26 mb-4"
                  src="/images/icon-list.svg"
                  alt="check icon"
                />
              </div>
              <div className="thanks-popup-text">
                <h1 className="text-4xl mb-4">Thanks for Subscribing!</h1>
                <p>
                  A confirm email has been sent to
                  <h3 className="text-blue-900 font-bold">{email}</h3>
                  Please open it and click button inside to confirm your
                  Subscribe
                </p>
              </div>
              <button
                className="dismiss-btn xl:mt-2 submit-button mt-4 bg-blue-950 p-5 rounded-xl text-white xl bg-gradient-to-r hover:from-pink-500 hover:to-orange-500"
                onClick={() => {
                  setEmail("");
                  setIsHidden(false);
                }}
              >
                Dismiss Message
              </button>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
