-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-01-2024 a las 02:21:19
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto_cbdf`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `nombre`, `descripcion`) VALUES
(1, 'Ropa', 'Categoría de ropa'),
(2, 'Electrónica', 'Categoría de productos electrónicos y tecnológicos'),
(3, 'Alimentos', 'Categoría de alimentos y bebidas'),
(4, 'Hogar', 'Categoría de productos para el hogar y decoración'),
(5, 'Salud', 'Categoría de productos relacionados con la salud y belleza'),
(6, 'Juguetes', 'Categoría de juguetes y juegos'),
(7, 'Deportes', 'Categoría de productos relacionados con deportes y actividades al aire libre'),
(8, 'Libros', 'Categoría de libros'),
(9, 'Muebles', 'Categoría de muebles y productos de decoración para el hogar'),
(10, 'Ferretería', 'Categoría de productos de ferretería y herramientas'),
(11, 'Joyería', 'Categoría de joyería y accesorios'),
(12, 'Jardinería', 'Categoría de artículos para jardinería'),
(13, 'Mascotas', 'Categoría de productos para mascotas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id_cliente` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `direccion` varchar(300) NOT NULL,
  `contacto` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id_cliente`, `nombre`, `direccion`, `contacto`) VALUES
(1, 'Ana Paola Rebolloso Saucedo', 'Calle Alameda #567. Zacatecas, Zac.', '2348642468'),
(2, 'Eliane Danae Trejo Aguiñaga', 'Calle Alameda #567. Zacatecas, Zac.', '8646894264'),
(3, 'Braulio Sebastián Vázquez Reyes', 'Calle Alameda #567. Zacatecas, Zac.', '4804268037'),
(4, 'Karina Puente Fernández', 'Calle Alameda #567. Zacatecas, Zac.', '9747326108');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `id_factura` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `cliente_id_cliente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `factura`
--

