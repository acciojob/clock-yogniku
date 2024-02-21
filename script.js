//your JS code here. If required.
let para=document.querySelector('timer')
function currentTime(){
	let date=new Date()
	let hour=date.getHours()
	let min= date.getMinutes()
	let sec= date.getSeconds()
	let day= date.getDay()
	let month=date.getMonth()
	let year=date.getFulyear()
	let time=hour+":"+min+":"sec
	para.innerText=`${month}/${day}/${year}/${time}`
return `${month}/${day}/${year}/${time}`
}
setInterval(currentTime,1000)
currentTime()

       
