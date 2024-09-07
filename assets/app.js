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
let foreCastLocation;
document.getElementById("DOM");
document.getElementById("btn-search").addEventListener("click", () => {
  search();

  foreCastLocation = document.getElementById("txt-search").value;
  foreCast();

  console.log(document.getElementById("txt-search").value);
});
document.getElementById("txt-search").addEventListener("click", () => {
  document.getElementById("txt-search").value = "";
  window.onload;
});
function search() {
  document.getElementById("btn-search").addEventListener("click", () => {
    var location = document.getElementById("txt-search").value;
    foreCastLocation = location;
    url = `http://api.weatherapi.com/v1/current.json?key=6b9fad01b91c43c4b36102328242608&q=${location}&aqi=no`;
    fetch(url)
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
  getAlerts();
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

// -------------------forecast-------------------------------
let fMaxTemp, fMinTemp;
let maxInCel, maxInfar, minInCel, minInFar;
let cardForecast;
let dayHistry;
function foreCast() {
  fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=6b9fad01b91c43c4b36102328242608&q=${foreCastLocation}&days=7&aqi=no&alerts=yes
`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.forecast.forecastday[0].date + "pllplpl");
      dayHistry = data.forecast.forecastday[0].date;
      console.log(data.forecast.forecastday.length);
      for (let i = 0; i < data.forecast.forecastday.length; i++) {
        switch (i) {
          case 0:
            cardForecast = document.getElementById("day-1");
            break;
          case 1:
            cardForecast = document.getElementById("day-2");
            break;
          case 2:
            cardForecast = document.getElementById("day-3");
            break;
          case 3:
            cardForecast = document.getElementById("day-4");
            break;
          case 4:
            cardForecast = document.getElementById("day-5");
            break;
          case 5:
            cardForecast = document.getElementById("day-6");
            break;
          case 6:
            cardForecast = document.getElementById("day-7");
            break;
        }
        let fTitle = cardForecast.childNodes[1];
        let fConditionImage = cardForecast.childNodes[3].childNodes[1];
        let fConditionText = cardForecast.childNodes[3].childNodes[3];
        fMaxTemp = cardForecast.childNodes[5].childNodes[1];
        fMinTemp = cardForecast.childNodes[5].childNodes[3];
        let fperciption =
          cardForecast.childNodes[7].childNodes[1].childNodes[3];
        fperciption.innerText =
          data.forecast.forecastday[i].day.daily_chance_of_rain + "%";
        console.log(fperciption.innerText);
        fTitle.innerText = data.forecast.forecastday[i].date;
        fConditionImage.src = data.forecast.forecastday[i].day.condition.icon;
        fConditionText.innerText =
          data.forecast.forecastday[i].day.condition.text;
        maxInfar = data.forecast.forecastday[i].day.maxtemp_f;
        minInFar = data.forecast.forecastday[i].day.mintemp_f;
        maxInCel = data.forecast.forecastday[i].day.maxtemp_c;
        minInCel = data.forecast.forecastday[i].day.mintemp_c;
        if (celsius.childNodes[1].textContent.startsWith("f")) {
          fMaxTemp.innerText =
            data.forecast.forecastday[i].day.maxtemp_f + " \u00B0F";
          fMinTemp.innerText =
            data.forecast.forecastday[i].day.mintemp_f + " \u00B0F";
        } else {
          fMaxTemp.innerText =
            data.forecast.forecastday[i].day.maxtemp_c + " \u00B0C";
          fMinTemp.innerText =
            data.forecast.forecastday[i].day.mintemp_c + " \u00B0C";
        }
      }
      console.log(data.alerts);
    });

  console.log(foreCastLocation + "farcast");
}
console.log(dayHistry + "jfskdjsdhdjsddka");

// -------------------change symbol-----------

faren.addEventListener("click", () => {
  foreCast();
  if (celsius.childNodes[1].textContent.startsWith("f")) {
    fMaxTemp.innerText = maxInfar + " \u00B0F";
    fMinTemp.innerText = minInFar + " \u00B0F";
  } else {
    fMaxTemp.innerText = maxInCel + " \u00B0C";
    fMinTemp.innerText = minInCel + " \u00B0C";
  }
});

celsius.addEventListener("click", () => {
  foreCast();
  if (celsius.childNodes[1].textContent.startsWith("f")) {
    fMaxTemp.innerText = maxInfar + " \u00B0F";
    fMinTemp.innerText = minInFar + " \u00B0F";
  } else {
    fMaxTemp.innerText = maxInCel + " \u00B0C";
    fMinTemp.innerText = minInCel + " \u00B0C";
  }
});

let headline, situation, areas, timeRange, impact;

function getAlerts() {
  document.getElementById("btn-search").addEventListener(
    "click",
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=6b9fad01b91c43c4b36102328242608&q=${foreCastLocation}&days=1&aqi=no&alerts=yes`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.alerts.alert[0]);
        if (data.alerts.length <= 0) {
          let message = document.createElement("div");
          message.classList.add("n-message");
          message.innerHTML = `<h3>No Alerts...</h3>`;
          document.getElementById("noticeRow").appendChild(message);
        } else {
          data.alerts.alert.forEach((alert) => {
            headline = alert.headline;
            console.log(alert.desc, alert.event);
            let efc = alert.effective;
            let afcDay = alert.effective.substr(0, 10);
            let efcTime = alert.effective.substr(11, 8);
            let expDay = alert.expires.substr(0, 10);
            let expTime = alert.expires.substr(11, 8);
            console.log(efcTime);

            console.log("From : " + afcDay + " Since " + efcTime);
            console.log(" : " + expDay + " till " + expTime);
            let tArray = [];
            alert.desc.split("\n").forEach((text) => tArray.push(text));
            console.log(tArray);

            for (let i = 0; i < tArray.length; i++) {
              if (tArray[i].startsWith("* WHAT...")) {
                console.log(tArray[i].replace("* WHAT...", ""));
                situation = tArray[i].replace("* WHAT...", "");
                // console.log(tArray[i].replace("* WHAT...", ""));
              }
              if (tArray[i].startsWith("* WHERE...")) {
                console.log(tArray[i].replace("* WHERE...", ""));
                areas = tArray[i].replace("* WHERE...", "");
                // console.log(areas);
              }
              if (tArray[i].startsWith("* WHEN...")) {
                console.log(tArray[i].replace("* WHEN...", ""));
                timeRange = tArray[i].replace("* WHEN...", "");
                // console.log(timeRange);
              }
              if (tArray[i].startsWith("* IMPACTS...")) {
                console.log(tArray[i].replace("* IMPACTS...", ""));
                impact = tArray[i].replace("* IMPACTS...", "");
                // console.log(impact);
              }
              if (tArray[i].length === 0) {
                console.log(tArray[i]);
                continue;
              }
            }

            let noticeCard = document.createElement("div");
            noticeCard.classList.add("card");
            noticeCard.classList.add("text-bg-secondary");
            noticeCard.classList.add("mb-3");
            noticeCard.id = "noticeCard";
            noticeCard.innerHTML = `
                      <div id="noticeHeading" class="card-header">${headline}</div>
                      <div class="card-body">
                        <h5 id="situation" class="card-title"> ${situation}</h5>
                        <p id="areas" class="card-text">Areas --> ${areas}</p>
                        <p id="time-range" class="card-text">Time --> ${timeRange}</p>
                        <p id="impact" class="card-text">Impact --> ${impact}</p>
  
                      </div>
  
               `;

            document.getElementById("noticeRow").appendChild(noticeCard);
            console.log(
              situation + " \n\n" + areas + "\n\n" + timeRange + "\n\n" + impact
            );
          });
        }
      })
      .then(() => {
        Location.reload();
      })
  );
}

