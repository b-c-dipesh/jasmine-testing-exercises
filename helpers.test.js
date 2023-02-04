describe('Helpers test (with setup and tear-down)', () => {
	beforeEach(() => {
		// initialization logic
		allPayments = {
			payment1: {
				billAmt: '100',
				tipAmt: '10',
				tipPercent: 10,
			},
			payment2: {
				billAmt: '120',
				tipAmt: '10',
				tipPercent: 8,
			},
		};
	});

	it('should return correct total sum of bill amount on sumPaymentTotal(billAmt)', () => {
		expect(sumPaymentTotal('billAmt')).toEqual(220);
	});

	it('should return correct total sum of tip amount on sumPaymentTotal(tipAmt)', () => {
		expect(sumPaymentTotal('tipAmt')).toEqual(20);
	});

	it('should return correct total sum of tip percent on sumPaymentTotal(tipPercent)', () => {
		expect(sumPaymentTotal('tipPercent')).toEqual(18);
	});

	it('should return correct tip percent on calculateTipPercent(billAmt, tipAmt)', () => {
		expect(calculateTipPercent(100, 10)).toEqual(10);
		expect(calculateTipPercent(120, 10)).toEqual(8);
	});

	it('should correctly create and appends table data on the table row on appendTd(tr, value)', () => {
		const tr = document.createElement('tr');
		appendTd(tr, 'test');

		expect(tr.children.length).toEqual(1);
		expect(tr.children[0].innerText).toEqual('test');
	});

	it('should correctly create and appends a delete button on the table row on appendDeleteBtn(tr)', () => {
		const tr = document.createElement('tr');
		appendDeleteBtn(tr);

		expect(tr.children.length).toEqual(1);
		expect(tr.children[0].innerText).toEqual('X');
	});

	afterEach(() => {
		// reset data
		allPayments = {};
	});
});
