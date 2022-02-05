function Calendar() {
    return(
        <div className = "flex flex-col p-8 h-calendar space-y-2">
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23E4C441&ctz=America%2FNew_York&mode=MONTH&showNav=1&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=1&src=amtvaHJ0N0BnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=MGNnaDlsNzZmcm1wMjJvaXBzbG8ydjgzdWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Zmc3Y2NhcW1lb29zZnN1cnRlaTgwdmgzbzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%237986CB&color=%23F6BF26&color=%234285F4&color=%23B39DDB&color=%23D50000" className = "flex-grow border-4 border-yellow-400"></iframe>
        </div>
    )
}

export default Calendar;