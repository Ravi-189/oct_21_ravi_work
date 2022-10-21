function numofdays(month)
{
    switch (month)
    {
        case month == "january" || month == "march" || month == "may" || month == "july" || month == "august" || month == "october" || month == "december":
            console.log("There are 31 days in", month);
            break;

        case month == "Febuary":
            console.log("There are 28 days in ", month);
            break;
        

        case month == "april" || month == "june" || month == "september" || month == "november" :
            console.log("There are 30 days in ", month);
            break;

    }
}
numofdays("march")