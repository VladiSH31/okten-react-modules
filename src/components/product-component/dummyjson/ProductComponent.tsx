import './ProductComponent.css'
import type {FC} from "react";
import type {IProductsDummyjson} from "../../../models/products/dummyjson/IProductsDummyjson.ts";

type ProductsPropsDummyjson = {
    item: IProductsDummyjson
}

const ProductComponent: FC<ProductsPropsDummyjson> = ({item}) => {
    return (
        <div className="product-card bg-white shadow-md rounded-lg p-6 mb-4">
            {/* Зображення продукту */}
            <div className="mb-4 w-full h-48 bg-gray-100 rounded-lg p-2 flex items-center justify-center">
                <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="max-w-full max-h-full object-contain rounded"
                />
            </div>

            {/* Заголовок продукту */}
            <h2 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h2>

            {/* Бренд і категорія */}
            <div className="flex justify-between items-center mb-3">
        <span className="text-sm text-gray-500">
          <span className="font-semibold">Brand:</span> {item.brand}
        </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
          {item.category}
        </span>
            </div>

            {/* Опис */}
            <p className="text-sm text-gray-700 mb-4 leading-relaxed line-clamp-3">
                {item.description}
            </p>

            {/* Ціна і знижка */}
            <div className="price-section mb-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-green-600">${item.price}</span>
                        {item.discountPercentage > 0 && (
                            <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                -{item.discountPercentage}%
              </span>
                        )}
                    </div>
                    <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span className="text-sm text-gray-600">{item.rating}</span>
                    </div>
                </div>
            </div>

            {/* Наявність і склад */}
            <div className="stock-info mb-4">
                <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">
            <span className="font-semibold">Stock:</span> {item.stock}
          </span>
                    <span className={`font-medium ${
                        item.availabilityStatus === 'In Stock'
                            ? 'text-green-600'
                            : 'text-red-600'
                    }`}>
            {item.availabilityStatus}
          </span>
                </div>
            </div>

            {/* Теги */}
            <div className="tags mb-4">
                <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                        >
              #{tag}
            </span>
                    ))}
                </div>
            </div>

            {/* Додаткова інформація */}
            <div className="additional-info text-xs text-gray-500 space-y-1">
                <p><span className="font-semibold">SKU:</span> {item.sku}</p>
                <p><span className="font-semibold">Weight:</span> {item.weight}g</p>
                <p><span className="font-semibold">Warranty:</span> {item.warrantyInformation}</p>
                <p><span className="font-semibold">Shipping:</span> {item.shippingInformation}</p>
            </div>
        </div>
    );
};

export default ProductComponent;