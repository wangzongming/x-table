// 兼容包引入
import "./polyfill/es6-proxy-polyfill";
import "core-js/es/promise";

// export type XTable = () => any;

class XTable {
	constructor(config){
		console.log(config)
	}
}

export default XTable;
