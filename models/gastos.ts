import { Model, Schema, model } from "mongoose";

export interface IGastos {
  name: string;
  price: number;
}

const GastosSchema = new Schema<IGastos>({
  name: { type: String, unique: true },
  price: { type: Number, required: true },
});
const Gastos: Model<IGastos> = model<IGastos>("Gastos", GastosSchema);

export default Gastos;
