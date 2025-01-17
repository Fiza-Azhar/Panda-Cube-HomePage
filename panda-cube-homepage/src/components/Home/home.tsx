/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import logoImage from "../../assets/VerticalLogo.png";
import pandaImage from "../../assets/whiteLogo.png";
import "../../pagesCss/home.css"; 
import LanguageDropdown from "../Header/LanguageDropdown";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const SignInModal: React.FC<SignInModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null; 

  return (
    <div
      tabIndex={-1}
      aria-hidden="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h2>Sign in to Panda Cube</h2>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div className="p-4 md:p-5">
            <form className="space-y-4" action="#">
              <div className="text-left">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-[#006400] dark:text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div className="text-left mt-4">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-[#006400] dark:text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex items-start">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 border-gray-300 rounded bg-gray-50"
                  />
                  <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium  text-black"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-[#006400] hover:underline">
                  Lost Password?
                </a>
              </div>
              <button
  type="submit"
  className="w-full text-white bg-[#006400] hover:bg-[#004d00] rounded-lg text-sm px-5 py-2.5"
>
  Login to your account
</button>


              <div className="text-sm font-medium text-gray-500 mt-4">
                Not registered?{" "}
                <a
                  href="#"
                  onClick={() => {
                    onClose();
                  }}
                  className="text-sm text-[#006400] hover:underline"
                >
                  Create account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
interface FeedbackFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ isOpen, onClose }) => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Feedback submitted", feedback);
    // Handle feedback submission logic here (e.g., API call)
    onClose(); // Close modal after feedback submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-xl font-semibold text-center text-[#006400]">Feedback</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div  className="mb-4 text-left">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#006400]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md text-black"
              required
            />
          </div>
  
          {/* Email Field */}
          <div  className="mb-4 text-left">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#006400]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md text-black"
              required
            />
          </div>
  
          {/* Feedback Type */}
          <div className="mb-4">
  <p className="text-sm font-medium text-[#006400] text-left">Feedback Type</p>
  <div className="flex justify-start space-x-6 mt-2">
    <label className="flex items-center text-sm text-black">
      <input
        type="radio"
        name="feedbackType"
        value="comments"
        required
        className="mr-2 text-green-600"
      />
      Comments
    </label>
    <label className="flex items-center text-sm text-black">
      <input
        type="radio"
        name="feedbackType"
        value="questions"
        required
        className="mr-2 text-green-600"
      />
      Questions
    </label>
    <label className="flex items-center text-sm text-black">
      <input
        type="radio"
        name="feedbackType"
        value="suggestions"
        required
        className="mr-2 text-green-600"
      />
      Suggestions
    </label>
  </div>
</div>

  
          {/* Description Field */}
          <div  className="mb-4 text-left">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-[#006400]"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md text-black"
              required
            ></textarea>
          </div>
  
          {/* Buttons */}
          <div className="flex justify-center space-x-4 mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-[#006400] text-white rounded-md hover:bg-[#004d00]"
            >
              Submit
            </button>
            <button
  type="button"
  onClick={onClose}
  className="px-4 py-2 text-white bg-[#006400] border border-[#006400] rounded-md hover:bg-[#004d00] hover:border-[#004d00]"
>
  Close
</button>

          </div>
        </form>
      </div>
    </div>
  );  
};

