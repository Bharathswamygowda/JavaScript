// Template Literals
const name = "Bharath";
const age = 28;
const job = "Web Developer";
const city = "Bangalore";
let bioData;

bioData = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
</ul>
`;

document.getElementById("Template_literal").innerHTML = bioData;
