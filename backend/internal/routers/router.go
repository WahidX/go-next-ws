package routers

import (
	"go_ws/internal/handlers"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func Routers() http.Handler {
	r := chi.NewRouter()

	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	r.Get("/ping", handlers.PingHandler)
	r.Get("/websocket", handlers.WebsocketHandler)

	return r
}
