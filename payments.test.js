describe('Payments test (with setup and tear-down)', () => {
	beforeEach(() => {
		// initialization logic
		billAmtInput.value = '100';
		tipAmtInput.value = '10';
		allServers = { server1: { serverName: 'Dipesh' } };
		allPayments = {};
		paymentId = 0;
	});

	it('should return a payment object with properties billAmt, tipAmt and tipPercent on createCurPayment()', () => {
		expect(createCurPayment()).toEqual({
			billAmt: '100',
			tipAmt: '10',
			tipPercent: 10,
		});
	});

	it('should return a payment object with properties billAmt, tipAmt and tipPercent when tip amount is 0 on createCurPayment()', () => {
		tipAmtInput.value = '0';

		expect(createCurPayment()).toEqual({
			billAmt: '100',
			tipAmt: '0',
			tipPercent: 0,
		});
	});

	it('should return undefined with empty inputs on createCurPayment()', () => {
		billAmtInput.value = '';
		tipAmtInput.value = '';

		expect(createCurPayment()).toEqual(undefined);
	});

	it('should return undefined with negative inputs on createCurPayment()', () => {
		billAmtInput.value = -1;
		tipAmtInput.value = -1;

		expect(createCurPayment()).toEqual(undefined);
	});

	it('should add a new table row on payment table on appendPaymentTable(curPayment)', () => {
		appendPaymentTable({
			billAmt: '100',
			tipAmt: '0',
			tipPercent: 0,
		});

		expect(paymentTbody.children.length).toEqual(1);
		expect(paymentTbody.children[0].innerText).toEqual('$100\t$0\t0%');
	});

	it('should update the shift summary table on updateSummary()', () => {
		allPayments = {
			payment1: {
				billAmt: '100',
				tipAmt: '10',
				tipPercent: 10,
			},
		};

		updateSummary();

		expect(summaryTds[0].innerText).toEqual('$100');
		expect(summaryTds[1].innerText).toEqual('$10');
		expect(summaryTds[2].innerText).toEqual('10%');
	});

	it('should add a new payment object and update html and reset input values on submitPaymentInfo(evt)', () => {
		submitPaymentInfo();

		expect(allPayments).toEqual({
			payment1: {
				billAmt: '100',
				tipAmt: '10',
				tipPercent: 10,
			},
		});

		expect(serverTbody.children[0].innerText).toEqual('Dipesh\t$10.00\tX');
		expect(billAmtInput.value).toEqual('');
		expect(tipAmtInput.value).toEqual('');
	});

	afterEach(() => {
		// test cleanup logic
		billAmtInput.value = '';
		tipAmtInput.value = '';
		allServers = {};
		paymentTbody.innerText = '';
		serverTbody.innerText = '';
		summaryTds[0].innerText = '';
		summaryTds[1].innerText = '';
		summaryTds[2].innerText = '';
	});
});
