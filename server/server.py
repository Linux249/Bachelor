# -*- coding: utf-8 -*-
"""
Created on Thu Feb 27 09:25:24 2018
@author: jlibor
"""
### Aktuelle Version als Hilfe ausgeben
import os
import time 
from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer       # python 2
# from http.server import BaseHTTPRequestHandler, HTTPServer        # python 3
import json
from compute_embedding import compute_graph, initialise_graph

def format_string(graph):
    s = str(graph)
    s = s.replace("'", '"').replace(': ', ':').replace('False', 'false').replace('True', 'true')\
        .replace(', ', ',').replace(':u"', ':"')
    return s

### prod server
def get_graph(userData=[]):
    graph = compute_graph(userData)
    return format_string(graph)

"""
### dev Server
def get_graph(userData = []):   
    filename = "data/response_data.txt"
    with open(filename, "rb") as f: 
        return f.read()
"""

## MyHTTPHandler beschreibt den Umgang mit HTTP Requests
class MyHTTPHandler(BaseHTTPRequestHandler):

    def do_OPTIONS(self):           
        self.send_response(200, "ok")
        self.send_header('Access-Control-Allow-Origin', self.headers['origin'])
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-type')
        
        self.end_headers()
 
    def do_GET(self):
        """
        Definiert den Umgang mit GET Requests
        Bei "/" wird index.html gesendet
        """

        if(self.path == "/"):
            f = '/index.html'
        else: 
            f = self.path

        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        
        try:
            with open('public' + f, 'rb') as f:
                self.wfile.write(f.read())
        except FileNotFoundError as err:
            print(err)
            self.send_error(402, 'file notsadasdasdasd found')
        except IOError as err:
            print(err)
            self.send_error(404, 'file not found')

    def do_POST(self):
        """
        definiert den Umgang mit POST Requests
        Liest den Body aus - gibt in zum konvertieren weiter
    
        """
        if(self.path == "/api/v1/dataFromFile"):

            ### POST Request Header ### 
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', self.headers['origin'])
            self.end_headers()

            # get body from request
            content_len = int(self.headers['Content-Length'])
            body = self.rfile.read(content_len)

            # convert body to list
            data = json.loads(str(body).decode('utf-8'))  # python 2
            # data = json.loads(str(body, encoding='utf-8'))      # python 3
            # print(data)

            ## get new graph
            data = get_graph(data)

            self.wfile.write(data)  #body zurueckschicken

        return
 
if __name__ == "__main__":
    # config
    HOST_NAME = ""
    PORT_NUMBER = 8000
    save_to_file = False
    try:
        http_server = HTTPServer((HOST_NAME, PORT_NUMBER), MyHTTPHandler) 
        print(time.asctime(), 'Server Starts - %s:%s' % (HOST_NAME, PORT_NUMBER), '- Beenden mit STRG+C') 
        http_server.serve_forever()
    except KeyboardInterrupt:
        print(time.asctime(), 'Server Stops - %s:%s' % (HOST_NAME, PORT_NUMBER), '- Beenden mit STRG+C') 
http_server.socket.close()