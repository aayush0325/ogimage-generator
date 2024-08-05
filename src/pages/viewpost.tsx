import { useLocation } from "react-router-dom";

export default function ViewPost() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const imageURL: string | null = queryParams.get('imageURL');
    const title: string | null = queryParams.get('title');
    const content: string | null = queryParams.get('content');

    return (
        <div>
            <img src={imageURL ?? ""} />
            <h1>{title ?? "No title"}</h1>
            <p>{content ?? "No content"}</p>
        </div>
    );
}
