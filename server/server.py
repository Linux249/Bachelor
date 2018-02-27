# -*- coding: utf-8 -*-
"""
Created on Thu Feb 27 09:25:24 2018
@author: jlibor
"""
### Aktuelle Version als Hilfe ausgeben
import os
import time 
from http.server import BaseHTTPRequestHandler, HTTPServer
import json

## TODO
# testen des servers mit postman
# build auf den selben server legen
# data from var 
# data from file
# prüfen ob git ordner kopieren kann
# daten speichern in file
# Fragen
# welches format

"""
def save_obj(obj, name):
    with open(name + '.pkl', 'wb') as f:
        pickle.dump(obj, f, pickle.HIGHEST_PROTOCOL)

def load_obj(name):
    with open('obj/' + name + '.pkl', 'rb') as f:
        return pickle.load(f)
"""

def get_graph(userData = []):
    if userData:
        print(b"not empty")
        print(userData)
    else: 
        print("empty body")
    filename = "data/response_data.txt"
    with open(filename, "rb") as f: 
        return f.read()

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

        # log requests
        #print(self.path)
        #print(time.asctime(), '%s: %s' % (self.command, self.path), 'more to log???') 
        
        if(self.path == "/"):
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            with open('index.html', 'rb') as f:
                self.wfile.write(f.read())

        """
        if(self.path == "/api/v1/dataFromFile"):
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            #self.send_header('Access-Control-Allow-Origin', self.headers['origin'])
            self.end_headers()
            print(self.headers)
            #self.wfile.write(b"test")  #body zurueckschicken

            
            self.wfile.write(get_graph())
        """
    def do_POST(self):
        """
        definiert den Umgang mit POST Requests
        Liest den Body aus - gibt in zum konvertieren weiter
    
        """
        if(self.path == "/api/v1/dataFromFile"):   
            #if (self.headers['Content-type'].split(";")[0] != "application/x-turtle"): #prueft Header auf Standart von Gerbil
                #self.send_error(415, "Fehler im Header: Content-type")
                #return

            ### POST Request Header ### 
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', self.headers['origin'])
            self.end_headers()

            # get body from request
            content_len = int(self.headers['Content-Length'])
            body = self.rfile.read(content_len) 

            # convert body to list 
            data = json.loads(str(body, encoding='utf-8'))
            #print(data)

            """
            ### Datensatz speichern ###
            if(save_to_file):
                filename = "data/response_data.txt"
                os.makedirs(os.path.dirname(filename), exist_ok=True)   #erstellt file und Ordner falls nicht vorhanden
                with open(filename, "w") as f: 
                    f.write(body.decode('utf-8'))
                    f.close()
                    print("File ", filename, " saved")
            """

            ## get new graph
            data = get_graph(data)

            
            #print(type(data))

            #data = json.dumps(data)
            #print(type(data))

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