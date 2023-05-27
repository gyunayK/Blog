const { mongoConnect, ObjectId } = require("../service/mongodb");
const db = mongoConnect()



module.exports = class Blog {
    constructor(title, author, comments) {
      this.title = title;
      this.author = author;
      this.comments = comments;
    }
  
    async save() {
      (await db).collection("blogs").insertOne(this);
    }
  
    static async find() {
      return (await db).collection("blogs").find().toArray();
    }
  
    static async findById(id) {
      return (await db).collection("blogs").find({ _id: new ObjectId(id) }).toArray();
    }
  
    static async updateOne(data) {
      return (await db).collection("blogs").updateOne(
         // what / filter
        { _id: new ObjectId(data.id) },
        // how / update
        { $set: { title: data.title, author: data.author, comments: data.comments } }
      )
    }
  
    static async deleteOne(id) {
      return (await db).collection("blogs").deleteOne({ _id: new ObjectId(id) })
    }
  };