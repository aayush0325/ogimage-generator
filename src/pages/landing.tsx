import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className="w-screen h-screen bg-black flex justify-center items-center flex-col">
            <div className="text-white font-bold text-5xl mb-8 text-center">
                OG Image Generator
            </div>
            <div className="text-gray-300 font-bold text-3xl mb-8 text-center">
                Welcome to Aayush Khanna's Page!
            </div>
            <div className="flex justify-center items-center">
                <div
                    className="text-black bg-green-500 m-5 p-4 rounded cursor-pointer font-bold hover:px-6 transition-all duration-300 active:bg-green-600"
                    onClick={() => {
                        window.open('https://drive.google.com/file/d/1Rro9uKLZ2twWvbcNX8-KjtZHSqnlfIb0/view?usp=drive_link', '_blank');
                    }}
                >
                    RESUME
                </div>
                <div
                    className="text-black bg-green-500 m-5 p-4 rounded cursor-pointer font-bold hover:px-6 transition-all duration-300 active:bg-green-600"
                    onClick={() => navigate('/post')}
                >
                    GET STARTED
                </div>
            </div>
        </div>
    );
}
