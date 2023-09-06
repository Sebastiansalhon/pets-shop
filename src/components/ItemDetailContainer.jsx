import React from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const productos = [
    {
      id: 1,
      nombre: "Natura Dogs Adulto",
      descripcion: "Natural Dog, le proporciona a su perro buenos niveles nutritivos. Combina vitaminas, minerales, Omega y demás nutrientes. Beneficios: combate  el colesterol malo, mantiene el aparato circulatorio libre de placas de grasas en las paredes arteriales, actúa contra infecciones y le da a su perro  una estructura ósea fuerte.",
      stock: 10,
      categoria: "Perros",
      precio: 2050,
    },
    {
      id: 2,
      nombre: "Equilibrio Perro Adulto",
      descripcion: "Alimento completo para perros adultos a partir de 12 meses de vida, con actividad normal. Para todas las razas.",
      stock: 7,
      categoria: "Perros",
      precio: 2990,
    },
    {
      id: 3,
      nombre: "Frost Cat Indoor",
      descripcion: "Alimento Super Premium para su gato, ofreciendo los máximos beneficios. Ingredientes con gran aceptación y alta digestibilidad. Frost incorpora en toda su línea componentes para  mejorar  la salud y la longevidad del animal maduro, reduciendo así la incidencia de enfermedades.",
      stock: 3,
      categoria: "Gatos",
      precio: 2170,
    },
    {
      id: 4,
      nombre: "Sachet Wiskas Gato + 1",
      descripcion: "El Sobrecito Whiskas es un alimento húmedo nutricionalmente completo y balanceado, presenta una textura irresistible para su exigente paladar. Con proteínas de origen animal de alta calidad. Proporcionando los nutrientes que tu gato necesita todos los días para estar saludable.",
      stock: 16,
      categoria: "Gatos",
      precio: 50,
    },
    {
      id: 5,
      nombre: "Yerba Gatera",
      descripcion: "Yerba Gatera. Ideal para estimular el juego en felinos, estimulante fisico y mental.",
      stock: 9,
      categoria: "Accesorios",
      precio: 70,
    },
    {
      id: 6,
      nombre: "Jueguete Dental con Ventosa",
      descripcion: "Juguete con ventosa. Ideal para colocar pastillas de comida. Fuerte agarre. ",
      stock: 14,
      categoria: "Accesorios",
      precio: 625,
    },
  ];

  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject(new Error("No hay datos"));
    }
  });

  getProductos
  .then((res) =>{
  })
  .catch((error) =>{
    console.log(error);
  })

  return (
    <>
      <ItemDetail productos={productos}
      />
    </>
  );
};

export default ItemDetailContainer;
