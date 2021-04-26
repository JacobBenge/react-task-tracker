import  { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <Link to="/about">About</Link> {/* Use link instead of anchor tag with href so the page doesn't reload */}
        </footer>
    )
}

export default Footer
