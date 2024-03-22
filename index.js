// java script to capture the entered data


let fullNameEnteredText = document.getElementById("fullName")
let emailAddrEnteredText = document.getElementById("emailAddr")
let budgetAmtEnteredText = document.getElementById("budget-el")

function register() {
	let fullNameStr = fullNameEnteredText.value
	let emailAddrStr = emailAddrEnteredText.value
	let budgetAmtStr = budgetAmtEnteredText.value

	let outputLine = fullNameStr + "\t" + emailAddrStr + "\t" + budgetAmtStr

	console.log(outputLine)
}