// -------------Historical Weather Data-------------

let hisrtyUrl;

// let histryYear = dayHistry.substr(0, 4);

// let today = ;
let dat = new Date().getUTCDate();
var c = dat;
// for (let i = dat; i > 0; i--) {
//   console.log(i);
// }

let cnt = 0;
let year = 2024;
dat = 9;
let mHistry = [];
let mYear = [year];
while (dat != 0) {
  if (dat < 12) {
    console.log(dat);
    mHistry.push(dat);
    cnt++;

    dat--;
    if (dat == 0) {
      year -= 1;
      for (let i = 12, j = 12 - cnt; j >= 1; j--, i--) {
        console.log(i);
        mHistry.push(i);
      }
      console.log(year);
      mYear.push(year);
    }
  }
}
console.log(mYear, mHistry);

mHistry.forEach((month) => {
  if (month == 12) {
    fetch(
      `http://api.weatherapi.com/v1/history.json?key=6b9fad01b91c43c4b36102328242608&q=New York&dt=${mYear[1]}-0${month}-01`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  fetch(
    `http://api.weatherapi.com/v1/history.json?key=6b9fad01b91c43c4b36102328242608&q=New York&dt=${mYear[0]}-0${month}-01`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
});

// --------------------------------------------------

// revers Geocoding

// https://us1.locationiq.com/v1/reverse?key=pk.b0b0056982878238716759112ee9c218&lat=51.50344025&lon=-0.12770820958562096&format=json&
