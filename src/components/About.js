import  { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <a href="https://www.youtube.com/watch?v=w7ejDZ8SWv8" target="_blank" rel="noreferrer">Origin: Traversy Media</a> <br></br>
            <Link to="/">Go Back</Link> {/* Use link instead of anchor tag with href so the page doesn't reload */}
        </div>
    )
}

export default About
