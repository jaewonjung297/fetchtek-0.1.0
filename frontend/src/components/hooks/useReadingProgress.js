import { useEffect, useState } from "react"

const useReadingProgress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (scrollHeight) { 
                setCompletion(
                    currentProgress / scrollHeight * 100
                )
            }
        }

        window.addEventListener('scroll', updateScrollCompletion);

        return () => {
            window.removeEventListener('scroll', updateScrollCompletion);
        }
    }, []);
    return completion;
}

export default useReadingProgress;