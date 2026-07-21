const image = (name, color = "00f3ff") =>
  `https://placehold.co/600x400/121212/${color}?text=${encodeURIComponent(name)}`;

const rawProducts = [
  [1, "Secretlab TITAN Evo 2022", "Secretlab", "sillas", 549],
  [2, "Corsair T3 RUSH", "Corsair", "sillas", 319.99],
  [3, "Razer Iskur X", "Razer", "sillas", 399.99],
  [4, "Cougar Armor EVO RGB", "Cougar", "sillas", 369],
  [5, "Logitech G x Herman Miller Embody", "Logitech G", "sillas", 1695],
  [6, "DXRacer Formula Series F08", "DXRacer", "sillas", 289],
  [7, "Cooler Master Caliber R2", "Cooler Master", "sillas", 249.99],
  [8, "Noblechairs HERO", "Noblechairs", "sillas", 459],
  [9, "MSI MAG CH120 X", "MSI", "sillas", 229.99],
  [10, "ASUS ROG Chariot SL300C", "ASUS", "sillas", 499.99],

  [11, 'ASUS ROG Swift 27" 240Hz OLED', "ASUS", "monitores", 899.99],
  [12, 'Samsung Odyssey G7 32" Curved', "Samsung", "monitores", 599.99],
  [13, 'LG UltraGear 27" 144Hz IPS', "LG", "monitores", 279.99],
  [14, "BenQ ZOWIE XL2546K 245Hz", "BenQ", "monitores", 429],
  [15, "MSI Optix MAG274QRF-QD", "MSI", "monitores", 349.99],
  [16, "Gigabyte M28U 4K 144Hz", "Gigabyte", "monitores", 529.99],
  [17, "Acer Predator XB273U", "Acer", "monitores", 389.99],
  [18, "Alienware AW2521H 360Hz", "Alienware", "monitores", 499],
  [19, 'AOC C24G2 24" Curved', "AOC", "monitores", 169.99],
  [20, "ViewSonic ELITE XG270QG", "ViewSonic", "monitores", 459.99],

  [21, "Corsair Vengeance i7400", "Corsair", "pcs-armadas", 2899.99],
  [22, "MSI Aegis RS 13th", "MSI", "pcs-armadas", 1999],
  [23, "ASUS ROG Strix G16CH", "ASUS", "pcs-armadas", 1299.99],
  [24, "Alienware Aurora R15", "Alienware", "pcs-armadas", 3499.99],
  [25, "HP OMEN 45L", "HP", "pcs-armadas", 2499.99],
  [26, "Lenovo Legion Tower 7i", "Lenovo", "pcs-armadas", 1749.99],
  [27, "NZXT Player: Three Prime", "NZXT", "pcs-armadas", 3799],
  [28, "CyberPowerPC Gamer Xtreme", "CyberPowerPC", "pcs-armadas", 849.99],
  [29, "iBUYPOWER Y60 Ultra", "iBUYPOWER", "pcs-armadas", 2199.99],
  [30, "Thermaltake Reactor 380", "Thermaltake", "pcs-armadas", 1899],

  [31, "Intel Core i9-14900K", "Intel", "componentes", 549.99],
  [32, "AMD Ryzen 7 7800X3D", "AMD", "componentes", 389],
  [33, "Nvidia GeForce RTX 4090 FE", "Nvidia", "componentes", 1599.99],
  [34, "ASUS ROG Strix RTX 4070 Ti Super", "ASUS", "componentes", 899.99],
  [
    35,
    "Corsair Dominator Platinum RGB 32GB DDR5",
    "Corsair",
    "componentes",
    164.99,
  ],
  [36, "Samsung 990 PRO 2TB NVMe SSD", "Samsung", "componentes", 179.99],
  [37, "MSI MAG Z790 Tomahawk WiFi", "MSI", "componentes", 259.99],
  [38, "Lian Li O11 Dynamic EVO Case", "Lian Li", "componentes", 159.99],
  [39, "NZXT Kraken Elite 360 RGB", "NZXT", "componentes", 279.99],
  [40, "Seasonic PRIME TX-1000", "Seasonic", "componentes", 299.99],
];

const products = rawProducts.map(([id, name, brand, category, price]) => ({
  id,
  name,
  brand,
  category,
  price,
  image: image(name, id % 2 === 0 ? "ff6600" : "00f3ff"),
  description: `Producto gamer ${category.replace("-", " ")} de alto rendimiento, fabricado por ${brand}.`,
}));

export default products;
