//日付
function setDate(){
	let today = new Date();
	let nowYear = today.getFullyear();
	let nowMonth = today.getMonth() + 1;
	let nowDay = today.getDate();
	
	document.getElementById("today_year").value = nowYear; 
	document.getElementById("today_month").value = nowMonth;
	document.getElementById("today_day").value = nowDay;
}

function setTime() {
    let today = new Date();
    let nowHour = today.getHours();
    let nowMinute = today.getMinutes();

    if(nowHour >= 0 && nowHour <= 11) {
        if(nowHour == 0) {
            document.getElementById("hour").value = 12;
        } else {
            document.getElementById("hour").value = nowHour;
        }
        let check_am = document.getElementById("radio_1");
        check_am.checked = true;
    } else {
        if(nowHour >= 13) {
            document.getElementById("hour").value = nowHour - 12;
        } else {
            document.getElementById("hour").value = nowHour;
        }
        let check_pm = document.getElementById("radio_2");
        check_pm.checked = true;
    }

    document.getElementById("minute").value = nowMinute;
}

//チェックボックス
function(){
	let uniquecheck = $('.singlecheck').find('input[type=checkbox]');
	uniquecheck.click(function() {
		let group = $(this).attr('data-scgroup');
		uniquecheck.filter(function() {
			return $(this).attr('data-scgroup') == group;
		}).not(this).removeAttr('checked');
	});
});