import JamesImg from '../img/james.jpg';
import RichieImg from '../img/richie.jpg';
import KoltonImg from '../img/kolton.jpg';
import AlexImg from '../img/alex.jpg';
import JaredImg from '../img/Jared_Bio_pic.jpg';

import CrewMember from '../components/CrewMember';
import Biographies from '../text_files';

function Crew() {
    return(
        <section className = "flex flex-col p-8 max-w-6xl mx-auto space-y-2">
            <div className = "flex flex-col space-y-16" id = "people-container">
                <CrewMember 
                    image = {JamesImg} 
                    stat1_name = "CHS" 
                    stat1 = "12"
                    stat2_name = "STR"
                    stat2 = "0"
                    stat3_name = "DEX"
                    stat3 = "-1"
                    bio = {Biographies.JamesBio}
                 />
                <CrewMember 
                    image = {RichieImg} 
                    stat1_name = "WIS" 
                    stat1 = "6"
                    stat2_name = "INT"
                    stat2 = "10"
                    stat3_name = "DEX"
                    stat3 = "2"
                    bio = {Biographies.RichieBio}
                 />
                <CrewMember 
                    image = {KoltonImg} 
                    stat1_name = "WIS" 
                    stat1 = "6"
                    stat2_name = "INT"
                    stat2 = "10"
                    stat3_name = "DEX"
                    stat3 = "2"
                    bio = {Biographies.KoltonBio}
                 />
                <CrewMember 
                    image = {AlexImg} 
                    stat1_name = "WIS" 
                    stat1 = "6"
                    stat2_name = "INT"
                    stat2 = "10"
                    stat3_name = "DEX"
                    stat3 = "2"
                    bio = {Biographies.AlexBio}
                    isLong = "true"
                 />
                <CrewMember 
                    image = {JaredImg} 
                    stat1_name = "WIS" 
                    stat1 = "6"
                    stat2_name = "INT"
                    stat2 = "10"
                    stat3_name = "DEX"
                    stat3 = "2"
                    bio = {Biographies.JaredBio}
                    isLong = "true"
                 />  
            </div>
        </section>

    )
}

export default Crew;