var MongoClient = require('mongodb').MongoClient;
var value = require('./data.json');
   var assert = require('assert');
var title=value.movies[0].title;
var year=value.movies[0].year;
var director=value.movies[0].director;
MongoClient.connect("mongodb://localhost:27017/MyDbase", function (err, db) {
    

db.collection('movies', function (err, collection) {

for(var i=0;i<7;i++)
{
	var obj={
	"title":value.movies[i].title,
	"year":value.movies[i].year,
      "director":value.movies[i].director
      }

collection.insert({"title":obj.title,"year":obj.year,"director":obj.director });

}
});

db.collection('movies', function (err, collection) {
for(var i=0;i<7;i++)
  {
	var obj={
	"title":value.movies[i].title,
	"year":value.movies[i].year,
      "director":value.movies[i].director
      }
if(obj.title=="The Force Awakens"){
 console.log("Removing:"+obj.title +" "+obj.year+" "+obj.director);
 collection.remove({title:"The Force Awakens"}, function(err, result) {
        
            if(err) throw err;    
        
            console.log('Document Removed Successfully');
        });
}
}
});


db.collection('movies', function (err, collection) {
	for(var i=0;i<7;i++)
  {
	var obj={
	"title":value.movies[i].title,
	"year":value.movies[i].year,
      "director":value.movies[i].director
      }

if(obj.title=="Star Wars"){
 console.log("Found: "+obj.title+" "+obj.year+" "+obj.director);

        collection.find({title:"Star Wars"}, function(err, result) {
        
            if(err) throw err;    
        
            console.log('Document Found Successfully');
        });
      }
    }
    });

db.close();

});

