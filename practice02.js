const voting = function(age) {
    this.Age = parseInt(age),
    this.isEligible = function () {
        if(this.Age>=18)
            return "You are eligible for voting.";
        else return "Sorry, you are  eligible for voting. Come back later."
    }
}
const candidate1 = new voting("44yrs");
console.log("For candidate1 =>", candidate1.isEligible());
const candidate2 = new voting("15yrs");
console.log("For candidate2 =>", candidate2.isEligible());
