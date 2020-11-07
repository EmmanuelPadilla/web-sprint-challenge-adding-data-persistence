const db=require('../data/db-config')

module.exports = {
    find,
    findById,
    add,
    findProjects
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

  
  function findProjects(id) {
    return db("task as t")
      .join( "project as p", "p.id", "t.id")
      .select("p.project_name", "t.instruction", "t.project_id" )
      .where("p.id", id);
  }