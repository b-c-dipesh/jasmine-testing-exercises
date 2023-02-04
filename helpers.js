// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
	let total = 0;

	for (let key in allPayments) {
		let payment = allPayments[key];

		total += Number(payment[type]);
	}

	return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
	return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
	let newTd = document.createElement('td');
	newTd.innerText = value;

	tr.append(newTd);
}

// expects a table row element, appends a newly created td element that contains a button which when clicked deletes the table row it belongs to
const appendDeleteBtn = (tr) => {
	// create DOM elements
	const td = document.createElement('td');
	const deleteBtn = document.createElement('button');

	// set attributes
	deleteBtn.setAttribute('type', 'button');
	deleteBtn.innerText = 'X';

	// add event listener
	deleteBtn.addEventListener('click', (e) => {
		// update allServers object
		delete allServers[e.target.parentElement.parentElement.id];

		// delete the current tr
		e.target.parentElement.parentElement.remove();
		updateServerTable();
	});

	// add the button to the td and finally to the tr
	td.append(deleteBtn);
	tr.append(td);
};
