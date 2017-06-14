package main

import (
    "net/http"

    "github.com/labstack/echo"
    "github.com/labstack/echo/middleware"
)

type Users struct {
    Firstname string `json:"firstName"`
    Lastname  string `json:"lastName"`
    Email     string `json:"email"`
}

type Response struct {
    Result []Users
}

func listUsers(c echo.Context) error {
    result := Response{
        Result : []Users{
            Users{
                Firstname: "Phatcharaphan",
                Lastname: "Ananpreechakun",
                Email: "phat.pan@gmail.com",
                },
            Users{
                Firstname: "Phatcharaphan",
                Lastname: "Ananpreechakun",
                Email: "phat.pan@gmail.com",
                },
        },
    }
    return c.JSON(http.StatusOK, result)
}

func main() {
    e := echo.New()
    e.Use(middleware.Logger())
    e.Use(middleware.Recover())

    e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
        AllowOrigins: []string{"*"},
        AllowMethods: []string{echo.GET, echo.PUT, echo.POST, echo.DELETE},
    }))

    e.GET("/api/getAllusers", listUsers)
    e.Logger.Fatal(e.Start(":8080"))
}