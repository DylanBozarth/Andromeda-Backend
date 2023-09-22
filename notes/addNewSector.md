// Add new sector or any other document
// replace the mongo url with the actual url 
// do not run in the railway app 
railway run mongoimport --authenticationDatabase=admin  ${MONGOURL} --collection sectora --type json --file sectorA.json