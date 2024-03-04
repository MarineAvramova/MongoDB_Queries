//1.
db.Restaurants.find({})

//2.
db.Restaurants.find({}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1})

//3.
db.Restaurants.find({}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0})

//4.
db.Restaurants.find({borough: 'Bronx'})

//5.
db.getCollection('Restaurants').find({ borough: 'Bronx' }).limit(5);

//6.
db.Restaurants.find({borough: 'Bronx'}).skip(5).limit(5)

//7.
db.getCollection('Restaurants').find({ borough: 'Bronx' }).sort({ _id: 1 }).limit(5).skip(5);

//8.
db.Restaurants.find({"grades.score": {$gt: 90}});

//9.
db.Restaurants.find({"grades.score": {$gt: 80, $lt: 100}})

//10.
db.Restaurants.find({"address.coord.0": {$lt: -95.754168}});

//11.
db.Restaurants.find({ "cuisine": { "$ne": "American" }, "grades.score": { "$gt": 70 }, "address.coord.0": { "$lt": -65.754168 } });

//12.
db.getCollection('Restaurants').find({"cuisine": {"$ne": "American"}, "grades.score": {"$gt": 70}, "address.coord": {"$lt": [-65.754168, 0]}}

//13.
db.getCollection('Restaurants').find({cuisine: { $ne: 'American' },'grades.grade': 'A',borough: { $ne: 'Brooklyn' }},{ name: 1, cuisine: 1 }).sort({ cuisine: -1 });

//14.
db.getCollection('Restaurants').find({ name: { $regex: '^Wil' } },{restaurant_id: 1,name: 1,borough: 1,cuisine: 1});

//15.
db.getCollection('Restaurants').find({ name: { $regex: 'ces$' } },{restaurant_id: 1,name: 1,borough: 1,cuisine: 1});

//16.
db.getCollection('Restaurants').find({ name: { $regex: '.*Reg.*' } },{restaurant_id: 1,name: 1,borough: 1,cuisine: 1});

//17.
db.getCollection('Restaurants').find({borough: 'Bronx',cuisine: { $in: ['American', 'Chinese'] }});

//18.
db.getCollection('Restaurants').find({$or: [{ borough: 'Staten Island' },{ borough: 'Queens' },{ borough: 'Bronx' },{ borough: 'Brooklyn' }]},{restaurant_id: 1,name: 1,borough: 1,cuisine: 1});

//19.
db.getCollection('Restaurants').find({borough: {$nin: ['Staten Island','Queens','Bronx','Brooklyn']}},{restaurant_id: 1,name: 1,borough: 1,cuisine: 1});

//20.
db.getCollection('Restaurants').find({ 'grades.score': { $lte: 10 } }, {'restaurant_id': 1, 'name': 1, 'borough': 1, 'cuisine': 1, '_id': 0 });

//21.
db.getCollection('Restaurants').find({ $or: [ { cuisine: "Seafood", name: { $nin: ["American", "Chinese"] } }, { name: { $regex: '^Wil' } } ] });

//22.
db.getCollection('Restaurants').find({ "grades": { $elemMatch: { "grade": "A", "score": 11, "date": ISODate("2014-08-11T00:00:00Z") } } }, { "restaurant_id": 1, "name": 1, "grades": 1, "_id": 0 });

//23.
db.getCollection('Restaurants').find({ "grades.1.grade": "A", "grades.1.score": 9, "grades.1.date": ISODate("2014-08-11T00:00:00Z") }, { "restaurant_id": 1, "name": 1, "grades": 1, "_id": 0 });

//24.
db.getCollection('Restaurants').find({ "address.coord.1": { $gt: 42, $lte: 52 } }, { "restaurant_id": 1, "name": 1, "address": 1, "_id": 0 });

//25.
db.getCollection('Restaurants').find({}).sort({ "name": 1 });

//26.
db.getCollection('Restaurants').find({}).sort({ "name": -1 });

//27.
db.Restaurants.find({}).sort({ "cuisine": 1, "borough": -1 });

//28.
db.getCollection('Restaurants').find({ "address.street": { $exists: false } });

//29.
db.getCollection('Restaurants').find({ "address.coord": { $type: "double" } });

//30.
db.getCollection('Restaurants').find({ "grades.score": { $mod: [7, 0] } }, { "restaurant_id": 1, "name": 1, "grades": 1, "_id": 0 });

//31.
db.getCollection('Restaurants').find({ "name": { $regex: "mon", $options: "i" } }, { "restaurant_id": 1, "name": 1, "borough": 1, "address.coord": 1, "cuisine": 1, "_id": 0 });

//32.
db.getCollection('Restaurants').find({ "name": { $regex: '^Mad', $options: 'i' } }, { "restaurant_id": 1, "name": 1, "borough": 1, "address.coord": 1, "cuisine":

