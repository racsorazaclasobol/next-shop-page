import { MobileSlideshow, SizeSelector, Slideshow } from "@/components";
import { QuantitySelector } from "@/components/product/quantity-selector/QuantitySelector";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
    params: {
        slug: string;
    };
}

const initialProducts = initialData.products;

export default function ProductPage({ params }: Props) {
    const { slug } = params;
    const products = initialProducts.find((item) => item.slug === slug);

    if (!products) {
        notFound();
    }

    return (
        <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* SlideShow */}
            <div className="col-span-1 md:col-span-2">
                {/* Desktop Slideshow */}
                <Slideshow
                    title={products.title}
                    images={products.images}
                    className="hidden md:block"
                    />

                {/* Mobile Slideshow */}
                <MobileSlideshow
                    title={products.title}
                    images={products.images}
                    className="block md:hidden"
                />
            </div>

            {/* Detalles */}
            <div className="col-span-1 px-5">
                <h1
                    className={`${titleFont.className} antialiased font-bold text-xl`}
                >
                    {products.title}
                </h1>
                <p className="text-lg mb-5">{products.price}</p>

                {/* Selector de Talla */}
                <SizeSelector
                    availableSize={products.sizes}
                    selectedSize={products.sizes[0]}
                />

                {/* Selector de Cantidad */}
                <QuantitySelector quantity={1} />

                {/* Button */}
                <button className="btn-primary my-5">Agregar al carrito</button>

                {/* Descripcion */}
                <h3 className="font-bold text-sm">Descripción</h3>
                <p>{products.description}</p>
            </div>
            <h1>Product Page</h1>
        </div>
    );
}
