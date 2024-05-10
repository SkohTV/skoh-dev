package main

import (
	"fmt"
	"io/fs"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
) 


type Page struct {
  path string
  code int
  msg string
  format string
  // cache int
  body []byte
  len int
}

func (p Page) print() {
  fmt.Printf("{path:%s, code:%d, msg:%s, format:%s, len:%d\n", p.path, p.code, p.msg, p.format, p.len)
}


func new_page(root string, path string, extension string, truepath string) Page {
  var my_page Page

  // Path
  my_page.path = path

  // Code + msg
  if path == "/404.html" {
    my_page.code = 404
    my_page.msg = "Not Found"
  } else {
    my_page.code = 200
    my_page.msg = "OK"
  }

  // Format
  switch extension {
  case "html":
    my_page.format = "text/html"
    break
  case "css":
    my_page.format = "text/css"
    break
  case "js":
    my_page.format = "text/javascript"
    break
  case "webp":
    my_page.format = "image/webp"
    break
  case "jpg":
    my_page.format = "image/jpeg"
    break
  case "mp3":
    my_page.format = "audio/mpeg"
    break
  default:
    fmt.Println("Unhandled case:", extension)
  }

  // Read body
  data, err := os.ReadFile(truepath)
  if err != nil {
    fmt.Println(err)
  } else {
    my_page.body = data
  }

  // Length
  my_page.len = len(my_page.body)
  
  return my_page
}


func read_files(root string) map[string]Page {
  all_pages := make(map[string]Page)
  err := filepath.Walk(root, func(truepath string, info fs.FileInfo, err error) error {
    if err != nil {
      return err
    }
    if info.IsDir() {
      return nil
    }
    path := truepath[len(root):]
    extension := strings.Split(path, ".")[1]

    // Convert file path to url path
    path = strings.Trim(path, "/")
    path = strings.Trim(path, "index.html")
    path = strings.Trim(path, ".html")
    path = strings.Trim(path, "/")

    all_pages[path] = new_page(root, path, extension, truepath)
    return nil
  })
  if err != nil {
    fmt.Println(err)
  }
  return all_pages
}


func handler (writer http.ResponseWriter, req *http.Request) {
  req_url := strings.Trim(req.URL.Path, "/")
  page, ok := all_pages[req_url]

  fmt.Println(req_url)

  if ! ok {
    http.Redirect(writer, req, "/404", http.StatusFound)
    fmt.Println("URL invalid:", req_url)
    return
  }

  writer.Header().Set("Content-Type", page.format)
  writer.Header().Set("Content-Length", fmt.Sprint(page.len))
  writer.WriteHeader(page.code)
  writer.Write(page.body)
}


var all_pages = read_files("static")

func main() {
  http.HandleFunc("/", handler)
  log.Fatal(http.ListenAndServe(":5000", nil))
}
