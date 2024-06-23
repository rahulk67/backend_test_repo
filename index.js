let express = require("express");
let app = express();

let PORT = 3000;

// API Call: http://localhost:3000/github-profile?username=ankitkumar123
function generateProfileUrl(username) {
  return `https://api.github.com/users/${username}`;
}
app.get("/github-profile", (req, res) => {
  let username = req.query.username;
  res.send(generateProfileUrl(username));
});

// API Call: http://localhost:3000/certificate?firstName=Amit&lastName=Ranjan&courseName=BytR
function generateCertificate(firstName, lastName, courseName) {
  return (
    "This certification is awarded to " +
    firstName +
    " " +
    lastName +
    " for completing the course " +
    courseName
  );
}

app.get("/certificate", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let courseName = req.query.courseName;
  res.send(generateCertificate(firstName, lastName, courseName));
});

// API Call: <http://localhost:3000/grade?maths=70&science=82&english=75>
function calculateGrade(maths, science, english) {
  let gradePercentage = ((maths + science + english) / 300) * 100;
  return "Your grade in percentage is " + gradePercentage + "%";
}

app.get("/grade", (req, res) => {
  let maths = parseInt(req.query.maths);
  let science = parseInt(req.query.science);
  let english = parseInt(req.query.english);
  res.send(calculateGrade(maths, science, english));
});

// API Call: http://localhost:3000/split-bill?billAmount=150&numberOfFriends=3
function splitBill(billAmount, numberOfFriends) {
  let eachFriendOwe = billAmount / numberOfFriends;
  return "Result: Each friend owes Rs. " + eachFriendOwe + " against the bill";
}

app.get("/split-bill", (req, res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseFloat(req.query.numberOfFriends);
  res.send(splitBill(billAmount, numberOfFriends));
});

// API Call:http://localhost:3000/monthly-salary?hourlyWage=2000&totalHours=160
function calculateSalary(hourlyWage, totalHours) {
  let monthlySalary = hourlyWage * totalHours;
  return "Result: Your monthly salary is ₹" + monthlySalary;
}

app.get("/monthly-salary", (req, res) => {
  let hourlyWage = parseFloat(req.query.hourlyWage);
  let totalHours = parseFloat(req.query.totalHours);
  res.send(calculateSalary(hourlyWage, totalHours));
});

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});