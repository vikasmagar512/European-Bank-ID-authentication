'use strict';

const BankId = require('bankid');

const bankid = new BankId();

module.exports = {
	authenticate: function(pno, callback) {
		bankid.authenticate(pno).then(res => {
            // "198112289874"
			const timer = setInterval(() => {
				const done = () => clearInterval(timer);
				bankid.collect(res.orderRef)
				.then(res => {
					console.log(res.progressStatus);
					if (res.progressStatus === 'COMPLETE') {
						callback(res.userInfo);
						done();
					}
				})
				.catch(err => {
					console.log(err.toString());
					done();
				});
			}, 1000);
		});
	}
};