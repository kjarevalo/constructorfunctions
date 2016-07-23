
var prompt = require('prompt');

var student = function(name, gender, grade, GPA, dententions, sleepingInClass, catchPhrase){
	this.name = name;
	this.gender = gender;
	this.grade = grade;
	this.GPA = GPA;
	this.detentions = detentions;
  	this.sleepingInClass = sleepingInClass;
  	this.catchPhrase = catchPhrase;
  	this.canStudentHaveFun = function () {
  		if((detentions < 10 ) && (GPA > 2)) {
  			console.log (this.name + "can have fun")
  		}
  	};
};
