module.exports = {
    client: 'sqlite3',//specifying the DBMS
    useNullAsDefault: true, // req'd for sqlite
    connection: {
        filename: "./data/produce.db3"
    }
}