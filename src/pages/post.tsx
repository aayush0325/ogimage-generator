import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';
import { FaImage } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';

const PostPage: React.FC = () => {
    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);
    const [imageURL, setImageURL] = useState<string>("");
    const [imageName, setImageName] = useState<string>("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [content]);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setImage(file);
            setImageName(file.name);
            const imageURL = URL.createObjectURL(file);
            setImageURL(imageURL);
        }
    };

    const handleImageRemove = () => {
        setImage(null);
        setImageName("");
        setImageURL("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleSubmit = () => {
        if (imageURL) {
            navigate(`/preview?imageURL=${encodeURIComponent(imageURL)}&title=${title}&content=${content}`);
        }else{
            navigate(`/preview?title=${title}&content=${content}`)
        }
    };

    return (
        <div className="w-screen h-screen bg-black flex justify-center items-center overflow-hidden">
            <div className="flex flex-col w-full max-w-2xl p-6 bg-gray-800 rounded-lg m-4 overflow-scroll">
                <div className="flex justify-between items-center mb-8">
                    <div className="text-white font-bold text-3xl sm:text-xl">
                        Create Post
                    </div>
                    <UserButton />
                </div>
                <div className="text-white text-xl font-bold my-2 sm:text-sm">
                    Title
                </div>
                <input 
                    type="text" 
                    className="w-full border p-3 focus:outline-none rounded sm:text-sm"
                    placeholder="Enter title"
                    onChange={e => setTitle(e.target.value)}
                />
                <div className="text-white text-xl font-bold my-2 sm:text-sm">
                    Content
                </div>
                <textarea
                    ref={textareaRef}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full border p-3 focus:outline-none rounded max-h-40 overflow-y-auto sm:text-sm"
                    placeholder="Content"
                />
                <div className='flex justify-center items-middle'>
                    <div 
                        className="flex items-center justify-center text-black bg-green-500 m-4 sm:m-5 p-2 sm:p-4 rounded cursor-pointer font-bold hover:px-4 sm:hover:px-6 transition-all duration-300 active:bg-green-600 w-auto text-center space-x-2 sm:text-sm"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <FaImage /> <span>Add image</span>
                    </div>
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        style={{ display: 'none' }} 
                        onChange={handleImageUpload}
                    />
                    {image && (
                        <div 
                            className="flex items-center justify-center text-black bg-red-500 m-4 sm:m-5 p-2 sm:p-4 rounded cursor-pointer font-bold hover:px-4 sm:hover:px-6 transition-all duration-300 active:bg-red-600 w-auto text-center space-x-2 sm:text-sm"
                            onClick={handleImageRemove}
                        >
                            <FaDeleteLeft/> <span>Remove image</span>
                        </div>
                    )}
                </div>
                {imageName && (
                    <div className="text-white mt-2 text-center bg-neutral-500 p-1 sm:text-sm">
                        Uploaded image: {imageName}
                    </div>
                )}
                <div className='flex justify-center items-middle'>
                    <div 
                        className='flex items-center justify-center text-black bg-green-500 m-4 sm:m-5 p-2 sm:p-4 rounded cursor-pointer font-bold hover:px-4 sm:hover:px-6 transition-all duration-300 active:bg-green-600 w-auto text-center space-x-2 sm:text-sm'
                        onClick={handleSubmit}
                    >
                        Submit
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostPage;
