class Reminders{
    constructor(){
        this.reminders=[]
    }
    getReminders = () =>{
        return this.reminders;
    }
    createReminders = (data) =>{
        if(this.reminders.length===0){
            data.id=1;
        }else{
            data.id=this.reminders[this.reminders.length-1].id+1
        }
        data.status="Sin Leer";
        this.reminders.push(data);
        return data;
    }
    completeReminder = (data) =>{
        let index = this.reminders.findIndex(rem=>rem.id===data.id)
        if(index!==1){
            this.reminders[index].status="Leido";
            return this.reminders[index];
        }else{
            throw new Error("no reminders");
        }
    }
    deleteReminder = () =>{
        this.reminders = this.reminders.filter(rem=>rem.status="Sin Leer")
        return this.reminders
    }
}
const reminder = new Reminders(); 
export default reminder