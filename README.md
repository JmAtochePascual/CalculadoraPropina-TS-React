# Calculadora de Propina

Esta es una aplicación de pedidos interactiva donde los usuarios pueden seleccionar productos de un menú, añadirlos a una orden, ajustar cantidades y agregar una propina antes de confirmar el total.

## Caracteristicas

- Visualización de un menú dinámico
- Agregar y eliminar productos del pedido
- Aumentar la cantidad de productos repetidos
- Seleccionar propina (10%, 20%, 50%)
- Calcular total incluyendo la propina
- Reiniciar la orden

## Tecnologías

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

- **React:** Librería de JavaScript para construir interfaces de usuario.
- **Vite:** Herramienta para desarrollo y compilación rápida.
- **Tailwind CSS:** Framework CSS para estilos rápidos y responsivos.

## Estructura del Proyecto

- **src/**: Carpeta con el código fuente.
  - **components/**: Componentes de React utilizados en el proyecto.
    - **Header.tsx**: Encabezado principal de la app.
    - **MenuItem.tsx**: Componente para mostrar cada ítem del menú.
    - **OrderItem.tsx**: Componente para mostrar los productos agregados al pedido.
    - **OrderTotal.tsx**: Componente que calcula y muestra el total de la orden incluyendo la propina.
    - **Tip.tsx**: Componente para seleccionar el porcentaje de propina.
  - **data/**: Datos estáticos de la aplicación.
    - **db.ts**: Arreglo con los ítems del menú.
  - **hooks/**: Hooks personalizados para la lógica del negocio.
    - **useOrder.ts**: Hook para manejar el estado del pedido y la propina.
  - **types/**: Tipos de datos TypeScript usados en el proyecto.
    - **index.d.ts**: Definiciones de tipos para el menú y la orden.
  - **App.tsx**: Componente principal de la aplicación.
  - **main.tsx**: Punto de entrada de la aplicación.
- **index.html**: Página HTML principal.
- **vite.config.ts**: Configuración del entorno Vite.

## Instalación

> Para trabajar con este proyecto, necesitarás tener instalado:
>
> - **Node.js** (versión 14 o superior)

## Uso

Para visualizar el proyecto localmente, sigue estos pasos:

1. Clona este repositorio:

```
git clone https://github.com/JMatochePascual/CalculadoraPropina-TS-React.git
```

2. Navega al directorio del proyecto:

```
cd CalculadoraPropina-TS-React
```

3. Instala las dependencias necesarias:

```
npm install
```

4. Inicia el servidor en modo desarrollo:

```
npm run dev
```

## Contribución

Si deseas contribuir al proyecto, por favor sigue estos pasos en orden:

1. Haz un fork del repositorio

2. Crea una nueva rama para tu funcionalidad:
   ```bash
   git checkout -b feature-name
   ```
3. Realiza y confirma tus cambios:
   ```bash
   git commit -am 'Add new feature'
   ```
4. Sube los cambios a tu repositorio:
   ```bash
   git push origin feature-name
   ```
5. Abre un Pull Request desde tu repositorio hacia el proyecto principal

## Licencia

Este proyecto se encuentra disponible bajo la licencia MIT. Puedes consultar los términos completos [aquí](https://opensource.org/licenses/MIT).

Desarrollado con 💚 por JMCode | © 2025 - Transformando ideas en soluciones digitales.
