import { ProductsGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
    return (
        <>
            <Title title="Tienda" subTitle="Todos los productos" className="mb-3" />

            <ProductsGrid products={ products } />
        </>
    );
}
