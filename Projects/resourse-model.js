const db=require('../data/db-config')

module.exports = {
    find,
    findById,
    add
    
  };


  function find() {
      return db('resourse')
  }

  function findById(id){
      return db('resourse').where({id}).first()
  }

  async function add(resourse) {
    const [id] = await db("resourse").insert(resourse);
    return db("resourse").where({ id }).first()
  }