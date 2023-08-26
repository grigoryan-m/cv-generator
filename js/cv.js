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

document.addEventListener('DOMContentLoaded', function () {
  const data = [findGetParameter("name"), findGetParameter("con1"), findGetParameter("con2"), findGetParameter("con3"), findGetParameter("sum")];
  document.getElementById("name").innerText = data[0];
  document.getElementById("phone").innerText = data[1];
  document.getElementById("email").innerText = data[2];
  document.getElementById("portfolio").innerText = data[3];
  document.getElementById("summary").innerText = data[4];
});
