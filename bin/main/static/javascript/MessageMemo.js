alert("Hello JavaScript:D");

//日付
function setDate(){
	let nowYear = today.getFullyear();
	let nowMonth = today.getMonth();
	let nowDay = today.getDate();
	
	document.getElementById("today_year").value = nowYear; 
	document.getElementById("today_month").value = nowMonth;
	document.getElementById("today_day").value = nowDay;
}

//時間
function setTime(){
	let today = new Date();
	let hors = today.getHours();
	let minute = today.getMinutes();
		
	document.getElementById("hour").value = hours;
	document.getElementById("minute").value = minute;
		
	if(hours > 12){
		document.getElementById("hour").value = hours - 12;
	}else if(hours = 0){
		document.getElementById("hours").value = 12;
	}else{
		document.getElementById("hour").value = hours;
	}
	
	if(hours >=0 && hours <= 11){
		document.getElementById("am").checked = true;
	}else if(hours >= 12 && hours <= 23){
		document.getElementById("pm").checked = true;
	}
}


//チェックボックス
$(function(){
	var uniquecheck = $('.singlecheck').find('input[type=checkbox]');
	uniquecheck.click(function() {
		var group = $(this).attr('data-scgroup');
		uniquecheck.filter(function() {
			return $(this).attr('data-scgroup') == group;
		}).not(this).removeAttr('checked');
	});
});