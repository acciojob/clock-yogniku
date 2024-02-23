//your JS code here. If required.
let para = document.querySelector("#timer")
function currentTime(){
    
        let date = new Date();
        let hour = date.getHours()
        let min = date.getMinutes()
        let sec = date.getSeconds()
        let day = date.getDay()
        let month = date.getMonth()
        let year = date.getFullYear()
	  let arrTimer = convertTime(hour,min,sec)
	for(let i=0; i<=2; i++){
            arrTimer[i] = addZero(arrTimer[i])
        }
        let time = ` ${arrTimer[0]} : ${arrTimer[1]} : ${arrTimer[2]} : ${arrTimer[3]}`
        para.innerHTML = `${month+1}/${day}/${year},${time}`
}
       setInterval(currentTime,1000)

        function convertTime(hr,min,sec){
        if(hr>12){
            hr = hr-12;
            return [hr,min,sec,"PM"]
        }
        else if(hr==0){
            return[12,min,sec,"AM"]
        }
        else if(hr<12){
            return[hr,min,sec,"AM"]
        }
        else if(hr==12){
            return[hr,min,sec,"PM"]
        }
    }
    function addZero(k){
        if(k<10){
            return "0"+k;
        }
        else{
            return k;
        }
    
    
}

  

       
