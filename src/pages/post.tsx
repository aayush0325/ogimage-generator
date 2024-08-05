import React, { useState, useEffect, useRef } from 'react';
import { UserButton } from '@clerk/clerk-react';
import { FaImage } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';

const PostPage: React.FC = () => {
    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);
    const [imageName, setImageName] = useState<string>("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [content]);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setImage(event.target.files[0]);
            setImageName(event.target.files[0].name);
            console.log(event.target.files[0]);
        }
    };

    const handleImageRemove = () => {
        setImage(null);
        setImageName("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="w-screen h-screen bg-black flex justify-center items-center">
            <div className="flex flex-col w-full max-w-2xl p-6 bg-gray-800 rounded-lg mx-3">
                <div className="flex justify-between items-center mb-8">
                    <div className="text-white font-bold text-3xl">
                        Create Post
                    </div>
                    <UserButton />
                </div>
                <div className="text-white text-xl font-bold my-2">
                    Title
                </div>
                <input 
                    type="text" 
                    className="w-full border p-3 focus:outline-none rounded"
                    placeholder="Enter title"
                    onChange={e => {setTitle(e.target.value); console.log(title);}}
                />
                <div className="text-white text-xl font-bold my-2">
                    Content
                </div>
                <textarea
                    ref={textareaRef}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full border p-3 focus:outline-none rounded max-h-60 overflow-y-auto"
                    placeholder="Content"
                />
                <div className='flex justify-center items-middle'>
                    <div 
                        className="flex items-center justify-center text-black bg-green-500 m-4 sm:m-5 p-2 sm:p-4 rounded cursor-pointer font-bold hover:px-4 sm:hover:px-6 transition-all duration-300 active:bg-green-600 w-auto text-center space-x-2"
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
                            className="flex items-center justify-center text-black bg-red-500 m-4 sm:m-5 p-2 sm:p-4 rounded cursor-pointer font-bold hover:px-4 sm:hover:px-6 transition-all duration-300 active:bg-red-600 w-auto text-center space-x-2"
                            onClick={handleImageRemove}
                        >
                            <FaDeleteLeft/> <span>Remove image</span>
                        </div>
                    )}
                </div>
                {imageName && (
                    <div className="text-white mt-2 text-center bg-neutral-500 p-1">
                        Uploaded image: {imageName}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostPage;
