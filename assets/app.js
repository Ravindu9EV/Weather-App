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

// ---------------get Input-----------

//

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

let latitudeG, longitudeG, tempF, windMph, fLikeF, dewPF, pressureM;
let country, region, cityN, time;
let map;
document.getElementById("btn-search").addEventListener("click", () => {
  search();
  console.log(document.getElementById("txt-search").value);
});
document.getElementById("txt-search").addEventListener("click", () => {
  document.getElementById("txt-search").value = "";
  window.onload;
});
function search() {
  document.getElementById("btn-search").addEventListener("click", () => {
    var location = document.getElementById("txt-search").value;
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=6b9fad01b91c43c4b36102328242608&q=${location}&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => details.push(data));
  });
  details.forEach((d) => {
    console.log(d);
    var tempC = d.current.temp_c;
    tempF = d.current.temp_f;
    var fLike = d.current.feelslike_c;
    fLikeF = d.current.feelslike_f;
    var humidity = d.current.humidity;
    var textWCond = d.current.condition.text;
    var pressure = d.current.pressure_in;
    pressureM = d.current.pressure_mb;
    var wUrl = d.current.condition.icon;
    var dewP = d.current.dewpoint_c;
    dewPF = d.current.dewpoint_f;
    var windDir = d.current.wind_dir;
    var windKph = d.current.wind_kph;
    windMph = d.current.wind_mph;
    console.log(d.current.wind_mph);

    latitudeG = d.location.lat;
    longitudeG = d.location.lon;
    var lattt = d.location.lat;
    var lontt = d.location.lon;
    // country=d.location.Regi;
    cityN = d.location.name;
    region = d.location.region;
    country = d.location.country;

    var timeZone = d.location.tz_id;
    console.log(cityN);

    // --------get longitude and latitude--------
    console.log(d.location.lon);
    document;

    if (document.querySelector(".wImage")) {
      document
        .getElementById("w-row")
        .removeChild(document.querySelector(".wImage"));
    }

    if (document.querySelector(".wCard")) {
      document
        .getElementById("w-row")
        .removeChild(document.querySelector(".wCard"));
    }

    let newCard = document.createElement("div");
    newCard.classList.add("wCard");

    newCard.innerHTML = `
    
    <h4 id="locDHead">Weather details</h4>
              <h6 id="feelsL">Humidity</h6>
              <div class="midRow">
                <img id="wCond" src="images/pCloudy.png" alt="">
                <p id="cTemp">Temperature</p>
                <p id="txtCond">cloud</p>
              </div>
              <div class="bRow">
                <div class="dSub">
                  <div class="headSec">
                    <p  class="dHead">Wind</p>
                  <select id="windSelect">
                    <option value="kph" selected>kph</option>
                    <option value="mph">mph</option>
                  </select>
                  </div>
                <p id="windD" class="dBody">7878.12&</p>
                </div>
                <div class="dSub">
                  <div class="headSec">
                    <p  class="dHead">Pressure</p>
                  <select id="presSelect">
                    <option value="in" selected>in</option>
                    <option value="mb">mb</option>
                  </select>
                  </div>
                <p id="pressD" class="dBody">7878.12</p>
                </div>
                <div class="dSub">
                  <p  class="dHead">Humidity</p>
                <p id="humidD" class="dBody">7878.12</p>
                </div>
                <div class="dSub">
                  <div class="headSec">
                    <p   id="dew" class="dHead">Dew Point</p>
                  <select id="dewSelect">
                    <option value="celsius" selected>&#8451;</option>
                    <option value="farenhite">&#8457;</option>
                  </select>
                  </div>
                <p id="dewD" class="dBody">7878.12</p>
                </div>
              </div>
    
    
    `;
    document.getElementById("w-row").appendChild(newCard);

    let newMap = document.createElement("div");
    newMap.id = "map";
    newMap.classList.add("wImage");
    newMap.style.height = "100%";
    document.getElementById("w-row").appendChild(newMap);

    map = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // ----------------------------

    setDetails(
      tempC,
      textWCond,
      wUrl,
      windKph,
      dewP,
      pressure,
      fLike,
      humidity,
      windDir,
      lattt,
      lontt
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
  windDir,
  lattt,
  lontt
) {
  document.getElementById("wCond").src = url;

  document.getElementById("cTemp").innerText = temp + " \u00B0C";
  document.getElementById("feelsL").innerText = feelsLike + " \u00B0C";
  document.getElementById("dewD").innerText = dew + " \u00B0C";

  celsius.addEventListener("click", () => {
    if (celsius.childNodes[1].textContent.startsWith("f")) {
      document.getElementById("cTemp").innerText = tempF + " \u00B0F";
      document.getElementById("feelsL").innerText = fLikeF + " \u00B0F";
      document.getElementById("dewD").innerText = dewPF + " \u00B0F";
    } else {
      document.getElementById("cTemp").innerText = temp + " \u00B0C";
      document.getElementById("feelsL").innerText = feelsLike + " \u00B0C";
      document.getElementById("dewD").innerText = dew + " \u00B0C";
    }
  });
  faren.addEventListener("click", () => {
    if (celsius.childNodes[1].textContent.startsWith("f")) {
      document.getElementById("cTemp").innerText = tempF + " \u00B0F";
      document.getElementById("feelsL").innerText = fLikeF + " \u00B0F";
      document.getElementById("dewD").innerText = dewPF + " \u00B0F";
    } else {
      document.getElementById("cTemp").innerText = temp + " \u00B0C";
      document.getElementById("feelsL").innerText = feelsLike + " \u00B0C";
      document.getElementById("dewD").innerText = dew + " \u00B0C";
    }
  });

  // -------select Measurement--------
  const choosedVal = document.getElementById("windSelect");
  var windMeasurment = choosedVal.value;
  choosedVal.addEventListener("click", () => {
    windMeasurment = document.getElementById("windSelect").value;
    if (windMeasurment.startsWith("m")) {
      document.getElementById("windD").innerText = windMph + " mph";
    } else {
      document.getElementById("windD").innerText = wind + " kph";
    }
  });

  // ------------Pressure selection-----------
  const choosedPres = document.getElementById("presSelect");
  var pressMeasurement = choosedPres.value;
  choosedPres.addEventListener("click", () => {
    pressMeasurement = document.getElementById("presSelect").value;
    if (pressMeasurement.startsWith("m")) {
      document.getElementById("pressD").innerText = pressureM + " mb";
    } else {
      document.getElementById("pressD").innerText = pressure + " in";
    }
  });
  document.getElementById("windD").innerText = wind + " kph";

  // ---------------------- Dew Point Selection---------

  const choosedDew = document.getElementById("dewSelect");
  var dewMeasurement = choosedDew.value;

  choosedDew.addEventListener("click", () => {
    dewMeasurement = choosedDew.value;
    console.log(dewMeasurement);

    if (dewMeasurement.startsWith("f")) {
      document.getElementById("dewD").innerText = dewPF + " \u00B0F";
    } else {
      document.getElementById("dewD").innerText = dew + " \u00B0C";
    }
  });

  //---------------------------------------------------

  if (pressMeasurement.startsWith("i")) {
    document.getElementById("pressD").innerText = pressure + " in";
  } else {
    document.getElementById("pressD").innerText = pressureM + " mb";
  }

  document.getElementById("humidD").innerText = humid;
  document.getElementById("txtCond").innerText = txtCondition;

  // ----------set card head details-----------

  const title = document.getElementById("locDHead");
  title.innerText = cityN + ", " + region + ", " + country;

  longitudeG = lontt;
  latitudeG = lattt;
  success();
}

// ---------------------------------------

//----------------Geo location-------------------
// -----------used google maps example---------

window.onload = function () {
  map = L.map("map").setView([51.505, -0.09], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
};

navigator.geolocation.watchPosition(success, error);

let marker, circle, zoomed;

function success(position) {
  const latt = position.coords.latitude;
  const lngt = position.coords.longitude;
  const accuracy = position.coords.accuracy;
  if (marker) {
    map.removeLayer(marker);
    map.removeLayer(circle);
  }
  if (latitudeG != null && longitudeG != null) {
    marker = L.marker([latitudeG, longitudeG]).addTo(map);
    circle = L.circle([latitudeG, longitudeG], { radius: accuracy }).addTo(map);
    map.setView([latitudeG, longitudeG]);
  } else {
    marker = L.marker([latt, lngt]).addTo(map);
    circle = L.circle([latt, lngt], { radius: accuracy }).addTo(map);
  }

  if (!zoomed) {
    zoomed = map.fitBounds(circle.getBounds());
  }
}

function error(err) {
  if (err.code === 1) {
    alert("Please allow geolocation access");
  } else {
    alert("Cannot get current location");
  }
}
