import { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function Pop() {
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
            <Navbar />
            <div className="min-h-[85vh] flex items-center justify-center bg-gray-50">
                <div className="w-full max-w-md px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-gray-900 font-pj">Connect Through Video</h2>
                        <p className="max-w-md mx-auto mt-5 text-base font-normal text-gray-600 font-pj">Join or create a video call room to connect with friends, family, or colleagues instantly.</p>
                    </div>

                    <div className="relative max-w-lg mx-auto mt-14">
                        <div className="absolute -inset-x-2 -inset-y-5"> 
                            <div className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter" style={{ background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)" }}></div>
                        </div>

                        <form onSubmit={submitHandler} className="relative">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Enter room code"
                                className="block w-full px-5 py-6 text-base font-normal text-black placeholder-gray-600 bg-white border border-gray-300 rounded-xl focus:border-black focus:ring-1 focus:ring-black font-pj focus:outline-none"
                                required
                            />

                            <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-3">
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj"
                                >
                                    Join Room
                                </button>
                            </div>
                        </form>
                    </div>

                    <p className="mt-6 text-sm font-normal text-center text-gray-500 font-pj">High quality video calls with easy room sharing</p>
                </div>
            </div>
        </>
    )
}

export default Pop