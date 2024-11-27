import { useState, useEffect } from 'react';

const products = [
  { name: "Kambing", image: "8.jpg" },
  { name: "Daging Kambing", image: "2.jpg" },
  { name: "Gulai Kambing", image: "5.jpg" },
  { name: "Tongseng Kambing", image: "6.jpg" },
  { name: "Sate Kambing", image: "7.jpg" },
  { name: "Susu Kambing", image: "4.jpg" },
];

const FeaturedProducts = () => {
  const [images, setImages] = useState({});

  useEffect(() => {
    // Menggunakan import.meta.glob untuk memuat semua gambar dalam folder assets/imgs
    const loadImages = async () => {
      const importedImages = import.meta.glob('../../../assets/imgs/*.{png,jpg,jpeg}');
      const imageEntries = await Promise.all(
        Object.entries(importedImages).map(async ([path, importFunc]) => {
          const module = await importFunc();
          const fileName = path.split('/').pop(); // Dapatkan nama file saja
          return [fileName, module.default];
        })
      );
      setImages(Object.fromEntries(imageEntries));
    };

    loadImages();
  }, []);

  return (
    <div className="bg-white  rounded-lg max-w-7xl mx-auto mt-8 ">
      <div className="max-w-7xl mx-auto px-4 p-6 ">
       <a href="detailproduk"> <h2 className="text-xl font-bold text-gray-800 mb-6 ">Kategori Produk Unggulan</h2> </a>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Cek apakah gambar tersedia di objek images */}
              {images[product.image] && (
                <img
                  src={images[product.image]}
                  alt={product.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg shadow-md object-cover"
                />
              )}
              <p className="text-center font-semibold text-gray-800 mt-2">{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
