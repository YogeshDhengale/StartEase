import mongoose from "mongoose";

const TenantSchema = new mongoose.Schema(
  {
    name: { type: String },
    address: { type: String },
    state: { type: String },
    country: { type: String },
    email: { type: String },
    phone: { type: String },
    website: { type: String },
    taxNumber: { type: String },
    vatNumber: { type: String },
    regNumber: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Refers to the user who created the tenant
  },
  { timestamps: true }
);

const Tenant = mongoose.models.Tenant || mongoose.model("Tenant", TenantSchema);

export default Tenant;
