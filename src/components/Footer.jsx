
import "../styles.css";

export default function Footer() {
    return (
        <div className="layout-container">
            <footer className="footer">
                &copy; Developed by 
                <a href="https://github.com/YashChugani/mini-games-hub" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="footer-link">
                    Yash Chugani
                </a>
                | Reg No: 23BCE0505
            </footer>
        </div>
    );
}
