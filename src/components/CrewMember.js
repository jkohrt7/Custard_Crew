function CrewMember(props) {
    let longClass = "flex-shrink text-white text-lg leading-8 mt-16"
    return(
        <div className = "flex flex-col">
            <div id = "person-container" className = "flex flex-col md:flex-row md:space-x-8">
                <div id = "portrait-stats" className = "flex flex-col md:w-96">
                    <div className = "text-yellow-600 text-4xl text-center pb-4">
                        {props.name}
                    </div>
                    <img className = "border-yellow-600 border-8 " src = {props.image}></img>
                    <div className = "flex flex-row pt-4 justify-between space-x-4">
                        <div className = "border-white border-4 ring-offset-2 ring-2 ring-white w-24 h-24 rounded-lg">
                            <div className = "flex flex-col items-center pt-1 justify-center">
                                <div className = "text-white text-xl"> {props.stat1_name} </div>
                                <div className = "text-white text-4xl"> {props.stat1} </div>
                            </div>
                        </div>

                        <div className = "border-white border-4 ring-offset-2 ring-2 ring-white w-24 h-24 rounded-lg">
                            <div className = "flex flex-col items-center pt-1 justify-center">
                                <div className = "text-white text-xl"> {props.stat2_name} </div>
                                <div className = "text-white text-4xl"> {props.stat2} </div>
                            </div>
                        </div>

                        <div className = "border-white border-4 ring-offset-2 ring-2 ring-white w-24 h-24 rounded-lg">
                            <div className = "flex flex-col items-center pt-1 justify-center">
                                <div className = "text-white text-xl"> {props.stat3_name} </div>
                                <div className = "text-white text-4xl"> {props.stat3} </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={props.isLong ? longClass : "flex-shrink text-white text-xl leading-10 mt-24"}>{props.bio}</div>
            </div>
        </div>
    )
}

export default CrewMember;