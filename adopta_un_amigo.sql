-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 21, 2021 at 09:46 PM
-- Server version: 5.7.32-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `adopta_un_amigo`
--

-- --------------------------------------------------------

--
-- Table structure for table `perros`
--

CREATE TABLE `perros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `edad` varchar(255) NOT NULL,
  `raza` varchar(255) NOT NULL,
  `genero` varchar(255) NOT NULL,
  `comportamiento` varchar(255) NOT NULL,
  `imagen` varchar(1500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `perros`
--

INSERT INTO `perros` (`id`, `nombre`, `edad`, `raza`, `genero`, `comportamiento`, `imagen`) VALUES
(11, 'Hilda', '4 meses', 'Jack Russel', 'Femenino', 'Arrecha', 'https://scontent-dus1-1.xx.fbcdn.net/v/t1.0-1/p148x148/17103321_1239710586120979_5336148633635503619_n.jpg?_nc_cat=110&ccb=3&_nc_sid=1eb0c7&_nc_ohc=r2SAxl80TrkAX-uwFHz&_nc_ht=scontent-dus1-1.xx&tp=6&oh=0cb5c9f17956cdfea9c5aef7ba746248&oe=6052631D'),
(12, 'Cornelius', '1 mes y 28 dias', 'Rottweiler', 'Masculino', 'Hiperactivo, Juguetón', 'https://img.bekiamascotas.com/articulos/portada/75000/75312.jpg'),
(13, 'Max', '3 Meses', 'Pastor Alemán', 'Masculino', 'Juguetón', 'https://www.hola.com/imagenes/estar-bien/20191004150785/pastor-aleman-raza-de-perro-caracteristicas/0-728-57/raza-de-perro-pastor-aleman-m.jpg'),
(14, 'Pepe', '1 Año', 'Bulldog', 'Masculino', 'Tranquilo', 'https://t1.uc.ltmcdn.com/images/5/3/7/como_saber_si_mi_bulldog_frances_es_puro_50735_600.jpg'),
(15, 'Hilary', '1 Año', 'Shih Tzu', 'Femenino', 'Juguetona', 'https://http2.mlstatic.com/cachorras-shih-tzu-shitzu-hembras-navidad-D_NQ_NP_927305-MLV40031080727_122019-F.jpg'),
(16, 'Principe', '1Año y 4 meses', 'Bichon Frise', 'Masculino', 'Hiperactiva', 'https://t2.ea.ltmcdn.com/es/razas/6/0/0/img_6_bichon-frise_0_orig.jpg'),
(18, 'Bale', '4 meses', 'Corgi Gales', 'Masculino', 'Hiperactivo', 'https://www.mundoperros.es/wp-content/uploads/2017/03/Corgi.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `perros`
--
ALTER TABLE `perros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `perros`
--
ALTER TABLE `perros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
