//https://api.weatherapi.com/v1/search.json?key=6b9fad01b91c43c4b36102328242608&q=

var icon = document.getElementById("themeIcon");

icon.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  console.log("ko");

  if (document.body.classList.contains("light-mode")) {
    icon.src = "images/darkModeIcon.png";
  } else {
    icon.src = "images/lightModeIcon.png";
  }
});

//  -------------------change Symbol-----------------------
//let caty ;
// var faren = document.querySelector(".ct2");
// var caty = null;
// if (caty == null) {
//   caty = faren;
// }
// faren.addEventListener("click", () => {
//   caty = document.querySelector(".ct");
// });
// caty.addEventListener("click", changeBg);

var celsius = document.querySelector(".ct");

var faren = document.querySelector(".ct2");

faren.addEventListener("click", () => {
  let temp = faren.childNodes[3].src;
  let tempTxt = faren.childNodes[1].textContent;
  if (celsius.childNodes[3].src != temp) {
    //**  -----swap icon------------

    faren.childNodes[3].src = celsius.childNodes[3].src;
    celsius.childNodes[3].src = temp;

    //**------swap text----
    faren.childNodes[1].textContent = celsius.childNodes[1].textContent;
    celsius.childNodes[1].textContent = tempTxt;
    console.log(faren.childNodes[1].textContent);
  }

  //   faren.childNodes[3].src = celsius.childNodes[3].src;
  //   celsius.childNodes[3].src = temp;
  //   console.log(celsius.childNodes[3].src.contains);
});

celsius.addEventListener("click", () => {
  let temp = celsius.childNodes[3].src;
  let tempTxt = celsius.childNodes[1].textContent;
  if (temp != faren.childNodes[3].src) {
    // -------swap icon---------

    celsius.childNodes[3].src = faren.childNodes[3].src;
    faren.childNodes[3].src = temp;

    // ------------swap text------
    celsius.childNodes[1].textContent = faren.childNodes[1].textContent;
    faren.childNodes[1].textContent = tempTxt;
    console.log(celsius.childNodes[1].textContent);

    //   faren.childNodes[3].src = tempp;
  } //else {
  //     celsius.childNodes[3].src = faren.childNodes[3].src;
  //     faren.childNodes[3].src = tempp;
  //   }
});

// ---------------------Add Card ------------------------------------

let details = [];
function search() {
  let location = document.getElementById("txt-search").value;
  document.getElementById("btn-search").addEventListener("click", () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=6b9fad01b91c43c4b36102328242608&q=${location}&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => details.push(data));
  });
  details.forEach((d) => {
    console.log(d);
    var temC = d.current.temp_c;
    var fLike = d.current.feelslike_c;

    var humidity = d.current.humidity;
    var textWCond = d.current.condition.text;
    var pressure = d.current.pressure_in;
    var wUrl = d.current.condition.icon;
    var dewP = d.current.dewpoint_c;

    var windDir = d.current.wind_dir;
    var windKph = d.current.wind_kph;
    console.log(d.current.wind_mph);
    if (
      (celsius.childNodes[1].textContent.startsWith("f") &&
        windMeasurment.startsWith("k")) ^
      (celsius.childNodes[1].textContent.startsWith("f") &&
        windMeasurment.startsWith("m"))
    ) {
      temC = d.current.temp_f;
      fLike = cd.current.feelslike_f;
      dewP = d.current.dewpoint_f;
      if (windMeasurment.startsWith("m")) {
        windKph = d.current.wind_mph;
      }
      if (pressMeasurement.startsWith("i")) {
        pressure = d.current.pressure_in;
      }
    }

    setDetails(
      temC,
      textWCond,
      wUrl,
      windKph,
      dewP,
      pressure,
      fLike,
      humidity,
      windDir
    );
  });
}

function setDetails(
  temp,
  txtCondition,
  url,
  wind,
  dew,
  pressure,
  feelsLike,
  humid,
  windDir
) {
  document.getElementById("wCond").src = url;
  document.getElementById("cTemp").innerText = temp;

  // -------select Measurement--------
  const choosedVal = document.getElementById("windSelect");
  var windMeasurment = choosedVal.value;
  choosedVal.addEventListener("click", () => {
    windMeasurment = document.getElementById("windSelect").value;
    if (windMeasurment.startsWith("m")) {
      document.getElementById("windD").innerText = wind + " mph";
    } else {
      document.getElementById("windD").innerText = wind + " kph";
    }
  });

  const choosedPres = document.getElementById("presSelect");
  var pressMeasurement = choosedPres.value;
  choosedPres.addEventListener("click", () => {
    pressMeasurement = document.getElementById("presSelect").value;
    if (pressMeasurement.startsWith("m")) {
      document.getElementById("pressD").innerText = pressure + " mb";
    } else {
      document.getElementById("pressD").innerText = pressure + " in";
    }
  });
  document.getElementById("windD").innerText = wind + " kph";
  document.getElementById("pressD").innerText = pressure + " mb";
  document.getElementById("dewD").innerText = dew;
  document.getElementById("feelsL").innerText = feelsLike;
  document.getElementById("humidD").innerText = humid;
  document.getElementById("txtCond").innerText = txtCondition;
}

// ---------------------------------------
