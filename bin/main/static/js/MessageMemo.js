console.log("読み込めました");

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

//時間に初期値を設定(システム時間)、ラジオボタンの切り替え指定
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


//テキストエリアを初期表示で読み取り専用にする
function setOnly() {
    let memo = document.getElementById("memo_text");
    memo.readOnly = true;
}

// 「伝言があります」にチェックされているときに限り入力可
function changeOnly() {
    let memo = document.getElementById("memo_text");
    let check_message = document.getElementById("check3");

    if(check_message.checked == true) {
        memo.readOnly = false;
    } else {
        memo.readOnly = true;
    }
}