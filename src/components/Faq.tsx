function Faq() {
  const toggleFaq = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const content = button.parentElement?.parentElement?.querySelector('div:last-child');
    const icon = button.querySelector('svg');

    if (content && icon) {
      content.classList.toggle('hidden');
      icon.classList.toggle('rotate-45');
    }
  };

  return (
    <>
      <section className="py-12 bg-white sm:py-16 lg:py-20 mt-12">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Frequently Asked Questions</h2>
            <p className="max-w-lg mx-auto mt-6 text-base text-gray-600 font-pj">Have questions about AdoreChat? We're here to help! Check out some common questions below.</p>
          </div>

          <div className="max-w-4xl mx-auto mt-8 sm:mt-14">
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute -inset-1">
                  <div className="w-full h-full mx-auto opacity-30 blur-lg filter" style={{ background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)" }}></div>
                </div>

                <div className="relative overflow-hidden bg-white border border-gray-200 rounded-xl">
                  <h3>
                    <button onClick={toggleFaq} className="flex items-center justify-between w-full px-6 py-5 text-xl font-bold text-left text-gray-900 sm:p-8 font-pj">
                      <span>Is AdoreChat really free to use?</span>
                      <span className="ml-4">
                        <svg className="w-6 h-6 text-gray-900 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 hidden">
                    Yes! AdoreChat is completely free to use. We believe that staying connected with your loved ones shouldn't come with a price tag. All our features are available to everyone at no cost.
                  </div>
                </div>
              </div>

              <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                <h3>
                  <button onClick={toggleFaq} className="flex items-center justify-between w-full px-6 py-5 text-xl font-bold text-left text-gray-900 sm:p-8 font-pj">
                    <span>What do I need to start a video call?</span>
                    <span className="ml-4">
                      <svg className="w-6 h-6 text-gray-900 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 hidden">
                  All you need is a device with a camera and microphone, a stable internet connection, and the person you want to connect with. No downloads required - just open AdoreChat in your browser and start calling!
                </div>
              </div>

              <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                <h3>
                  <button onClick={toggleFaq} className="flex items-center justify-between w-full px-6 py-5 text-xl font-bold text-left text-gray-900 sm:p-8 font-pj">
                    <span>How good is the video quality?</span>
                    <span className="ml-4">
                      <svg className="w-6 h-6 text-gray-900 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 hidden">
                  AdoreChat offers HD video quality that automatically adjusts based on your internet connection to ensure the best possible experience. We prioritize quality and stability for your important moments.
                </div>
              </div>

              <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                <h3>
                  <button onClick={toggleFaq} className="flex items-center justify-between w-full px-6 py-5 text-xl font-bold text-left text-gray-900 sm:p-8 font-pj">
                    <span>Is my video call private and secure?</span>
                    <span className="ml-4">
                      <svg className="w-6 h-6 text-gray-900 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 hidden">
                  Absolutely! Your privacy is our top priority. All video calls are end-to-end encrypted, and we never store any call data. Your intimate moments stay between you and your loved one.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;