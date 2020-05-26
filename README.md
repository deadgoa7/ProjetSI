# ProjetSI
API pour gérer et afficher une base de données de festivals 

## BONNES PRATIQUES DU GIT 
1) Effectuer un clone du git en local
2) Créer une branche personnelle (votre nom de préférence) 
3) Effectuer des commit réguliers avec des descriptions explicites
4) Lancer le push sur votre branche, voire sur le develop
5) Merge request lorsqu'on est sûrs du code !

## Comment démarrer le service ?
1) Télécharger l'archive ou effectuer un git clone
2) Se rendre dans le fichier index.js et remplacer dbUrl par le chemin de votre base de données
3) Ouvrir un terminal et se placer dans ProjetSI
4) Lancer un npm install
5) Lancer un npm start

## Comment utiliser l'API (Seulement GET pour l'instant ?)
1) Se rendre sur localhost:8080/api pour acceder a la page principale
2) Liste de tous les festivals : localhost:8080/api/festivals
3) Filtre par numéro de département : localhost:8080/api/festivals/departement/## (Numéro départmement)
4) Filtre par Code Postal : localhost:8080/api/festivals/postal/##### (Code postal)  
