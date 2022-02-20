import JamesImg from '../img/james.jpg';
import RichieImg from '../img/richie.jpg';
import KoltonImg from '../img/kolton.jpg';
import AlexImg from '../img/alex.jpg';
import JaredImg from '../img/Jared_Bio_pic.jpg';

import CrewMember from '../components/CrewMember';
import {Biographies} from '../text_files';

function Crew() {
    return(
        <section className = "flex flex-col p-8 max-w-6xl mx-auto space-y-2">
            <div className = "flex flex-col space-y-16" id = "people-container">
                <CrewMember 
                    image = {JamesImg} 
                    name = "James"
                    stat1_name = "CHS" 
                    stat1 = "20"
                    stat2_name = "STR"
                    stat2 = "0"
                    stat3_name = "DEX"
                    stat3 = "0"
                    bio = {Biographies.JamesBio}
                 />
                <CrewMember 
                    image = {RichieImg} 
                    name = "Richie"
                    stat1_name = "WIS" 
                    stat1 = "16"
                    stat2_name = "INT"
                    stat2 = "18"
                    stat3_name = "DEX"
                    stat3 = "9"
                    bio = {Biographies.RichieBio}
                 />
                <CrewMember 
                    image = {KoltonImg} 
                    name = "Kolton"
                    stat1_name = "WIS" 
                    stat1 = "14"
                    stat2_name = "STR"
                    stat2 = "17"
                    stat3_name = "CHA"
                    stat3 = "18"
                    bio = {Biographies.KoltonBio}
                 />
                <CrewMember 
                    image = {AlexImg} 
                    name = "Zirkle"
                    stat1_name = "WIS" 
                    stat1 = "16"
                    stat2_name = "INT"
                    stat2 = "19"
                    stat3_name = "DEX"
                    stat3 = "16"
                    bio = {Biographies.AlexBio}
                    isLong = "true"
                 />
                <CrewMember 
                    image = {JaredImg}
                    name = "Jared" 
                    stat1_name = "WIS" 
                    stat1 = "18"
                    stat2_name = "INT"
                    stat2 = "14"
                    stat3_name = "DEX"
                    stat3 = "12"
                    bio = {Biographies.JaredBio}
                    isLong = "false"
                 />  
            </div>
        </section>

    )
}

export default Crew;