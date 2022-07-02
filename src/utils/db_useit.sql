-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 27-Mar-2022 às 15:42
-- Versão do servidor: 5.7.36
-- versão do PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db_useit`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(200) NOT NULL,
  `name` varchar(50) NOT NULL,
  `profession` varchar(100) NOT NULL,
  `cpf` varchar(15) NOT NULL,
  `cep` int(15) NOT NULL,
  `reference` varchar(200) DEFAULT NULL,
  `birthdate` date NOT NULL,
  `genre` varchar(30) NOT NULL,
  `phone_number` bigint(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  PRIMARY KEY (`cpf`,`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `address`, `name`, `profession`, `cpf`, `cep`, `reference`, `birthdate`, `genre`, `phone_number`, `email`) VALUES
(1, 'ergerwrywwywey', 'pablo henrique', 'jogador de futebol', '765.123.123-34', 77001144, 'wgfsrgggewgegwegweg', '2000-03-08', 'masculino', 99999999, 'yarion@gmail.com'),
(2, 'ergerwrywwywey', 'pablo henrique', 'jogador de futebol', '765.123.123-34', 77001144, 'wgfsrgggewgegwegweg', '2000-03-08', 'masculino', 99999999, 'yarion@gmail.com');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
