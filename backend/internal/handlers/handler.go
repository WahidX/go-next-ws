package handlers

import (
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

func PingHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("pong")) // nolint
}

// This is for testing websocket connection only
func WebsocketHandler(w http.ResponseWriter, r *http.Request) {
	u := websocket.Upgrader{
		CheckOrigin: func(r *http.Request) bool { return true },
	}

	conn, err := u.Upgrade(w, r, nil)
	if err != nil {
		log.Print("upgrade error: ", err)
		return
	}
	defer func() {
		err = conn.Close()
		log.Println("Connection Close")
	}()

	log.Println("New Connection")

	for {
		mt, message, err := conn.ReadMessage()
		if err != nil {
			log.Println("err in read:", err)
			conn.Close()
			return
		}
		log.Printf("recv: %s", message)

		err = conn.WriteMessage(mt, []byte("From Server: client just said '"+string(message)+"'"))
		if err != nil {
			log.Println("err in write:", err)
			conn.Close()
			return
		}
	}
}
