import type { NextPage } from "next";
import { StrictMode, useEffect, useState } from "react";

const Home: NextPage = () => {
	const [response, setResponse] = useState<string[]>([]);
	const [message, setMessage] = useState<string>("");
	const [ws, setWs] = useState<WebSocket | null>();

	const url = "ws://localhost:3030/websocket?auth=123";

	const wsInit = () => {
		let socket: WebSocket;

		// Close the old connection
		if (ws && ws?.readyState !== 3) ws.close();

		socket = new WebSocket(url);

		socket.onopen = () => {
			setWs(socket);
			console.log("Connection opened: ", socket.readyState);
		};

		socket.onmessage = (message) => {
			console.log("Received: ", message.data);
			setResponse((arr) => [message.data, ...arr]);
		};

		socket.onerror = (ev) => {
			console.log("Error in socket", ev);
			socket.close();
		};

		socket.onclose = (e) => {
			console.log("Closing connection: ", socket.readyState);
			setTimeout(function () {
				wsInit();
			}, 1000);
		};
	};

	useEffect(() => {
		wsInit();

		return () => {
			// Cleanup on unmount if ws wasn't closed already
			if (ws && ws?.readyState !== 3) ws.close();
		};
	}, []);

	const sendMessage = () => {
		if (ws && ws.readyState === 1) {
			ws && ws.send(message);
			setMessage("");
		} else {
			alert("Server not connected");
		}
	};

	return (
		<div>
			<h1>Go-Next Websocket</h1>

			<h2>Connection state: {ws ? ws.readyState : "0"}</h2>

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
						{response.map((resp, ind) => (
							<li key={ind}>{resp}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;
