package handlers

import (
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

func PingHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("pong"))
}

func WebsocketHandler(w http.ResponseWriter, r *http.Request) {
	u := websocket.Upgrader{} // using default config

	c, err := u.Upgrade(w, r, nil)
	if err != nil {
		log.Print("upgrade error: ", err)
		return
	}

	defer c.Close()

	for {
		mt, message, err := c.ReadMessage()
		if err != nil {
			log.Println("err in read:", err)
			break
		}
		log.Printf("recv: %s", message)

		err = c.WriteMessage(mt, []byte("Message received: "+string(message)))
		if err != nil {
			log.Println("err in write:", err)
			break
		}
	}
}
