import OsvaldoLogo from "./assets/osvaldo-logo.jpg";
import ProductList from "./components/productList";

function App() {
  const items = [
    {
      title: "CAFÉ",
      productList: [
        {
          product: "Espresso",
          price: 400,
        },
        {
          product: "Macchiatto",
          price: 400,
        },
        {
          product: "Cortado",
          price: 400,
        },
        {
          product: "Americano",
          price: 400,
        },
        {
          product: "Capuccino",
          price: 500,
        },
        {
          product: "Flat White",
          price: 500,
        },
        {
          product: "Latte",
          price: 500,
        },
        {
          product: "Mocca",
          price: 600,
        },
      ],
    },
    {
      title: "CAFÉ FRÍO",
      productList: [
        {
          product: "Iced Americano",
          price: 80,
        },
        {
          product: "Iced Cappuccino",
          price: 90,
        },
        {
          product: "Iced Flat White",
          price: 100,
        },
        {
          product: "Iced Latte",
          price: 90,
        },
      ],
    },
    {
      title: "TÉS",
      productList: [
        {
          product: "Matcha Latte",
          price: 500,
        },
        {
          product: "Chai Latte",
          price: 450,
        },
        {
          product: "Hibicus",
          price: 400,
        },
        {
          product: "Té de Rosas",
          price: 400,
        },
        {
          product: "Té negro",
          price: 300,
        },
      ],
    },
    {
      title: "DULCE",
      productList: [
        {
          product: "Americano",
          price: 60,
        },
        {
          product: "Capuccino",
          price: 60,
        },
        {
          product: "Espresso Doble",
          price: 60,
        },
        {
          product: "Latte",
          price: 80,
        },
        {
          product: "Macchiato",
          price: 90,
        },
        {
          product: "Menta Chocolate",
          price: 100,
        },
        {
          product: "Moka",
          price: 90,
        },
        {
          product: "Moka Blanco",
          price: 90,
        },
      ],
    },
    {
      title: "SALADO",
      productList: [
        {
          product: "Caramelo",
          price: 80,
        },
        {
          product: "Jalea de Café",
          price: 90,
        },
        {
          product: "Cookies and Cream",
          price: 100,
        },
        {
          product: "Moka de Nuez",
          price: 90,
        },
        {
          product: "Crema de Matcha",
          price: 120,
        },
        {
          product: "Menta con Chispas",
          price: 120,
        },
        {
          product: "Crema de Fresa",
          price: 110,
        },
        {
          product: "Vaina de Vainilla",
          price: 90,
        },
      ],
    },
  ];
  return (
    <div className="App">
      <h1>Cafe Osvaldo</h1>

      <div className="image-container">
        <img src={OsvaldoLogo} alt="logo" />
      </div>

      {items.map((item, i) => {
        return (
          <ProductList
            title={item.title}
            itemsList={item.productList}
            key={i}
          />
        );
      })}
    </div>
  );
}

export default App;
