# Bienvenidos a mi proyecto de React para el cusro de CODERHOUSE

## Base mi proyecto en un E-commerce relacionado a la venta de comida de animales y accesorios.


### Librerias utilizadas:
* __React Router DOM__
* __Chakra UI__
* __Toastify__


#### Puse en practica conociemientos de JavaScript para poder agregar y quitar items al carrito, utilizando tambien un CONTEXT para pasar esas funciones a sus hijos, encerrando mediante CartContext a todos los componentes que fueran a necesitar funciones relacionadas al carrito, en App.jsx.


#### Utilizando react-router-dom cree links para que mis componentes esten conectados, de esta manera al clickear al Brand será redirigido a la pantalla principal, que en este caso muestra la lista de todos los artículos. Tambien podra dirigirse al Cart haciendo click en el icono del cart o tambien desplegar un menú de categorías en el apartado de "Categorias", teniendo estas 3 diferentes: Perros, Gatos y Accesorios. Al clickear cualquiera de ellas te llevara mediante el useParams, tambien de react-router-dom, a todos los artículos de esa categoría. 

#### Para cargar los artículos utilicé Firebase de Google. Cargando allí todos los artículos con sus respectivos datos, tales como: precio, categoría, id, nombre, descripción e imagen. Luego de estos estar cargados los llame a mi proyecto y los rendericé en ItemListConteiner. Estos a tener una demora en renderizar, son previamente sustituidos por un Loader el cual desaparece cuando cargan. Para este Loader cree un componente extra el cual es llamado cuando el array productos esta vacío. 


##### Para poder correr el proyecto utilizo el comando en consola "npm run dev" teniendo instalado previamente el node en su versión más estable. 

##### A continuación dejo un GIF del funcionamiento del proyecto. 



