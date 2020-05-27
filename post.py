import os, sys                      
import json                       
import datetime                       
from bson.objectid import ObjectId                       
from flask import Flask                       
import pymongo
from pymongo import MongoClient
from flask import request, jsonify

"""
ROOT_PATH = os.path.dirname(os.path.realpath(__file__))
os.environ.update({'ROOT_PATH': ROOT_PATH})
sys.path.append(os.path.join(ROOT_PATH, 'modules'))
"""


# Port variable to run the server on.

app = Flask(__name__)

client = MongoClient('mongodb://localhost:27017')
db = client.projetArchitecture
collection = db.festivals

@app.route('/api/festivals/addFestival', methods=["GET","POST"])
def addFestival():
    """ 
        Fonction pour ajouter un festival dans la base MongoDb.
    """
    if request.method != "POST":
        
        return jsonify(isError= True,
                    message= "Method Not Allowed !",
                    statusCode= 405), 405 

    else :
        data = request.values
        departement = data.get('departement')
        nom = data.get('nom')
        site = data.get('site')
        code_postal = data.get('code_postal')
        domaine = data.get('domaine')

        if(not(not departement or not nom or not site or not code_postal or not domaine)):

            #Objet post à insérer dans MongoDb

            post = ({"fields" : [
                {
                    "departement" : departement,
                    "nom_de_la_manifestation" : nom,
                    "site_web" : site,
                    "code_postal" : code_postal,
                    "domaine" : domaine,
                }]
            })
            
            try :
                #Crée un format JSON correct !
                jsonPost = json.dumps(post)
                finalPost = json.loads(jsonPost)
            except ValueError as error:
                print("ERROR")
                quit()

            x = collection.insert_one(finalPost)
            # Show ids of inserted data

            return jsonify(isError= False,
                    message= "Success",
                    statusCode= 200), 200 

        else :
            return jsonify(isError= True,
                    message= "Incomplete request",
                    statusCode= 400), 400 

@app.route('/api')
def index():
    return "salut !"




if __name__ == '__main__':
    app.run(host='localhost', port=int(8080)) # Run the app

        
