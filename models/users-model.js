const db = require('../db');

exports.createUser = async (username, password, locations, role='user')  => {
    const r = await db.users.insert({
        username: username,
        password: password,
        locations: locations,
        role: role
    });
    return r;
}