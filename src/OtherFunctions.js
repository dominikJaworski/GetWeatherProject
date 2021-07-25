export const getCurrentDateandTime = () => {
    const thisdate = new Date();
    //REMINDER: change date string return
    //const today = thisdate.getDate thisdate.getDate() + " / " + (thisdate.getMonth() + 1) + " / " + thisdate.getFullYear();
    const today = <div><h2 className="day-dayname">{getDayOfWeek(thisdate.getDate())}</h2>
    <span className="day-date">{getMonthName(thisdate.getMonth())} {thisdate.getDate()}, {thisdate.getFullYear()}</span></div>

    return today;
}

const getMonthName = (monthNumber) => {
    switch(monthNumber){
        case 1: return "February"
            ;
        case 2: return "March"
            ;
        case 3: return "April"
            ;
        case 4: return "May"
            ;
        case 5: return "June"
            ;
        case 6: return "July"
            ;
        case 7: return "August"
            ;
        case 8: return "September"
            ;
        case 9: return "October"
            ;
        case 10: return "November"
            ;
        case 11: return "December"
            ;
        default: return "January"
    }
}

const getDayOfWeek = (dayNumber) => {
    switch(dayNumber){
        case 1: return "Monday"
            ;
        case 2: return "Tuesday"
            ;
        case 3: return "Wednesday"
            ;
        case 4: return "Thursday"
            ;
        case 5: return "Friday"
            ;
        case 6: return "Saturday"
            ;
        default: return "Sunday"
    }
}