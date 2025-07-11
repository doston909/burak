import mongoose, { Schema } from "mongoose";
import { 
    ProductCollection, 
    ProductSize, 
    ProductStatus, 
    ProductVolume 
} from "../libs/enums/product.enum";

const productSchema = new Schema(
    {
        ProductStatus: {
            type: String,
            enum: ProductStatus,
            default: ProductStatus.PAUSE,
        },

        productCollection: {
            type: String,
            enum: Object.values(ProductCollection),
            required: true,
        },

        productName: {
            type: String,
            required: true,
    },

        productPrice: {
            type: Number,
            required: true,
    },

        productLeftCount: {
            type: Number,
            required: true,
    },

        productSize: {
            type: String,
            enum: ProductSize,
            default: ProductSize.NORMAL,
    },

        productVolume: {
            type: Number,
            enum: ProductVolume,
            default: ProductVolume.ONE,
    },

        productDesc: {
            type: String,
    },

        productImages: {
            type: [String],
            default: [],
    },

        productViews: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);



export default mongoose.model("Product", productSchema);

