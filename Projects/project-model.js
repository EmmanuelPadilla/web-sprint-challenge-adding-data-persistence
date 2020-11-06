const db=require('../data/db-config')

module.exports = {
    find,
    findById,
    add
    
  };


  function find() {
      return db('project')
  }

  function findById(id){
      return db('project').where({id}).first()
  }

  async function add(project) {
    const [id] = await db("project").insert(project);
    return db("project").where({ id }).first();
  }