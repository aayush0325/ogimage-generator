import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons

export default function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className="w-screen h-screen bg-black flex justify-center items-center flex-col">
            <div className="text-white font-bold text-3xl sm:text-5xl mb-4 sm:mb-8 text-center">
                OG Image Generator
            </div>
            <div className="text-gray-300 font-bold text-xl sm:text-3xl mb-4 sm:mb-8 text-center">
                Welcome to Aayush Khanna's Page!
            </div>
            <div className="flex justify-center items-center flex-col sm:flex-row">
                <div
                    className="text-black bg-green-500 m-2 sm:m-5 p-2 sm:p-4 rounded cursor-pointer font-bold hover:px-4 sm:hover:px-6 transition-all duration-300 active:bg-green-600 w-full sm:w-auto text-center"
                    onClick={() => {
                        window.open('https://drive.google.com/file/d/1Rro9uKLZ2twWvbcNX8-KjtZHSqnlfIb0/view?usp=drive_link', '_blank');
                    }}
                >
                    RESUME
                </div>
                <div
                    className="text-black bg-green-500 m-2 sm:m-5 p-2 sm:p-4 rounded cursor-pointer font-bold hover:px-4 sm:hover:px-6 transition-all duration-300 active:bg-green-600 w-full sm:w-auto text-center"
                    onClick={() => navigate('/post')}
                >
                    GET STARTED
                </div>
                <div
                    className="text-white bg-gray-800 m-2 sm:m-5 p-2 sm:p-4 rounded cursor-pointer font-bold flex items-center justify-center hover:bg-gray-700 transition-all duration-300 active:bg-gray-900 w-full sm:w-auto"
                    onClick={() => {
                        window.open('https://github.com/aayush0325/ogimage-generator', '_blank');
                    }}
                >
                    <FaGithub className="mr-2" /> GitHub Repo
                </div>
            </div>
        </div>
    );
}
