
    module.exports = function (app) {
        const modelName = "users";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            email: { type:  String , required: true, unique: true, comment: "Email, input, false, true, true, true, true, true, true, , , , ," },
username: { type:  String , required: true, unique: true, comment: "Username, input, false, true, true, true, true, true, true, , , , ," },
password: { type:  String , required: true, comment: "Password, password, false, true, true, true, true, true, false, , , , ," },
is_active: { type: Boolean, required: false, comment: "Is Active, checkbox, false, true, true, true, true, true, true, , , , ," },
points: { type: Number, comment: "Points, input, false, true, true, true, true, true, true, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
          }, { timestamps: true });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };