var flag = false;
var str;
var tmpobj;
function change(obj){
	if(flag){
		tmpobj.innerText = " ";
		obj.innerText = str;
		$(tmpobj).removeClass('active_choice');
		//$(tmpobj).css('background','white');
		console.log("false");
		var row = obj.parentNode.rowIndex + 1;
		var cell = obj.cellIndex + 1;
		console.log(row + "-" + cell);
		$(obj).addClass('spla_A');
		flag = false;
	}else{
		str = obj.innerText;
		tmpobj = obj;
		console.log("true");
		$(obj).addClass('active_choice');
		flag = true;
	}
}	