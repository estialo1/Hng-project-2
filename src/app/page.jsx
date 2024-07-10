import { Footer } from "@/components/layout/footer";
import { ProductSingle } from "@/components/product/ProductSingle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start pl-10 pt-5">
      <header className="mb-9">
        <h3 className="font-extrabold text-2xl">Casual</h3>
      </header>
      <div className="flex flex-row justify-center flex-wrap gap-5">
        <ProductSingle
          data={{
            name: "Jacket",
            price: 67,
            img: "./14.png",
          }}
        />
        <ProductSingle
          data={{
            name: "Flowered skirt",
            price: 20,
            img: "./13.png",
          }}
        />
        <ProductSingle
          data={{
            name: "Maxi dress",
            price: 80,
            img: "./12.png",
          }}
        />
        <ProductSingle
          data={{
            name: "T-shirt",
            price: 100,
            img: "./16.png",
          }}
        />
        <ProductSingle
          data={{
            name: "Chinos trousers",
            price: 67,
            img: "./15.png",
          }}
        />
        <ProductSingle
          data={{
            name: "Denim trousers",
            price: 67,
            img: "./11.png",
          }}
        />
      </div>

      <Footer />
    </main>
  );
}