INSERT INTO `factura` (`id_factura`, `fecha`, `cliente_id_cliente`) VALUES
(1, '2024-01-08', 1),
(2, '2024-01-08', 4),
(3, '2024-01-08', 2),
(4, '2024-01-09', 3),
(5, '2024-01-11', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_producto` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `cantidad_disponible` int(11) NOT NULL,
  `categoria_id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_producto`, `nombre`, `precio`, `cantidad_disponible`, `categoria_id_categoria`) VALUES
(1, 'Sudadera para dama, negra', '578.99', 13, 1),
(2, 'Sudadera para dama, negra', '578.99', 13, 1),
(3, 'Camisa de algodón para caballero', '349.50', 20, 1),
(4, 'Vestido de fiesta elegante', '699.99', 8, 1),
(5, 'Pantalones vaqueros, estilo clásico', '259.95', 15, 1),
(6, 'Zapatillas deportivas, running', '129.99', 25, 1),
(7, 'Bufanda de lana, colores variados', '19.50', 30, 1),
(8, 'Traje de baño para mujer', '45.75', 12, 1),
(9, 'Gorra ajustable, estilo urbano', '29.99', 18, 1),
(10, 'Chaqueta de cuero genuino', '159.50', 10, 1),
(11, 'Calcetines de algodón, paquete de 5 pares', '12.99', 40, 1),
(12, 'Teléfono inteligente de última generación', '899.99', 30, 2),
(13, 'Portátil ultraligero, 14 pulgadas', '1249.50', 15, 2),
(14, 'Auriculares inalámbricos con cancelación de ruido', '179.99', 20, 2),
(15, 'Cámara digital DSLR, 24MP', '649.75', 10, 2),
(16, 'Tableta gráfica para diseño', '299.50', 25, 2),
(17, 'Altavoz Bluetooth resistente al agua', '45.99', 35, 2),
(18, 'Impresora multifunción inalámbrica', '149.99', 18, 2),
(19, 'Monitor curvo para gaming, 27 pulgadas', '349.50', 12, 2),
(20, 'Batería externa de alta capacidad', '29.75', 30, 2),
(21, 'Teclado mecánico RGB para gaming', '89.99', 22, 2),
(22, 'Paquete de arroz integral, 1 kg', '3.99', 50, 3),
(23, 'Aceite de oliva virgen extra, 500 ml', '7.50', 40, 3),
(24, 'Latas de atún en aceite, paquete de 6', '12.99', 25, 3),
(25, 'Pasta de trigo integral, paquete de 3', '5.75', 30, 3),
(26, 'Leche de almendras, sin azúcar, 1 litro', '2.99', 48, 3),
(27, 'Chocolate negro, 70% cacao, tabletas', '4.50', 20, 3),
(28, 'Café molido, tostado medio, 500 g', '8.99', 15, 3),
(29, 'Miel orgánica, 250 g', '6.25', 18, 3),
(30, 'Galletas integrales, paquete de avena', '3.50', 35, 3),
(31, 'Salsa de tomate artesanal, frasco', '2.75', 42, 3),
(32, 'Juego de sábanas de algodón, queen size', '45.99', 25, 4),
(33, 'Cortinas opacas, juego de 2 paneles', '34.50', 20, 4),
(34, 'Cojines decorativos, juego de 4', '19.99', 15, 4),
(35, 'Alfombra de área, diseño moderno', '89.75', 10, 4),
(36, 'Jarrón de cerámica, estilo contemporáneo', '29.99', 18, 4),
(37, 'Espejo de pared decorativo', '55.50', 12, 4),
(38, 'Toallas de baño de lujo, juego de 6', '27.99', 22, 4),
(39, 'Cubiertos de acero inoxidable, juego de 24', '49.50', 8, 4),
(40, 'Porta velas decorativo, conjunto de 3', '15.99', 30, 4),
(41, 'Organizador de escritorio de madera', '22.75', 25, 4),
(42, 'Termómetro digital infrarrojo', '19.99', 15, 5),
(43, 'Suplemento vitamínico multivitamínico', '14.50', 40, 5),
(44, 'Báscula digital para pesar', '24.99', 30, 5),
(45, 'Set de vendas elásticas, paquete de 5', '8.75', 25, 5),
(46, 'Cepillo de dientes eléctrico recargable', '39.50', 18, 5),
(47, 'Mascarilla facial reutilizable, paquete de 3', '12.99', 50, 5),
(48, 'Caja de primeros auxilios completa', '29.99', 10, 5),
(49, 'Pulsioxímetro de dedo, monitor de oxígeno', '44.50', 12, 5),
(50, 'Masajeador eléctrico de cuello y espalda', '69.75', 8, 5),
(51, 'Suplemento de proteína en polvo, vainilla', '21.99', 20, 5),
(52, 'Muñeca articulada con accesorios', '12.50', 40, 6),
(53, 'Rompecabezas educativo para niños', '9.99', 30, 6),
(54, 'Set de bloques de construcción', '19.99', 25, 6),
(55, 'Peluche suave de animal, tamaño grande', '15.75', 20, 6),
(56, 'Juego de mesa familiar', '24.99', 35, 6),
(57, 'Carro de control remoto para niños', '39.50', 15, 6),
(58, 'Figuras de acción coleccionables', '8.99', 50, 6),
(59, 'Juguete educativo de ciencia para niños', '14.25', 30, 6),
(60, 'Puzzle 3D de construcción', '29.99', 20, 6),
(61, 'Juego de plastilina creativa', '10.50', 40, 6),
(62, 'Balón de fútbol profesional', '24.99', 20, 7),
(63, 'Raqueta de tenis de alta calidad', '89.50', 15, 7),
(64, 'Set de pesas para entrenamiento en casa', '59.99', 25, 7),
(65, 'Cinta de correr plegable', '399.99', 10, 7),
(66, 'Bicicleta de montaña resistente', '299.50', 8, 7),
(67, 'Baloncesto oficial de competición', '19.75', 30, 7),
(68, 'Guantes de boxeo profesionales', '49.99', 12, 7),
(69, 'Botella de agua deportiva con filtro', '12.25', 40, 7),
(70, 'Tablero de dardos magnético', '29.99', 18, 7),
(71, 'Gorra de running transpirable', '15.99', 25, 7),
(72, 'Bestseller del año, novela emocionante', '18.75', 30, 8),
(73, 'Enciclopedia ilustrada de historia mundial', '34.99', 20, 8),
(74, 'Libro de cocina internacional', '25.50', 25, 8),
(75, 'Biografía del autor famoso', '22.99', 15, 8),
(76, 'Libro de poesía contemporánea', '14.99', 40, 8),
(77, 'Thriller psicológico, edición de tapa dura', '28.50', 18, 8),
(78, 'Libro infantil educativo', '9.75', 50, 8),
(79, 'Libro de autoayuda y motivación', '16.25', 35, 8),
(80, 'Novela de ciencia ficción', '20.99', 22, 8),
(81, 'Libro de fotografía artística', '39.99', 10, 8),
(82, 'Sofá de cuero genuino, tres plazas', '799.99', 10, 9),
(83, 'Mesa de centro moderna de cristal', '249.50', 15, 9),
(84, 'Silla ergonómica de oficina', '149.99', 20, 9),
(85, 'Cama king size con cabecero acolchado', '599.75', 8, 9),
(86, 'Estantería de madera maciza', '129.99', 25, 9),
(87, 'Lámpara de pie moderna', '69.50', 30, 9),
(88, 'Escritorio de esquina para estudio', '179.99', 12, 9),
(89, 'Cómoda de almacenamiento con cajones', '89.25', 18, 9),
(90, 'Espejo de cuerpo entero con marco', '49.99', 22, 9),
(91, 'Mesa de comedor extensible de madera', '349.50', 10, 9),
(92, 'Set de herramientas profesionales', '129.50', 15, 10),
(93, 'Taladro eléctrico inalámbrico', '89.99', 20, 10),
(94, 'Sierra circular de mano', '74.75', 18, 10),
(95, 'Juego de llaves métricas', '34.99', 30, 10),
(96, 'Caja de herramientas de plástico resistente', '49.50', 25, 10),
(97, 'Martillo de garra de acero forjado', '14.99', 40, 10),
(98, 'Destornillador magnético de precisión', '8.50', 50, 10),
(99, 'Nivel de burbuja magnético', '6.25', 60, 10),
(100, 'Llave ajustable de 10 pulgadas', '12.99', 35, 10),
(101, 'Cinta métrica de acero, 5 metros', '9.25', 45, 10),
(102, 'Collar de plata con piedras preciosas', '89.99', 25, 11),
(103, 'Anillo de oro blanco con diamantes', '299.50', 15, 11),
(104, 'Pulsera de cuero trenzado', '45.00', 30, 11),
(105, 'Reloj de lujo para caballero', '599.99', 10, 11),
(106, 'Conjunto de joyas de perlas', '129.75', 20, 11),
(107, 'Aretes de plata con circonitas', '35.50', 25, 11),
(108, 'Broche vintage con cristales', '18.99', 40, 11),
(109, 'Gemelos de oro para camisa', '59.95', 15, 11),
(110, 'Colgante de corazón con grabado', '49.99', 30, 11),
(111, 'Dije de jade con cadena', '65.00', 20, 11),
(112, 'Set de herramientas de jardinería', '29.99', 40, 12),
(113, 'Manguera extensible para riego', '18.50', 25, 12),
(114, 'Macetas de cerámica decorativas', '12.99', 30, 12),
(115, 'Cortadora de césped eléctrica', '89.95', 15, 12),
(116, 'Abono orgánico para plantas', '8.75', 50, 12),
(117, 'Herramienta de poda para árboles', '14.50', 20, 12),
(118, 'Luces solares para jardín', '24.99', 35, 12),
(119, 'Semillas de flores variadas', '5.99', 60, 12),
(120, 'Aspersor automático para riego', '32.00', 18, 12),
(121, 'Compostera doméstica', '39.75', 12, 12),
(122, 'Comida para perros, 5 kg', '15.75', 30, 13),
(123, 'Juguete masticable para cachorros', '8.99', 40, 13),
(124, 'Arena para gatos, 10 kg', '7.50', 25, 13),
(125, 'Collar antipulgas para gatos', '12.95', 20, 13),
(126, 'Cama suave para mascotas, tamaño mediano', '24.50', 15, 13),
(127, 'Jaula para pájaros, diseño moderno', '42.99', 10, 13),
(128, 'Comedero automático para perros', '34.75', 18, 13),
(129, 'Pelota de tenis para perros', '3.25', 50, 13),
(130, 'Collar reflectante para perros', '9.50', 30, 13),
(131, 'Hueso de cuero natural para perros', '6.99', 45, 13);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--

CREATE TABLE `proveedor` (
  `id_proveedor` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `direccion` varchar(300) NOT NULL,
  `contacto` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `proveedor`
--

INSERT INTO `proveedor` (`id_proveedor`, `nombre`, `direccion`, `contacto`) VALUES
(1, 'Distribuidora Multimax', 'Calle Madre #101. Zacatecas, Zac.', '3589526894'),
(2, 'Suministros Diversos', 'Calle Madre #101. Zacatecas, Zac.', '4914826104'),
(3, 'Comercio Variado', 'Avenida Principal #202. Ciudad de México, CDMX.', '5551234567'),
(4, 'Soluciones Retail Integral', 'Calle Central #303. Monterrey, NL.', '8187654321'),
(5, 'Logística Universal', 'Boulevard Central #404. Guadalajara, JAL.', '3339876543'),
(6, 'Proveedor OmniProductos', 'Avenida Principal #505. Puebla, PUE.', '2228765432'),
(7, 'Distribuciones Versátiles', 'Calle Principal #606. Tijuana, BC.', '6642345678');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transaccion`
--

CREATE TABLE `transaccion` (
  `id_transaccion` int(11) NOT NULL,
  `producto_id_producto` int(11) NOT NULL,
  `proveedor_id_proveedor` int(11) NOT NULL,
  `costo` decimal(10,2) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `transaccion`
--

INSERT INTO `transaccion` (`id_transaccion`, `producto_id_producto`, `proveedor_id_proveedor`, `costo`, `cantidad`, `fecha`) VALUES
(1, 11, 6, '134.63', 4, '2023-12-19'),
(2, 56, 1, '4697.00', 10, '2023-12-10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta`
--

CREATE TABLE `venta` (
  `id_venta` int(11) NOT NULL,
  `producto_id_producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `factura_id_factura` int(11) NOT NULL,
  `factura_cliente_id_cliente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `venta`
--

INSERT INTO `venta` (`id_venta`, `producto_id_producto`, `cantidad`, `factura_id_factura`, `factura_cliente_id_cliente`) VALUES
(2, 124, 2, 2, 4),
(3, 68, 1, 2, 4),
(4, 6, 2, 2, 4),
(5, 8, 1, 1, 1),
(6, 32, 2, 1, 1),
(7, 126, 1, 1, 1),
(8, 27, 6, 1, 1),
(9, 58, 3, 4, 3),
(10, 12, 1, 4, 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`id_factura`,`cliente_id_cliente`),
  ADD KEY `fk_factura_cliente1_idx` (`cliente_id_cliente`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_producto`),
  ADD KEY `fk_producto_categoria1_idx` (`categoria_id_categoria`);

--
-- Indices de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`id_proveedor`);

--
-- Indices de la tabla `transaccion`
--
ALTER TABLE `transaccion`
  ADD PRIMARY KEY (`id_transaccion`),
  ADD UNIQUE KEY `producto_id_producto` (`producto_id_producto`,`proveedor_id_proveedor`) USING BTREE,
  ADD KEY `fk_producto_has_proveedor_proveedor1_idx` (`proveedor_id_proveedor`),
  ADD KEY `fk_producto_has_proveedor_producto1_idx` (`producto_id_producto`);

--
-- Indices de la tabla `venta`
--
ALTER TABLE `venta`
  ADD PRIMARY KEY (`id_venta`,`factura_id_factura`,`factura_cliente_id_cliente`),
  ADD KEY `fk_factura_has_producto_producto1_idx` (`producto_id_producto`),
  ADD KEY `fk_venta_factura1_idx` (`factura_id_factura`,`factura_cliente_id_cliente`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `factura`
--
ALTER TABLE `factura`
  MODIFY `id_factura` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  MODIFY `id_proveedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `transaccion`
--
ALTER TABLE `transaccion`
  MODIFY `id_transaccion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `venta`
--
ALTER TABLE `venta`
  MODIFY `id_venta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `factura`
--
ALTER TABLE `factura`
  ADD CONSTRAINT `fk_factura_cliente1` FOREIGN KEY (`cliente_id_cliente`) REFERENCES `cliente` (`id_cliente`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `fk_producto_categoria1` FOREIGN KEY (`categoria_id_categoria`) REFERENCES `categoria` (`id_categoria`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `transaccion`
--
ALTER TABLE `transaccion`
  ADD CONSTRAINT `fk_producto_has_proveedor_producto1` FOREIGN KEY (`producto_id_producto`) REFERENCES `producto` (`id_producto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_producto_has_proveedor_proveedor1` FOREIGN KEY (`proveedor_id_proveedor`) REFERENCES `proveedor` (`id_proveedor`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `venta`
--
ALTER TABLE `venta`
  ADD CONSTRAINT `fk_factura_has_producto_producto1` FOREIGN KEY (`producto_id_producto`) REFERENCES `producto` (`id_producto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_venta_factura1` FOREIGN KEY (`factura_id_factura`,`factura_cliente_id_cliente`) REFERENCES `factura` (`id_factura`, `cliente_id_cliente`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