const Home: React.FC = () => {
  console.log("Home component is rendering");
  //const [modalOpen, setModalOpen] = useState(false);

  const [registerOpen, setRegisterOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [toggleOpen, setToggleOpen] = useState(false);

  // Handlers to toggle modals
  const openRegisterModal = () => setRegisterOpen(true);
  const closeRegisterModal = () => setRegisterOpen(false);

  const openSignInModal = () => setSignInOpen(true);
  const closeSignInRegOpenModal = () => {
    setSignInOpen(true);
    setRegisterOpen(false); // Close register modal as well
  };

  const openFeedbackModal = () => setFeedbackOpen(true);
  const closeFeedbackModal = () => setFeedbackOpen(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted", name);
    // Handle form submission here (e.g., API call or state update)
  };
  return (
    <div>
      <div>
        <div className="bg-green-900 text-white font-sans">
          <div className="header">
            <div
              className="icon-container top-4 left-3"
              style={{ cursor: "pointer" }}
            >
              <LanguageDropdown/>

            </div>

            <div className="icon-container top-14 left-3">
              <div
                className="toggle-button"
                onClick={() => setToggleOpen(true)}
                style={{ cursor: "pointer" }}
              >
                <svg
                  id="light-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-sun"
                  viewBox="0 0 16 16"
                  style={{ display: "block" }}
                >
                  <path d="M8 4.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 8 4.5zM8 1a.5.5 0 0 1 .5.5V3h1a.5.5 0 0 1 .354.854l-1 1a.5.5 0 0 1-.708 0l-1-1A.5.5 0 0 1 7.5 3h1V1.5A.5.5 0 0 1 8 1zM8 13a.5.5 0 0 1-.5-.5V13H7a.5.5 0 0 1-.354-.854l1-1a.5.5 0 0 1 .708 0l1 1A.5.5 0 0 1 8.5 13h-1v1.5A.5.5 0 0 1 8 13zM1 8a.5.5 0 0 1 .5-.5h1V7a.5.5 0 0 1 .854-.354l1 1a.5.5 0 0 1 0 .708l-1 1A.5.5 0 0 1 2 8H1.5A.5.5 0 0 1 1 8zM13 8a.5.5 0 0 1 .5.5H14a.5.5 0 0 1-.354.854l-1 1a.5.5 0 0 1-.708 0l-1-1A.5.5 0 0 1 12.5 8h1V7a.5.5 0 0 1-.854-.354l-1-1a.5.5 0 0 1 0-.708l1-1A.5.5 0 0 1 13 7h1V8.5A.5.5 0 0 1 13 8z" />
                </svg>
                <svg
                  id="dark-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-moon"
                  viewBox="0 0 16 16"
                  style={{ display: "none" }}
                >
                  <path d="M11.74 12.86A7 7 0 1 0 5.56 4.04a5.5 5.5 0 1 1 6.18 8.82zM8 14a6 6 0 1 1 6-6 6 6 0 0 1-6 6z" />
                </svg>
              </div>
            </div>

            <div x-data="{ modalOpen: false }">
              <div
                className="icon-container top-24 left-3"
                style={{ cursor: "pointer" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-headphones"
                  viewBox="0 0 16 16"
                  onClick={() => setFeedbackOpen(true)} // React way to open modal
                >
                  <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
                </svg>
              </div>
            </div>

            {/* Feedback Form Modal */}
            <FeedbackForm isOpen={feedbackOpen} onClose={closeFeedbackModal} />
            <div className="logo-container">
              <img src={logoImage} alt="Panda Logo" className="logo-image" />
            </div>
            <nav className="nav">
              <a href="#">HOME</a>
              <a>|</a>
              <a href="#">ABOUT US</a>
              <a>|</a>
              <a href="#">FAQs</a>
              <a>|</a>
              <a href="#">
                UPDATES <span className="notification-badge">3</span>
              </a>
            </nav>
          </div>

          <div className="main">
            <div className="container">
              <div className="left-section">
                <h1>Welcome to Panda Cube</h1>
                <p>Better Together</p>
              </div>

              <div className="right-section">
                <img src={pandaImage} alt="Panda Cube Logo" />
              </div>
            </div>
            <div className="pattern-container">
              <div className="bg-pattern"></div>
              <div x-data="{ signInOpen: false, registerOpen: false }">
                <div className="button-container">
                  <button
                    onClick={() => setSignInOpen(true)}
                    className="custom-button"
                  >
                    <span className="btn-title">Sign In</span>
                    <span className="btn-subtitle">Already Panda Partner</span>
                  </button>
                  <SignInModal
                    isOpen={signInOpen}
                    onClose={() => setSignInOpen(false)}
                  />
                  <button
                    onClick={() => setRegisterOpen(true)}
                    className="custom-button"
                  >
                    <span className="btn-title">Register</span>
                    <span className="btn-subtitle">Introduce yourself</span>
                  </button>

                  <a href="#" className="custom-button">
                    <span className="btn-title">Guides</span>
                    <span className="btn-subtitle">Cube Tour</span>
                  </a>
                </div>
              </div>
              <div className="bg-pattern"></div>
              <div className="right-pattern-mobile"></div>
            </div>
          </div>

          <div className="footer">
            <p className="footer-text">
              Copyright&copy; 2024 Panda Retail Company. All rights reserved.
            </p>
            <a href="mailto:care@panda.com.sa" className="footer-email">
              care@panda.com.sa
            </a>
          </div>
          <script
            src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.min.js"
            defer
          ></script>
        </div>
      </div>
    </div>
  );
};

export default Home;
