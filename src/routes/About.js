import placeholder from '../img/placeholder.jpg'

function About() {
    return(
        <section className = "flex flex-col p-8 max-w-6xl mx-auto space-y-2">
            <div id = "About-us__sub-header" className = "text-yellow-600 text-3xl">
                About Us 
            </div>
            <div id = "About-us__header" className = "text-white text-4xl">
                A DnD Group
            </div>
            <div className = "text-white text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className = "flex justify-center space-x-4 pt-10">
                <img className = "max-w-lg border-yellow-600 border-4" src = {placeholder}></img>
                <img className = "max-w-lg border-yellow-600 border-4" src = {placeholder}></img>
            </div>
            <div id = "About-us__header" className = "text-white text-4xl pt-16">
                Something about the current campaign here.
            </div>
            <div className = "text-white text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className = "flex justify-center space-x-4 pt-10">
                <img className = "max-w-lg border-yellow-600 border-4" src = {placeholder}></img>
            </div>

        </section>
    );
}

export default About;