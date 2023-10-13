const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status')
const temp=document.getElementById('temp');
const temp_real_val=document.getElementById('temp_real_val');
const dataHide=document.querySelector('.middle_layer');
const day=document.getElementById('day');
const today_data=document.getElementById('today_date');
const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentTime = new Date();
    day.innerText=weekday[currentTime.getDay()];
};
getCurrentDay();
const getCurrentTime = () => {
    var months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
    ];
    var now = new Date();
    var month = months[now.getMonth()];
    var day = now.getDate();
    var hours = now.getHours();
    var mins = now.getMinutes();

    let period = "AM";
    if (hours > 11) {
        period = "PM";
        if (hours > 12) hours -= 12;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    today_data.innerText=`${day} ${month} `;
};
getCurrentTime();

const getInfo = async (event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal===""){
         city_name.innerText='plz write the name before search';
         dataHide.classList.add('data_hide');
   }else{
    try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=2a7aa5f03e489aad695fed3f9435bcaf`;
        const res=await fetch(url);
        const data=await res.json();
        const arrData=[data];
        console.log(arrData);
        city_name.innerText=`${arrData[0].name} , ${arrData[0].sys.country}`;
        temp_real_val.innerText=arrData[0].main.temp;
        const tempStatus=arrData[0].weather[0].main;
        if(tempStatus=="Clear"){
            temp_status.innerHTML= "<i class='fas fa-solid fa-sun' style='color : #eccc68;' ></i>";
        }else if(tempStatus=="Clouds"){
            temp_status.innerHTML=" <i class='fas fa-solid fa-cloud' style='color : #dfe4ea;' ></i>";
        }else if(tempStatus=="Rain"){
            temp_status.innerHTML=" <i class='fas fa-solid fa-rain' style='color : #a4b0be;' ></i>";
        }else{
            temp_status.innerHTML="<i class='fas fa-solid fa-sun' style='color : #eccc68;' ></i>";
        }
        dataHide.classList.remove('data_hide');
       }catch{
        city_name.innerText='plz write the city name properly';
        dataHide.classList.add('data_hide');
       }
    }
}

submitBtn.addEventListener('click',getInfo); 