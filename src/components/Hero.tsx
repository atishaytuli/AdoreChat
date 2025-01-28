import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (input) {
      navigate(`/room/${input}`);
    }
  }

  return (
    <>
      <div className="bg-gray-50">
        <section className="bg-opacity-30 py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-6">
            <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="block lg:hidden">
                <img
                  className="w-full max-w-md mx-auto rounded-lg"
                  src="./01.png"
                  alt="Lovers connecting through video call"
                />
              </div>

              <div className="text-center lg:text-left">
                <p className="text-base tracking-wider text-[#7D6EC0] font-[Roboto] font-semibold">
                  For lovers who never want to be apart,
                </p>
                <h1 className="mt-4 text-3xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-7xl font-[Roboto]">
                  Because every moment matters.
                </h1>
                <p className="mt-4 text-base text-black lg:mt-12 sm:text-xl font-semibold font-[Roboto]">
                  Share your moments, feelings, and love with AdoreChat – the perfect space for couples to stay close Everytime.
                </p>

                <style>
                  {`
                    @keyframes dance6123 {
                      to {
                        background-position: 150px;
                      }
                    }
                  `}
                </style>
                <div className="flex justify-center lg:justify-start mt-12">
                  <form onSubmit={submitHandler} className="relative">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Enter room code to Join"
                      className="md:px-6 md:py-4 mt-8 px-4 py-3 font-semibold text-gray-700 bg-white border-2 border-[#FE436A] rounded-md lg:mt-16 w-[300px] focus:outline-none focus:border-[#FF69B4] font-[Roboto]"
                    />
                    <button
                      type="submit"
                      className="absolute right-0 inline-flex items-center px-6 py-4 md:mt-8 mt-6 font-semibold text-white transition-all duration-200 bg-[#FE436A] rounded-md lg:mt-16 hover:bg-[linear-gradient(to_right,#FE436A_0%,#FE436A_33.3%,#FF69B4_33.3%,#FF69B4_66.6%,#9400D3_66.6%,#9400D3_100%)] hover:animate-[dance6123_2s_linear_infinite] hover:scale-110 hover:-translate-y-1 font-[Roboto]"
                    >
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </form>
                </div>

                <p className="mt-5 text-gray-600 text-center lg:text-left font-[Roboto]">
                  Stay close, no matter the distance.{" "}
                  <a
                    href="#"
                    title="Sign up now"
                    className="text-black transition-all duration-200 hover:underline ml-2"
                  >
                    SignUp Now
                  </a>
                </p>
              </div>

              <div className="hidden lg:block">
                <img
                  className="w-full"
                  src="./01.png"
                  alt="Lovers connecting through video call"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
