db.getCollection('Restaurants').find(
    { 
        $or: [
        {"address.zipcode":{$eq:"17988"}},
        {"name":/Thai$/},
        {"address.street":/Street$/} ] 
    })