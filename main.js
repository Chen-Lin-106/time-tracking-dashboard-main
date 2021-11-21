let request = new XMLHttpRequest();
request.open("GET", "./data.json", true);
request.responseType = "text";
request.onload = function () {
  if (request.status === 200) {
    var data = JSON.parse(request.responseText);
    titleContent = data[0].title;
    const tag = document.createElement("p");
    tag.innerHTML = titleContent;
    const element = document.querySelector(".card-title");
    element.appendChild(tag);
    const tag2 = document.createElement("p");
    tag2.innerHTML = data[0].timeframes.weekly.current + "hrs";
    const element2 = document.querySelector(".card-hours");
    element2.appendChild(tag2);
    const tag3 = document.createElement("p");
    tag3.innerHTML = "Last Week - " + data[0].timeframes.weekly.previous + "hrs";
    const element3 = document.querySelector(".card-hours");
    element3.appendChild(tag3);

    console.log(data);
  }
};
request.send();
