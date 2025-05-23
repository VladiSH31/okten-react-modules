import './ProductComponent.css'
import type {FC} from "react";
import type {IProduct, Reviews} from "../../models/IProducts.ts";

type ProductProps = {
    product: IProduct
}

const ProductComponent:FC<ProductProps> = ({product}) => {
    return (
        <div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-md m-5">
                {/* Зображення продукту */}
                <div className="mb-4">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-48 object-contain rounded-md"
                    />
                </div>

                {/* Заголовок і опис */}
                <h2 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>

                {/* Ціна, знижка та рейтинг */}
                <div className="mb-4">
                    <p className="text-lg font-semibold text-gray-800">
                        Price: ${product.price.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">
                        Discount: {product.discountPercentage}% off
                    </p>
                    <p className="text-sm text-yellow-500">
                        Rating: {product.rating} / 5
                    </p>
                </div>

                {/* Категорія, бренд і SKU */}
                <div className="mb-4">
                    <p className="text-sm text-gray-500">
                        <span className="font-semibold">Category:</span> {product.category}
                    </p>
                    <p className="text-sm text-gray-500">
                        <span className="font-semibold">Brand:</span> {product.brand}
                    </p>
                    <p className="text-sm text-gray-500">
                        <span className="font-semibold">SKU:</span> {product.sku}
                    </p>
                </div>

                {/* Наявність і доставка */}
                <div className="mb-4">
                    <p className="text-sm text-gray-500">
                        <span className="font-semibold">Availability:</span> {product.availabilityStatus}
                    </p>
                    <p className="text-sm text-gray-500">
                        <span className="font-semibold">Shipping:</span> {product.shippingInformation}
                    </p>
                </div>

                {/* Габарити та вага */}
                <div className="mb-4">
                    <p className="text-sm text-gray-500">
                        <span className="font-semibold">Weight:</span> {product.weight}g
                    </p>
                    <p className="text-sm text-gray-500">
                        <span
                            className="font-semibold">Dimensions:</span> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm
                    </p>
                </div>

                {/* Відгуки */}
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Reviews:</h3>
                    {product.reviews.map((review: Reviews, index: number) => (
                        <div key={index} className="mb-2 border-b border-gray-200 pb-2">
                            <p className="text-sm text-gray-500">
                                <span
                                    className="font-semibold">Reviewer:</span> {review.reviewerName} ({review.reviewerEmail})
                            </p>
                            <p className="text-sm text-gray-500">
                                <span className="font-semibold">Rating:</span> {review.rating} / 5
                            </p>
                            <p className="text-sm text-gray-600">{review.comment}</p>
                        </div>
                    ))}
                </div>

                {/* Політика повернення */}
                <div className="mb-4">
                    <p className="text-sm text-gray-500">
                        <span className="font-semibold">Return Policy:</span> {product.returnPolicy}
                    </p>
                </div>

                {/* Зображення продукту */}
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Images:</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {product.images.map((image: string, index: number) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Product Image ${index + 1}`}
                                className="w-full h-32 object-contain rounded-md"
                            />
                        ))}
                    </div>
                </div>

                {/* QR-код */}
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">QR Code:</h3>
                    <img
                        src={product.meta.qrCode}
                        alt="QR Code"
                        className="w-32 h-32 object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductComponent;