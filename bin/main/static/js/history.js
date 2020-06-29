console.log("読み込めました");

function getRowCol(){
	  //行数取得
	  let row = tbl1.rows.length -1;
	 
	  //列数取得（rowsの引数には行インデックス番号を指定します）
	  let col = tbl1.rows[1].cells.length;
	 
	  //結果表示
	  console.log("行数:" + row + " 列数:" + col);
	  

	}



//
//	$('#data-table').DataTable({
//	    //デフォルトの表示件数を100件に設定。
//		pageLength: 14
//	
//	});

