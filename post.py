import pymongo
from pymongo import MongoClient
from django.http import JsonResponse, Http404, HttpResponseBadRequest, HttpResponseNotAllowed

client = MongoClient('mongodb://localhost:27017')
db = client.projetArchitecture
collection = db.festivals

def addFestival(request):
    """ 
        Fonction pour ajouter un festival dans la base MongoDb.
    """
    if request.method != "POST":
        return HttpResponseNotAllowed(["POST"], "Method not allowed")
    else :
        if( request.POST.get["departement"] & request.POST.get["nom"] & request.POST.get["site"] & request.POST.get["code_postal"] & request.POST.get["domaine"] ):
            
            #Récuperation des champs de l'objet
            departement = request.POST.get["departement"]
            nom = request.POST.get["nom"]
            site = request.POST.get["site"]
            code_postal = request.POST.get["code_postal"]
            domaine = request.POST.get["domaine"]

            #Objet post à insérer dans MongoDb
            post = {"fields.departement" : departement,
                    "fields.nom_de_la_manifestation" : nom,
                    "fields.site_web" : site,
                    "fields.code_postal" : code_postal,
                    "fields.domaine" : domaine
            }

            x = collection.insert_one(post)
            # Show ids of inserted data
            print(x.inserted_id) 

        else :
            return HttpResponseBadRequest("Incomplete form")
        

        
