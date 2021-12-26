import { useEffect } from "react";
import "./App.css";
import XTable from "x-table";

function App() {
	useEffect(() => {
		new XTable({
			fields: {
				name: {
          label:"姓名"
        },
			},
		});
	}, []);
	return <div className="App"></div>;
}

export default App;
