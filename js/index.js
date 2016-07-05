$(document).ready(start);

function start() {
	$("#entry").submit(handleForm);
}

function handleForm(e){
	e.preventDefault();
	var input = $("#newEntry").val();
	addLineItem(input);
	addToTotal(input);
	$("#newEntry").val("");
	//Fix Nan error
}

function addToTotal(num){
	var rawCurrentInput = $("#total").html();
	var convertedNum = parseFloat(num);
	var currentTotal = parseFloat(rawCurrentInput);
	var newTotal = currentTotal + convertedNum;

	var formattedNewTotal = newTotal.toFixed(2);

	$("#total").html(formattedNewTotal);
}

function addLineItem(num){
	var formattedNum = "$" + parseFloat(num).toFixed(2);
	var htmlResult = generateHtml(formattedNum);
	$("#entries").append(htmlResult);
}

function generateHtml(price){
	return '<tr><td></td><td>' + price +'</td></tr>';
}