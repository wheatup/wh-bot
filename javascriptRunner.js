import Sandbox from 'sandbox';
const sb = new Sandbox();
export default function (code) {
	return new Promise(res => {
		try {
			sb.run(code, data => {
				res(data);
			});
		} catch (ex) {
			res(ex.message);
		}
	});
}
