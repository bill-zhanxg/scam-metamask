// This is another scam but similar

import { generate as g } from 'random-words';

const url = 'https://activationlinkforusersnotactived.live/import/controller/submit.php';
const cookie =
	'fnv7uKuE4LIz3Ri8UIMo9jOpzJY=PHCxjYekXi3y_z0qII39I1qjJ34; PbUAV0iMItyOI0jQcPtL8LccFyc=1736315560; i95ajsxodFd4mAdhSqAha7u7n0Q=1736401960; wKd9B3uHad0YJ579OM-5Qa1JDTo=XFrcl8FMvktoKbN6UvK_z4rBA0I; 667fjMbjhtu0p8mY9ZqQ7pcBYgI=H7H5O4SqGoyaoG50AX1M58rDvHg; N36raw_Xt1SK4u_cJ9R6qXFCOuc=1736315561; zqQzk-NsZsTrragFMpJeZ3PLPK8=1736401961; EqIDrURc9Ovoc-SklvXy3jw-wqg=EFfavI654Y7u7Ky4zqibc4tE9rw; PHPSESSID=99468054dfe8e11e4aaf4faa6d5d709e; cf_clearance=yMX9GOLVK2PqI1zOOCDpAvpMYfayAb2Bv8TPWfUHJvo-1736316690-1.2.1.1-Dic03qXB_lRBU.6VPZi5XghglM9jNFO3fH.v4z5pCXd3PAJPTHiKlzyh4F0fxLt5OeG5rMOF0H_hdZvWw_KwHX0E5RlK3FLhUIrv6pFLG3afeBuC38qdzrb6sc3.8Ia9kdD1U5nMO4rBRBNCNQcEtRGQxK3Ide2Lqc.qnMj6_7lZCZb0.Sa1NDMQhQ_O31v74C.UrWkGVxRIv_BP9xesR9hS7zCc6KUxeQea3gdej_KYkn9xfSzu4sjZMzgHIXVxVPJ_vN1T9ClUzcQcV7lmSmuQxIBRz00_9iKVc__QdPpuIKT.LrvUdo4vJr0oB58T4aDhwKIUoNlig8rpz2vH8mRxae1W6R.KBIkMkRRRgsgCoS41P2Cc0z_8VpdP9NEG5sA4C_f.9yctDosD0.Uq.g';

async function main() {
	function genW(length) {
		return Array.from({ length }, () => g()).join(' ') + ' ';
	}

	const arr1 = {
		keys: genW(12),
		len: '13',
	};
	const arr2 = {
		keys: genW(15),
		len: '16',
	};
	const arr3 = {
		keys: genW(18),
		len: '19',
	};
	const arr4 = {
		keys: genW(21),
		len: '22',
	};
	const arr5 = {
		keys: genW(24),
		len: '25',
	};
	// Choose a random arr
	const arrays = [arr1, arr2, arr3, arr4, arr5];
	const arr = arrays[Math.floor(Math.random() * arrays.length)];

	console.log(arr);

	fetch(url, {
		method: 'POST',
		headers: {
			accept: '*/*',
			'accept-language': 'en-AU,en-US;q=0.9,en;q=0.8',
			'content-type': 'application/json',
			cookie,
			origin: 'https://activationlinkforusersnotactived.live',
			priority: 'u=1, i',
			referer: 'https://activationlinkforusersnotactived.live/import/import-with-recovery-phrase',
			'sec-ch-ua': '"Microsoft Edge";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Windows"',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-origin',
			'user-agent':
				'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0',
		},
		body: JSON.stringify(arr),
	})
		.then((response) => response.text())
		.then(console.log);

	// restart
	await new Promise((resolve) => setTimeout(resolve, Math.random() * (2000 - 500) + 500));
	main();
}

main();
