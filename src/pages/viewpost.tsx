import { useLocation } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import { useClerk } from "@clerk/clerk-react";

export default function ViewPost() {
    const { user } = useClerk();
    const fullName = user?.fullName;
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const imageURL: string | null = queryParams.get('imageURL');
    const title: string | null = queryParams.get('title');
    const content: string | null = queryParams.get('content');

    return (
        <div className="bg-gray-900 h-screen w-screen flex flex-col items-center p-6">
            <div className="bg-white text-black rounded-lg shadow-lg p-3 max-w-4xl flex flex-col sm:flex-row">
                <div className="max-h-80 min-w-fit flex justify-center items-center rounded overflow-hidden border-black border-2">
                    {imageURL &&
                        <img
                            src={imageURL}
                            className="w-full h-auto object-contain cursor-pointer"
                            loading="lazy"
                        />
                    }
                </div>
                <div className="py-2 sm:px-2 flex flex-col justify-between ml-3 flex-grow">
                    <div className="flex items-center justify-between mb-2">
                        <div className="text-2xl font-bold mr-4">
                            {title ?? "Untitled Post"}
                        </div>
                        <UserButton />
                    </div>
                    <div className="mt-2 whitespace-pre-wrap flex-grow">
                        {content ?? "No content available."}
                    </div>
                    <div className="mt-auto self-end text-sm text-gray-600">
                        - {fullName}
                    </div>
                </div>
            </div>
        </div>
    );
}
