// let activity = "roller-skate"
function saturdayFun(activity = "roller-skate") {
    return activity === "bathe my dog"?"This Saturday, I want to bathe my dog!" : `This Saturday, I want to ${activity}!`

}
console.log(saturdayFun());

function mondayWork(activity2 = "go to the office") {
    return activity2 === "work from home."?"This Monday, I will work from home." : `This Monday, I will ${activity2}.`
         
}
console.log(MondayWork());

function wrapAdjective(str= "*") {
    return function(name="special") {
        return `You are ${str}${name}${str}!`
    }
}