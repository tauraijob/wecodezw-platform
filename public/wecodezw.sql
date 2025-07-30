-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 30, 2025 at 05:06 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wecodezw`
--

-- --------------------------------------------------------

--
-- Table structure for table `achievements`
--

CREATE TABLE `achievements` (
  `id` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL,
  `icon` varchar(191) DEFAULT NULL,
  `badge` varchar(191) DEFAULT NULL,
  `points` int(11) NOT NULL DEFAULT 0,
  `criteria` text NOT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `certificates`
--

CREATE TABLE `certificates` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `trackId` varchar(191) DEFAULT NULL,
  `title` varchar(191) NOT NULL,
  `description` varchar(191) DEFAULT NULL,
  `issuedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `certificateUrl` varchar(191) DEFAULT NULL,
  `verificationCode` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `challenges`
--

CREATE TABLE `challenges` (
  `id` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `description` text NOT NULL,
  `instructions` text NOT NULL,
  `starterCode` text DEFAULT NULL,
  `solutionCode` text DEFAULT NULL,
  `testCases` text NOT NULL,
  `difficulty` enum('BEGINNER','INTERMEDIATE','ADVANCED','EXPERT') NOT NULL,
  `category` enum('WEB_DEVELOPMENT','MOBILE_DEVELOPMENT','DATA_SCIENCE','MACHINE_LEARNING','DEVOPS','CYBERSECURITY','GAME_DEVELOPMENT','BLOCKCHAIN','API_DEVELOPMENT','DATABASE','ALGORITHMS','SYSTEM_DESIGN') NOT NULL,
  `points` int(11) NOT NULL DEFAULT 10,
  `timeLimit` int(11) DEFAULT NULL,
  `memoryLimit` int(11) DEFAULT NULL,
  `isPublished` tinyint(1) NOT NULL DEFAULT 0,
  `tags` text DEFAULT NULL,
  `lessonId` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` varchar(191) NOT NULL,
  `content` text NOT NULL,
  `authorId` varchar(191) NOT NULL,
  `postId` varchar(191) NOT NULL,
  `parentId` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `enrollments`
--

CREATE TABLE `enrollments` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `trackId` varchar(191) NOT NULL,
  `enrolledAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `completedAt` datetime(3) DEFAULT NULL,
  `progress` double NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lessons`
--

CREATE TABLE `lessons` (
  `id` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `content` text NOT NULL,
  `videoUrl` varchar(191) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `sortOrder` int(11) NOT NULL,
  `isPublished` tinyint(1) NOT NULL DEFAULT 0,
  `trackId` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `postId` varchar(191) DEFAULT NULL,
  `commentId` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `content` text NOT NULL,
  `excerpt` varchar(191) DEFAULT NULL,
  `authorId` varchar(191) NOT NULL,
  `isPublished` tinyint(1) NOT NULL DEFAULT 0,
  `tags` text DEFAULT NULL,
  `views` int(11) NOT NULL DEFAULT 0,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `progress`
--

CREATE TABLE `progress` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `lessonId` varchar(191) NOT NULL,
  `isCompleted` tinyint(1) NOT NULL DEFAULT 0,
  `timeSpent` int(11) NOT NULL DEFAULT 0,
  `lastAccessed` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `completedAt` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `submissions`
--

CREATE TABLE `submissions` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `challengeId` varchar(191) NOT NULL,
  `code` text NOT NULL,
  `language` varchar(191) NOT NULL,
  `status` enum('PENDING','ACCEPTED','WRONG_ANSWER','TIME_LIMIT_EXCEEDED','MEMORY_LIMIT_EXCEEDED','RUNTIME_ERROR','COMPILATION_ERROR') NOT NULL,
  `score` double DEFAULT NULL,
  `executionTime` int(11) DEFAULT NULL,
  `memoryUsed` int(11) DEFAULT NULL,
  `testResults` text DEFAULT NULL,
  `feedback` text DEFAULT NULL,
  `submittedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tracks`
--

CREATE TABLE `tracks` (
  `id` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `description` text NOT NULL,
  `shortDescription` varchar(191) DEFAULT NULL,
  `thumbnail` varchar(191) DEFAULT NULL,
  `difficulty` enum('BEGINNER','INTERMEDIATE','ADVANCED','EXPERT') NOT NULL,
  `category` enum('WEB_DEVELOPMENT','MOBILE_DEVELOPMENT','DATA_SCIENCE','MACHINE_LEARNING','DEVOPS','CYBERSECURITY','GAME_DEVELOPMENT','BLOCKCHAIN','API_DEVELOPMENT','DATABASE','ALGORITHMS','SYSTEM_DESIGN') NOT NULL,
  `estimatedHours` int(11) NOT NULL,
  `price` double NOT NULL DEFAULT 0,
  `isPublished` tinyint(1) NOT NULL DEFAULT 0,
  `isPremium` tinyint(1) NOT NULL DEFAULT 0,
  `prerequisites` text DEFAULT NULL,
  `learningOutcomes` text DEFAULT NULL,
  `tags` text DEFAULT NULL,
  `sortOrder` int(11) NOT NULL DEFAULT 0,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `username` varchar(191) NOT NULL,
  `firstName` varchar(191) NOT NULL,
  `lastName` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `avatar` varchar(191) DEFAULT NULL,
  `bio` varchar(191) DEFAULT NULL,
  `location` varchar(191) DEFAULT NULL,
  `website` varchar(191) DEFAULT NULL,
  `githubUsername` varchar(191) DEFAULT NULL,
  `linkedinUrl` varchar(191) DEFAULT NULL,
  `twitterHandle` varchar(191) DEFAULT NULL,
  `isEmailVerified` tinyint(1) NOT NULL DEFAULT 0,
  `emailVerificationToken` varchar(191) DEFAULT NULL,
  `resetPasswordToken` varchar(191) DEFAULT NULL,
  `resetPasswordExpires` datetime(3) DEFAULT NULL,
  `role` enum('USER','ADMIN','INSTRUCTOR') NOT NULL DEFAULT 'USER',
  `xpPoints` int(11) NOT NULL DEFAULT 0,
  `level` int(11) NOT NULL DEFAULT 1,
  `streak` int(11) NOT NULL DEFAULT 0,
  `lastActiveDate` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `lastLoginAt` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `firstName`, `lastName`, `password`, `avatar`, `bio`, `location`, `website`, `githubUsername`, `linkedinUrl`, `twitterHandle`, `isEmailVerified`, `emailVerificationToken`, `resetPasswordToken`, `resetPasswordExpires`, `role`, `xpPoints`, `level`, `streak`, `lastActiveDate`, `createdAt`, `updatedAt`, `isActive`, `lastLoginAt`) VALUES
('cmdm4n2jg00006858yl8hl4xb', 'admin@wecodezw.com', 'admin', 'Admin', 'User', '$2b$12$VsXa3.ONak88tpE/qU3SYe0WKxq0KJWcTNrwAjQ.fgxgbK2AbKVUS', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, 'ADMIN', 0, 1, 0, '2025-07-27 20:23:51.196', '2025-07-27 20:23:51.196', '2025-07-27 21:16:53.205', 1, '2025-07-27 21:16:53.203'),
('cmdm4rbnx000068akrhnlgcvi', 'student@wecodezw.com', 'student', 'John', 'Doe', '$2b$12$DC1ERhNhkafMBzFbz03Jz.pqsAuUVbHE8pZcBrCLnYI3zrwCFyjua', NULL, 'Passionate learner exploring the world of coding!', 'Harare, Zimbabwe', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, 'USER', 0, 1, 0, '2025-07-27 20:27:09.645', '2025-07-27 20:27:09.645', '2025-07-27 21:07:30.914', 1, '2025-07-27 21:07:30.911');

-- --------------------------------------------------------

--
-- Table structure for table `user_achievements`
--

CREATE TABLE `user_achievements` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `achievementId` varchar(191) NOT NULL,
  `earnedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `achievements`
--
ALTER TABLE `achievements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `certificates`
--
ALTER TABLE `certificates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `certificates_verificationCode_key` (`verificationCode`),
  ADD KEY `certificates_userId_fkey` (`userId`);

--
-- Indexes for table `challenges`
--
ALTER TABLE `challenges`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `challenges_slug_key` (`slug`),
  ADD KEY `challenges_lessonId_fkey` (`lessonId`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_authorId_fkey` (`authorId`),
  ADD KEY `comments_postId_fkey` (`postId`),
  ADD KEY `comments_parentId_fkey` (`parentId`);

--
-- Indexes for table `enrollments`
--
ALTER TABLE `enrollments`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `enrollments_userId_trackId_key` (`userId`,`trackId`),
  ADD KEY `enrollments_trackId_fkey` (`trackId`);

--
-- Indexes for table `lessons`
--
ALTER TABLE `lessons`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `lessons_trackId_slug_key` (`trackId`,`slug`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `likes_userId_postId_key` (`userId`,`postId`),
  ADD UNIQUE KEY `likes_userId_commentId_key` (`userId`,`commentId`),
  ADD KEY `likes_postId_fkey` (`postId`),
  ADD KEY `likes_commentId_fkey` (`commentId`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_authorId_fkey` (`authorId`);

--
-- Indexes for table `progress`
--
ALTER TABLE `progress`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `progress_userId_lessonId_key` (`userId`,`lessonId`),
  ADD KEY `progress_lessonId_fkey` (`lessonId`);

--
-- Indexes for table `submissions`
--
ALTER TABLE `submissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `submissions_userId_fkey` (`userId`),
  ADD KEY `submissions_challengeId_fkey` (`challengeId`);

--
-- Indexes for table `tracks`
--
ALTER TABLE `tracks`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tracks_slug_key` (`slug`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_key` (`email`),
  ADD UNIQUE KEY `users_username_key` (`username`);

--
-- Indexes for table `user_achievements`
--
ALTER TABLE `user_achievements`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_achievements_userId_achievementId_key` (`userId`,`achievementId`),
  ADD KEY `user_achievements_achievementId_fkey` (`achievementId`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `certificates`
--
ALTER TABLE `certificates`
  ADD CONSTRAINT `certificates_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `challenges`
--
ALTER TABLE `challenges`
  ADD CONSTRAINT `challenges_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `lessons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `comments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `enrollments`
--
ALTER TABLE `enrollments`
  ADD CONSTRAINT `enrollments_trackId_fkey` FOREIGN KEY (`trackId`) REFERENCES `tracks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `enrollments_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `lessons`
--
ALTER TABLE `lessons`
  ADD CONSTRAINT `lessons_trackId_fkey` FOREIGN KEY (`trackId`) REFERENCES `tracks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_commentId_fkey` FOREIGN KEY (`commentId`) REFERENCES `comments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `likes_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `likes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `progress`
--
ALTER TABLE `progress`
  ADD CONSTRAINT `progress_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `lessons` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `progress_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `submissions`
--
ALTER TABLE `submissions`
  ADD CONSTRAINT `submissions_challengeId_fkey` FOREIGN KEY (`challengeId`) REFERENCES `challenges` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `submissions_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_achievements`
--
ALTER TABLE `user_achievements`
  ADD CONSTRAINT `user_achievements_achievementId_fkey` FOREIGN KEY (`achievementId`) REFERENCES `achievements` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_achievements_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
