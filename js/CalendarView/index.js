const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let cal = document.getElementById('cal');
let ctr = 0;
function prevMonth() {
    cal.innerHTML = "";
    ctr--;
    DisplayCalendar()
}
function nextMonth() {
    cal.innerHTML = "";
    ctr++;
    DisplayCalendar()
}
function DisplayCalendar() {
    const demoDate = new Date();
    let CurrDateObject = new Date(demoDate.getFullYear(), demoDate.getMonth() + ctr);
    let noOfDays = (new Date(demoDate.getFullYear(), demoDate.getMonth() + ctr + 1, 0)).getDate();
    let firstDay = CurrDateObject.getDay();

    const thead = document.createElement('thead');
    let tr = document.createElement('tr');
    for (let i = 0; i < days.length; i++) {
        let td = document.createElement('td');
        td.append(days[i]);
        tr.append(td);
    }
    thead.append(tr);
    cal.append(thead);
    const tbody = document.createElement('tbody');
    let tro = document.createElement('tr');
    let StoredFirstDay = firstDay;
    while (firstDay) {
        let td = document.createElement('td');
        tro.append(td);
        firstDay--;
    }
    let dayIterator = 1;
    while (dayIterator <= noOfDays) {
        for (; StoredFirstDay < 7; StoredFirstDay++) {
            let td = document.createElement('td');
            if (dayIterator == demoDate.getDate() && demoDate.getMonth() === CurrDateObject.getMonth()) {
                td.style.backgroundColor = 'grey'
            } else if (StoredFirstDay == 5) {
                td.style.color = 'green'
            } else if (StoredFirstDay == 0) {
                td.style.color = 'red'
            }
            td.append(dayIterator);
            tro.append(td);
            dayIterator++;
            if (dayIterator > noOfDays) {
                break;
            }
        }
        console.log(StoredFirstDay);
        if (dayIterator > noOfDays) {
            break;
        }
        cal.append(tro);
        tro = document.createElement('tr');
        StoredFirstDay = 0;
    }
    while (6 - StoredFirstDay) {
        let td = document.createElement('td');
        tro.append(td);
        StoredFirstDay++;
    }
    cal.append(tro);
    document.getElementById('month').innerHTML = `${months[CurrDateObject.getMonth()]} ${CurrDateObject.getFullYear()}`
}
DisplayCalendar();