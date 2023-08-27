// Function to get parameters from the url
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}
// Waiting until DOM is loaded
document.addEventListener('DOMContentLoaded', function () {

  // Getting all our get parameters;
  const data = [findGetParameter("name"), findGetParameter("con1"), findGetParameter("con2"), findGetParameter("con3"), findGetParameter("sum"), findGetParameter("skill1"), findGetParameter("skill2"),findGetParameter("skill3"),findGetParameter("skill4"),findGetParameter("skill5"),findGetParameter("skill6")]
  // Changing our elements values to user data
  document.getElementById("name").innerText = data[0];
  document.getElementById("phone").innerText = data[1];
  document.getElementById("email").innerText = data[2];
  document.getElementById("portfolio").innerText = data[3];
  document.getElementById("summary").innerText = data[4];
  document.getElementById("career").innerHTML = findGetParameter("exp");
  document.getElementById("lang").innerHTML = findGetParameter("lang")
  for(let i = 5; i < data.length; i++){
    document.getElementById("skills_list").innerHTML += "<li>" + data[i] + "</li>";
  }
  var element = document.getElementsByClassName('wrapper')[0];
  html2pdf(element);
});
