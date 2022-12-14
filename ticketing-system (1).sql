-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2022 at 10:55 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ticketing-system`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_description` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_status` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_created` datetime NOT NULL DEFAULT current_timestamp(),
  `date_updated` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`, `category_description`, `category_status`, `date_created`, `date_updated`) VALUES
(1, 'UST Account', 'For concerns regarding UST account test', '', '2022-09-17 01:14:58', '2022-10-31 15:52:44'),
(2, 'Cloud Campus Blackboard', 'Issues with the UST Blackboard account of the user', 'active', '2022-09-17 03:10:42', '2022-09-19 19:07:04'),
(31, 'Sample1', 'sample description', '', '2022-10-28 00:00:00', '2022-10-28 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_globalroles`
--

CREATE TABLE `tbl_globalroles` (
  `id` int(11) NOT NULL,
  `role_name` text NOT NULL,
  `date_added` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_globalroles`
--

INSERT INTO `tbl_globalroles` (`id`, `role_name`, `date_added`) VALUES
(1, 'Admin/Acad Official', '2022-11-25'),
(2, 'Academic Staff', '2022-11-25'),
(3, 'Non-academic Staff', '2022-11-25'),
(4, 'Student', '2022-11-25'),
(5, 'Other', '2022-11-25');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_issues`
--

CREATE TABLE `tbl_issues` (
  `issue_id` int(11) NOT NULL,
  `issue_name` text NOT NULL,
  `category_id` int(11) NOT NULL,
  `issue_description` text NOT NULL,
  `issue_status` varchar(255) NOT NULL COMMENT '0 - INACTIVE\r\n1 - ACTIVE',
  `date_created` date NOT NULL,
  `date_updated` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_issues`
--

INSERT INTO `tbl_issues` (`issue_id`, `issue_name`, `category_id`, `issue_description`, `issue_status`, `date_created`, `date_updated`) VALUES
(1, 'Issue #1', 1, 'ISSUE #1 DESCRIPTION', '1', '2022-10-09', '2022-10-09'),
(2, 'Issue #2', 2, 'ISSUE #2 DESCRIPTION', '1', '2022-10-09', '2022-10-09'),
(3, 'aaa', 0, 'aaa', '', '2022-11-03', '2022-11-03'),
(4, 'aaa', 31, 'aaa', '', '2022-11-03', '2022-11-03'),
(5, 'aaa', 2, 'aaa', '', '2022-11-03', '2022-11-03'),
(6, 'aaa111', 2, 'aaa111', '', '2022-11-03', '2022-11-03');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_reasons`
--

CREATE TABLE `tbl_reasons` (
  `id` int(11) NOT NULL,
  `reason` text NOT NULL,
  `reason_desc` text NOT NULL,
  `reason_added` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_reasons`
--

INSERT INTO `tbl_reasons` (`id`, `reason`, `reason_desc`, `reason_added`) VALUES
(1, 'Reason #1111', 'Reason #1 Description', '2022-11-12'),
(2, 'Reason #2', 'Reason #2 Description', '2022-11-12');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_solutions`
--

CREATE TABLE `tbl_solutions` (
  `id` int(11) NOT NULL,
  `solution` text NOT NULL,
  `solution_description` text NOT NULL,
  `date_created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_solutions`
--

INSERT INTO `tbl_solutions` (`id`, `solution`, `solution_description`, `date_created`) VALUES
(1, 'Solution #1', 'Solution desc1asdfasda', '2022-11-16'),
(2, 'Solution #2', 'solution desc2asdasd', '2022-11-16');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tickets`
--

CREATE TABLE `tbl_tickets` (
  `id` int(11) NOT NULL,
  `ticket_number` varchar(255) NOT NULL,
  `name` text NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0 COMMENT '0 - service request\r\n1 - ongoing ticket\r\n2 - resolved ticket\r\n3 - canceled ticket\r\n4 - rejected service request\r\n5 - reopened ticket',
  `reject_reason` int(11) NOT NULL,
  `voided_reason` int(11) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `role` int(11) NOT NULL,
  `affiliation` text NOT NULL,
  `category` int(11) NOT NULL,
  `issue` int(11) NOT NULL,
  `description` text NOT NULL,
  `file` varchar(1000) NOT NULL,
  `tech_user` int(11) NOT NULL,
  `priority_level` int(11) NOT NULL,
  `resolution` text NOT NULL,
  `remarks` text NOT NULL,
  `date_added` date NOT NULL,
  `date_resolved` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_tickets`
--

INSERT INTO `tbl_tickets` (`id`, `ticket_number`, `name`, `status`, `reject_reason`, `voided_reason`, `email`, `role`, `affiliation`, `category`, `issue`, `description`, `file`, `tech_user`, `priority_level`, `resolution`, `remarks`, `date_added`, `date_resolved`) VALUES
(1, '8306380', 'BOB2', 2, 0, 1, 'theloneboat@gmail.com', 1, 'asdasdas', 1, 1, 'asdasdas', 'C:\\fakepath\\Screenshot (1).png', 2, 2, '', 'asdasdasd', '2022-11-25', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id` int(11) NOT NULL,
  `first_name` text NOT NULL,
  `middle_name` text NOT NULL,
  `last_name` text NOT NULL,
  `email` text NOT NULL,
  `password` varchar(1000) NOT NULL,
  `user_role` int(11) NOT NULL,
  `user_status` int(11) NOT NULL,
  `date_added` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `first_name`, `middle_name`, `last_name`, `email`, `password`, `user_role`, `user_status`, `date_added`) VALUES
(1, 'John111', 'Doe', 'Banana', 'admin@admin.com', '123123', 1, 1, '2022-10-23'),
(2, 'Juan', 'Doe', 'Fruit', 'tech@tech.com', '123456', 2, 1, '2022-10-23'),
(3, 'Julia', 'Doe', 'Vegetable', 'tech2@tech2.com', '123456', 2, 1, '2022-10-23'),
(4, 'Stiffany', '', 'Madrigal', 'tiff.madrigal95@gmail.com', '123456', 3, 0, '2022-11-20');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user_roles`
--

CREATE TABLE `tbl_user_roles` (
  `id` int(11) NOT NULL,
  `user_role` int(11) NOT NULL,
  `user_rolename` varchar(1000) NOT NULL,
  `user_roledesc` text NOT NULL,
  `date_added` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_user_roles`
--

INSERT INTO `tbl_user_roles` (`id`, `user_role`, `user_rolename`, `user_roledesc`, `date_added`) VALUES
(1, 1, 'Admin', 'sample1', '2022-11-20'),
(2, 2, 'IT Support', 'sample2', '2022-11-20'),
(3, 3, 'Help Desk', 'sample3', '2022-11-20');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_voidreasons`
--

CREATE TABLE `tbl_voidreasons` (
  `id` int(11) NOT NULL,
  `reason` text NOT NULL,
  `reason_desc` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_voidreasons`
--

INSERT INTO `tbl_voidreasons` (`id`, `reason`, `reason_desc`, `date`) VALUES
(1, 'Void Reason #1', 'reason_1111', '2022-11-16'),
(2, 'Void Reason #2', 'reason_2', '2022-11-16');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `zip` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `terms` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_submitted` timestamp NOT NULL DEFAULT current_timestamp(),
  `date_submitted1` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`id`, `first_name`, `last_name`, `username`, `city`, `state`, `zip`, `terms`, `date_submitted`, `date_submitted1`) VALUES
(1, 'dasdadasd', 'dasdad', 'dasdad', 'asdadad', 'dsadad', 'asdad', 'on', '2022-09-14 16:00:00', '2022-09-15 13:28:12'),
(2, 'dasdadasd', 'dasdad', 'dasdad', 'asdadad', 'dsadad', 'asdad', 'on', '2022-09-14 16:00:00', '2022-09-15 13:28:12'),
(3, 'fdfsff', 'dsfsfdsff', 'dfsffsf', 'dsfsdffs', 'dsfsffs', 'fdsfsfsf', 'on', '2022-09-14 16:00:00', '2022-09-15 13:28:43'),
(4, 'dasdada', 'dsadad', 'dasdad', 'dsada', 'dasdad', 'dasda', 'on', '2022-09-14 16:00:00', '2022-09-15 15:20:05'),
(5, 'dasd', 'dasda', 'dsad', 'dasdad', 'dasdd', 'adsad', 'on', '2022-09-15 16:00:00', '2022-09-16 17:45:12'),
(6, 'dsadad', 'dadsa', 'dasda', 'dsda', 'dsada', 'dasdada', 'on', '2022-09-15 16:00:00', '2022-09-16 18:15:46'),
(7, 'dsdad', 'sdad', 'dadad', 'dasda', 'dsada', 'dada', 'on', '2022-09-15 16:00:00', '2022-09-16 18:17:47'),
(8, 'dsdad', 'sdad', 'dadad', 'dasda', 'dsada', 'dada', 'on', '2022-09-15 16:00:00', '2022-09-16 18:20:55'),
(9, 'dsdad', 'sdad', 'dadad', 'dasda', 'dsada', 'dada', 'on', '2022-09-15 16:00:00', '2022-09-16 18:20:56'),
(10, 'dsdad', 'sdad', 'dadad', 'dasda', 'dsada', 'dada', 'on', '2022-09-15 16:00:00', '2022-09-16 18:20:58'),
(11, 'dasda', 'dasda', 'dasda', 'dasda', 'dad', 'dasda', 'on', '2022-09-15 16:00:00', '2022-09-16 18:21:14'),
(12, 'dasda', 'dasda', 'dasda', 'dasda', 'dad', 'dasda', 'on', '2022-09-15 16:00:00', '2022-09-16 18:21:16'),
(13, 'dasda', 'dasda', 'daddasd', 'dasda', 'dad', 'dasda', 'on', '2022-09-15 16:00:00', '2022-09-16 18:47:51'),
(14, 'dasda', 'dasda', 'daddasd', 'dasda', 'dad', 'dasda', 'on', '2022-09-15 16:00:00', '2022-09-16 18:53:58'),
(15, 'dasda', 'dasda', 'daddasd', 'dasda', 'dad', 'dasda', 'on', '2022-09-15 16:00:00', '2022-09-16 18:54:42'),
(16, 'dasda', 'dasda', 'daddasd', 'dasda', 'dad', 'dasda', 'on', '2022-09-15 16:00:00', '2022-09-16 18:54:46'),
(17, 'dasda', 'dasda', 'daddasd', 'dasda', 'dad', 'dasda', 'on', '2022-09-15 16:00:00', '2022-09-16 18:55:12'),
(18, 'dasda', 'dasda', 'daddasd', 'dasda', 'dad', 'dasda', 'on', '2022-09-15 16:00:00', '2022-09-16 18:55:13'),
(19, 'dasda', 'dasda', 'daddasd', 'dasda', 'dad', 'dasda', 'on', '2022-09-15 16:00:00', '2022-09-16 18:59:47');

-- --------------------------------------------------------

--
-- Table structure for table `test2`
--

CREATE TABLE `test2` (
  `issue_id` int(11) NOT NULL,
  `issue_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `issue_description` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `issue_status` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_created` datetime NOT NULL DEFAULT current_timestamp(),
  `date_updated` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `tbl_globalroles`
--
ALTER TABLE `tbl_globalroles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_issues`
--
ALTER TABLE `tbl_issues`
  ADD PRIMARY KEY (`issue_id`);

--
-- Indexes for table `tbl_reasons`
--
ALTER TABLE `tbl_reasons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_solutions`
--
ALTER TABLE `tbl_solutions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_tickets`
--
ALTER TABLE `tbl_tickets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user_roles`
--
ALTER TABLE `tbl_user_roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_voidreasons`
--
ALTER TABLE `tbl_voidreasons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `test2`
--
ALTER TABLE `test2`
  ADD PRIMARY KEY (`issue_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `tbl_globalroles`
--
ALTER TABLE `tbl_globalroles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_issues`
--
ALTER TABLE `tbl_issues`
  MODIFY `issue_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_reasons`
--
ALTER TABLE `tbl_reasons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_solutions`
--
ALTER TABLE `tbl_solutions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_tickets`
--
ALTER TABLE `tbl_tickets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_user_roles`
--
ALTER TABLE `tbl_user_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_voidreasons`
--
ALTER TABLE `tbl_voidreasons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `test2`
--
ALTER TABLE `test2`
  MODIFY `issue_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
