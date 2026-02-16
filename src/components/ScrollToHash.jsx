import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Optional: scroll to top if no hash, but checking if it's a new page load
            // For now, let's leave it as is or verify behavior.
            // Usually we want scroll top on new page.
            window.scrollTo(0, 0);
        }
    }, [hash, pathname]);

    return null;
};

export default ScrollToHash;
