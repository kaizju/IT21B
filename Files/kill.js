class choy{
    constructor (list,date,time,due){
     this.list = list;
     this.date = date;
     this.time = time;
     this.due = due;
    }
    displaychoy(){
        console.log("Important Schedule "+this.list);
        console.log("Date Start: "+this.date);
        console.log("Time Start: "+this.time);
        console.log("Deadline: "+this.due);

    }
}
const choy1 = new choy("1: OOP Assignment","09/09/2024","10PM","12AM");
const choy2 = new choy("2: IT Officers Meeting","10/18/2024","5PM","8PM");
const choy3 = new choy("3: Multimedia Project","10/28/2024","7AM","5PM");
console.log("IMPORTANT SCHEDULE!!!")
choy1.displaychoy();
choy2.displaychoy();
choy3.displaychoy();