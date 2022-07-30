package routers

import (
	"encoding/json"
	"log"
	"net/http"
)

func Authenticate(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// authToken := r.Header.Get("Authorization") 	// from browser we cannot send header in the default implementation:
		// https://github.com/whatwg/websockets/issues/16#issuecomment-332065542

		authToken := r.URL.Query().Get("auth")
		if authToken == "" {
			Send401Error(w)
			return
		}

		log.Println("Need to authenticate token:", authToken)
		next.ServeHTTP(w, r)
	})
}

func Send401Error(w http.ResponseWriter) {
	w.WriteHeader(http.StatusUnauthorized)
	j, _ := json.Marshal(map[string]any{
		"message": "Token not found",
	})
	w.Write(j)
}
