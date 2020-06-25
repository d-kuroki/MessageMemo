console.log("読み込めました");

function setMessage(){
	let memory = memo.getmessage_cd();
	
	if(memory == 1){
		document.getElementById("memos").value = もう一度お電話します;
	}else　if(memory == 2){
		document.getElementById("memos").value = 折り返しお願いします;
	}else if(memory == 3){
		document.getElementById("memos").value = 伝言あります;
	}
}

