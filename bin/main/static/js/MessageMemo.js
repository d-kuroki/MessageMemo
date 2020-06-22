console.log("読み込めました");

//年月日に初期値を設定(システム日付)
function setDate() {
    let today = new Date();
    let nowYear = today.getFullYear();
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
        let check_am = document.getElementById("am");
        check_am.checked = true;
    } else {
        if(nowHour >= 13) {
            document.getElementById("hour").value = nowHour - 12;
        } else {
            document.getElementById("hour").value = nowHour;
        }
        let check_pm = document.getElementById("pm");
        check_pm.checked = true;
    }

    document.getElementById("minute").value = nowMinute;
}

//チェックボックス
//function checkbox(){
//    document.forms['form'].elements['check1'].onclick=ckbox1;
//    document.forms['form'].elements['check2'].onclick=ckbox2;
//    document.forms['form'].elements['check3'].onclick=ckbox3;
//}
//function ckbox1(){
//    document.forms['form'].elements['check2'].checked=false;
//    document.forms['form'].elements['check3'].checked=false;
// }
// function ckbox2(){
//    document.forms['form'].elements['check1'].checked=false;
//    document.forms['form'].elements['check3'].checked=false;
// }
// function ckbox3(){
//    document.forms['form'].elements['check1'].checked=false;
//    document.forms['form'].elements['check2'].checked=false;
// }
//  window.addEventListener('DOMContentLoaded',checkbox,false);

//テキストエリアを初期表示で読み取り専用にする。「伝言があります」にチェックされているときに限り入力可。
function setOnly() {
    let memo = document.getElementById("memo_text");
    memo.readOnly = true;
}

function changeOnly1() {
	let memo = document.getElementById("memo_text");
	let check_message1 = document.getElementById("check1");
	
	if(check_message1.checked == true) {
		memo.readOnly = true;
		memo.value = "";
	}
}

function changeOnly2() {
	let memo = document.getElementById("memo_text");
	let check_message2 = document.getElementById("check2");
	if(check_message2.checked == true) {
		memo.readOnly = true;
		memo.value = "";
	}
}

function changeOnly3() {
	let memo = document.getElementById("memo_text");
	let check_message3 = document.getElementById("check3");
	
	if(check_message3.checked == true) {
		memo.readOnly = false;
		memo.required = true;
	} else {
		memo.readOnly = true;
		memo.required = false;
	}
}


//function checkForm(){
//	let flag = 0;
//	if(document.check.check1.checked==false && document.check.check2.checked==false && document.check.check3.checked==false){
//		flag = 1;
//		document.getElementById('noInput').style.display="block;"
//	}else{
//		document.getElementById('noInput').style.display="none";
//	}
//	if(flag){
//		return false;
//	}else{
//		retrun true;
//	}
//}


//チェックの条件必須
$(function(){
	$('input[type=checkbox]').on('click',function(){
		if ($(this).prop('checked')){
			$('input[type=checkbox]').prop('checked',false);
			$(this).prop('checked',true);
		}
	});


	let checkedNum;

	$('#send').click(function() {
		let checkedNum = $('.div_class :checked').length;
		if(checkedNum == 0) {
			$('#check_alert').text('対応のいずれかにチェックしてください');
			return false;
		}
	});
});


$('#send').click(function() {
	let checkedNum = $('.div_class :checked').length;
	if(checkedNum > 0) {
		$('#check_alert').text('');
	} else {
		$('#check_alert').text('対応のいずれかにチェックしてください');
		
	}
});


//function resetPage() {
//	document.form.reset();
//}

//function submit(){
//	document.getElementById("msg").innerHTML-"";
//}

