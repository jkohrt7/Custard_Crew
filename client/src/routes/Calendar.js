function Calendar() {
    return(
        <div className = "flex flex-col p-8 h-calendar space-y-2 justify-center min-w-screen">
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23F6BF26&ctz=America%2FNew_York&showTitle=0&showNav=1&showPrint=0&showTabs=1&showCalendars=0&mode=MONTH&src=Zmc3Y2NhcW1lb29zZnN1cnRlaTgwdmgzbzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Z25tNDE5M3FiaTh2YXVrOTM5MzF0Y2s4dDNhbmFwaHBAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23B39DDB&color=%233F51B5&color=%23D50000" 
                className = "m-auto h-full w-full  max-w-7xl border-4 border-yellow-400 "></iframe>
        </div>
    )
}

export default Calendar;