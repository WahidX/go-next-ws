import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";

const Home: NextPage = () => {
	const [response, setResponse] = useState<string[]>([]);
	const [message, setMessage] = useState<string>("");
	const [connected, setConnected] = useState(false);
	const [ws, setWs] = useState<WebSocket | null>();

	const url = "ws://localhost:3030/websocket?auth=123";
	const isBrowser = typeof window !== "undefined";

	// // Call when updating the ws connection
	// const updateWs = useCallback(
	// 	(url: string) => {
	// 		if (!isBrowser) return setWs(null);

	// 		// Close the old connection
	// 		if (ws && ws?.readyState !== 3) ws.close();

	// 		// Create a new connection
	// 		const newWs = new WebSocket(url);
	// 		setWs(newWs);
	// 	},
	// 	[ws]
	// );

	useEffect(() => {
		let ws = new WebSocket(url);

		ws.onopen = () => {
			setWs(ws);
			setConnected(true);
			console.log("Connection opened");
		};

		ws.onmessage = (message) => {
			console.log("Received: ", message.data);
			setResponse((arr) => [message.data, ...arr]);
		};

		return () => {
			// Cleanup on unmount if ws wasn't closed already
			if (ws && ws?.readyState !== 3) ws.close();
			setConnected(false);
		};
	}, []);

	const sendMessage = () => {
		if (connected) {
			ws && ws.send(message);
			setMessage("");
		}
	};

	return (
		<div>
			<h1>Go-Next Websocket</h1>

			<h2>Connection state: {ws && ws.readyState}</h2>

			<div className="parent">
				<div>
					<label>
						<h2>Send message to server</h2>
					</label>
					<br />
					<input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
					<button onClick={() => sendMessage()}>Send</button>
				</div>

				<div>
					<h2>Message from server</h2>
					<ul>
						{response.map((resp) => (
							<li>{resp}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;
