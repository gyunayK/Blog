const { mongoConnect, ObjectId } = require("../service/mongodb");
const db = mongoConnect()



module.exports = class Blog {
    constructor(title, author, content) {
      this.title = title;
      this.author = author;
      this.content = content;
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
        { $set: { title: data.title, author: data.author, content: data.content } }
      )
    }
  
    static async deleteOne(id) {
      return (await db).collection("blogs").deleteOne({ _id: new ObjectId(id) })
    }
  };