module.exports = async (client) => {
    client.users.createIndex({ username: 1 }, { unique: true });
}