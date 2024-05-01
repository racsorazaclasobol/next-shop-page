import { ProductsGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";

interface Props {
    params: {
        id: Category;
    };
}

const products = initialData.products;

export default function CategoryPage({ params }: Props) {
    const { id } = params;
    const label: Record<Category, string> = {
        men: "para Hombres",
        women: "para Mujeres",
        kid: "para Niños",
        unisex: "para Todos",
    };

    const productsFiltreds = products.filter((item) => item.gender === id);

    return (
        <>
            <Title
                title={`Articulos ${(label as any)[id]}`}
                subTitle={`Todos los Productos`}
                className="mb-3"
            />

            <ProductsGrid products={productsFiltreds} />
        </>
    );
}
