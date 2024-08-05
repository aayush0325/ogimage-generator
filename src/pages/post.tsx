import React, { useState, useEffect, useRef } from 'react';
import { UserButton } from '@clerk/clerk-react';

const PostPage: React.FC = () => {
    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [content]);

    return (
        <>
            <header className='bg-black w-full h-full flex justify-end'>
                <div className='m-2'>
                    <UserButton />
                </div>
            </header>
            <main>
                <div className="w-screen h-screen bg-black flex justify-center items-center">
                    <div className="flex flex-col w-full max-w-2xl p-6 bg-gray-800 rounded-lg mx-3">
                        <div className="text-white font-bold mb-8 text-3xl">
                            Create Post
                        </div>
                        <div className="text-white text-xl font-bold my-2">
                            Title
                        </div>
                        <input 
                            type="text" 
                            className="w-full border p-3 focus:outline-none rounded"
                            placeholder="Enter title"
                            onChange={e => setTitle(e.target.value)}
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
                    </div>
                </div>
            </main>
        </>
    );
};

export default PostPage;
