import mongoose, { Schema } from "mongoose";

class databaseService {
  private schema: Schema;
  private createdModel = false;
  private dbContext: any;

  constructor() {
    this.schema = new Schema({
      agencia: {
        type: Number,
        required: true,
      },
      conta: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      balance: {
        type: Number,
        required: true,
        min: 0,
      },
    });
  }

  connect = async () => {
    try {
      const uri =
        "mongodb+srv://mongo:260191@cluster0-kvtie.gcp.mongodb.net/Igti?retryWrites=true&w=majority";

      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      if (!this.createdModel) {
        this.dbContext = mongoose.model("Bank", this.schema, "Bank");
        this.createdModel = true;
      }
    } catch (error) {
      console.log(`err: ${error}`);
      throw error;
    }
  };

  getAllBalances = async () => {
    try {
      return await this.dbContext.find({});
    } catch (error) {
      return error;
    }
  };

  getAccount = async (
    filter: any,
    sorted: any = undefined,
    take: number = -1
  ) => {
    let result = await this.dbContext.findOne(filter);

    if (sorted) {
      result = result.sort(sorted);
    }

    if (take > 0) {
      result = result.limit(take);
    }
    return result;
  };

  deleteAccount = async (filter: any) => {
    await this.dbContext.deleteOne(filter);
  };

  save = async (obj: any) => {
    this.dbContext.save(obj);
  };
  aggregateByAgency = async () => {
    return await this.dbContext.aggregate([
      {
        $group: { _id: "$agencia" },
      },
    ]);
  };
}

export default databaseService;
