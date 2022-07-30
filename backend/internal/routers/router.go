package routers

import (
	"go_ws/internal/handlers"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
)

var options = cors.Options{
	AllowedOrigins: []string{"*"},
	AllowedMethods: []string{"GET", "POST", "PUT", "DELETE"},
	AllowedHeaders: []string{"*"},
}

func Routers() http.Handler {
	r := chi.NewRouter()

	r.Use(
		middleware.Logger,
		middleware.Recoverer,
		cors.Handler(options),
	)

	r.Get("/ping", handlers.PingHandler)
	r.With(Authenticate).Get("/websocket", handlers.WebsocketHandler)

	return r
}
