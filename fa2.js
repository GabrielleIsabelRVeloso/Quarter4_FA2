function makeTable() {
	const b = parseInt(document.getElementById("bValue").value);
	const e = parseInt(document.getElementById("eValue").value);
	let display = document.getElementById("output");
	
	if (b > 2 && b < 10 && e > 2 && e <10){
		let res ="<table>";
		for (let x=1; x<=b; x++){
			res +="<tr>";
			for (let y=1;y<=e; y++){
				res+= "<td>" + (x*y) + "</td>";
				}
		res += "</tr>"
	}
	res+= "</table>";
	display.innerHTML = res;
	}
	else{
		alert("Please enter numbers between 2 and 10");
		display.innerHTML="";
	}
}
	