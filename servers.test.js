describe('Servers test (with setup and tear-down)', function () {
	beforeEach(function () {
		// initialization logic
		serverNameInput.value = 'Dipesh';
	});

	it('should add a new server to allServers on submitServerInfo()', function () {
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers['server' + serverId].serverName).toEqual('Dipesh');
	});

	it('should update the server table on HTML on updateServerTable()', function () {
		allServers = { server1: { serverName: 'Dipesh' } };
		serverId = 1;

		updateServerTable();

		expect(
			document.querySelector('#serverTable tbody').children.length
		).toEqual(1);
		expect(document.querySelector('#server1').innerText).toEqual(
			'Dipesh\t$0.00\tX'
		);
	});

	afterEach(function () {
		// reset data
		serverNameInput.value = '';
		allServers = {};
		serverId = 0;
		document.querySelector('#serverTable tbody').innerHTML = '';
	});
});
