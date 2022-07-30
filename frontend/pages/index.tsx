import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
	const [response, setResponse] = useState<string[]>([]);
	const [message, setMessage] = useState<string>("");
	const [ws, setWs] = useState<WebSocket>();

	useEffect(() => {
		const con = async () => {
			await setWs(new WebSocket("ws://localhost:3030/websocket?auth=authToken"));

			if (ws) {
				ws.onopen = () => console.log("connected:", ws.readyState);

				ws.onmessage = (message) => {
					console.log("received: ", message.data);
					setResponse([message.data, ...response]);
				};

				let state = ws.readyState;
				console.log("state: ", state);
				ws.send("testing");

				ws.onerror = (ev) => console.log("Error: ", ev);

				ws.onclose = (ev) => console.log("connection closed:", ws.readyState);
			}
		};
		con();

		return () => {
			console.log("closing connection");
			if (ws) ws.close();
		};
	}, []);

	const sendMessage = () => {
		if (ws && ws.readyState == ws.OPEN) {
			ws.send(message);
			setMessage("");
		}
	};

	return (
		<div>
			<h1>Go-Next Websocket</h1>

			{/* <h2>Connection state: {ws.readyState}</h2> */}

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
