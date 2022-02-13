import tempImg from '../img/temp-crew.png'
import TwitchLogo from '../img/twitch.png'
import '../fonts.css'
import './Hero.css'

function Hero() {
    return (
        <header>
            <div className = "Hero justify-center p-12">
                <div className='flex flex-col'>
                    <div className = "text-white text-4xl text-center max-w-sm leading-2">
                        Welcome to the home of the Custard Crew.
                    </div>
                    <div className='border-b-2 border-white w-48 self-center py-4'></div>
                    
                    <div className = 'self-center pt-6 text-lg text-white'>
                        Streams Fridays, 7:00PM EST
                    </div>
                    <a className='self-center hover:cursor-pointer' href = "https://www.twitch.tv/custardcrew">
                        <img className = 'w-12 pt-4' src = {TwitchLogo}></img>
                    </a>
                    

                </div>

            </div>
        </header>
    )
}

export default Hero;