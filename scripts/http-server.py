#!/usr/bin/env python3

import http.server

class HttpReqHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_headers()
        http.server.SimpleHTTPRequestHandler.end_headers(self)

    def send_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")


if __name__ == '__main__':
    http.server.test(HandlerClass=HttpReqHandler)
