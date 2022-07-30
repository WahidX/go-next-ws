import type { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
	useEffect(() => {
		let ws = new WebSocket("ws://localhost:3030/websocket?auth=authToken");

		ws.onopen = () => console.log("connected");
		ws.onmessage = (message) => console.log("received: ", message.data);
		ws.onerror = (ev) => console.log("Error: ", ev);
		ws.onclose = (ev) => console.log("connection closed");
	}, []);

	return (
		<div>
			<h1>Go-Next Websocket</h1>
		</div>
	);
};

export default Home;
