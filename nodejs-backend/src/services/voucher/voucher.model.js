
    module.exports = function (app) {
        const modelName = "vouchers";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            category_id: { type: Schema.Types.ObjectId, comment: "Category, dropdown, false, true, true, true, true, true, true, category, categories, many-to-one, name," },
title: { type:  String , required: true, comment: "Title, input, false, true, true, true, true, true, true, , , , ," },
description: { type:  String , comment: "Description, textarea, false, true, true, true, true, true, true, , , , ," },
points: { type: Number, required: true, comment: "Points, input, false, true, true, true, true, true, true, , , , ," },
image: { type:  String , comment: "Image, file, false, true, true, true, true, true, false, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
          }, { timestamps: true });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };