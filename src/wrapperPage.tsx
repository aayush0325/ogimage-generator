import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function ParamCheck({component}:{component:React.ReactElement}){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const title = queryParams.get('title') || '';
    const content = queryParams.get('content') || '';
    const hasValidParams = title.trim() !== '' && content.trim() !== '';
    return hasValidParams ? component : <Navigate to='/' />;
}