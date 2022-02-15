import placeholder from '../img/placeholder.jpg';
import WBTW from '../img/WBTW.jpg';
import {AboutUs} from '../text_files.js';

function About() {
    return(
        <section className = "flex flex-col p-8 max-w-6xl mx-auto space-y-2">
            <div id = "About-us__sub-header" className = "text-yellow-600 text-3xl">
                About Us 
            </div>
            <div id = "About-us__header" className = "text-white text-4xl">
                A DnD Group from NC
            </div>
            <div className = "text-white text-lg">
                {AboutUs.MainAboutUs}
            </div>
            <div className = "flex flex-col lg:flex-row justify-center align-middle pt-2 md:pt-10 m-auto">
                <img className = " border-yellow-600 border-4 md:max-w-sm m-2 md:m-4" src = {placeholder}></img>
                <img className = "border-yellow-600 border-4 md:max-w-sm m-2 md:m-4" src = {placeholder}></img>
            </div>
            <div id = "About-us__sub-header" className = "text-yellow-600 text-3xl pt-16">
                Current Campaign
            </div>
            <div id = "About-us__header" className = "text-white text-4xl">
                The Wild Beyond the Witchlight
            </div>
            <div className = "text-white text-lg">
                Once every eight years, the fantastic Witchlight Carnival touches down on your world, bringing joy to one settlement after the next. Its owners, Mister Witch and Mister Light, know how to put on a good show. But there’s more to this magical extravaganza than meets the eye!
            </div>
            <div className = "flex justify-center space-x-4 pt-10">
                <img className = "border-yellow-600 border-4 md:max-w-lg m-2 md:m-4" src = {WBTW}></img>
            </div>

        </section>
    );
}

export default About;