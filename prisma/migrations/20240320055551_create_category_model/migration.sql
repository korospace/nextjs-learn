-- CreateTable
CREATE TABLE `category` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `article` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL DEFAULT (current_timestamp()),
    `slug` VARCHAR(255) NOT NULL,
    `excerpt` TEXT NOT NULL,
    `content` LONGTEXT NULL,
    `created_at` DATETIME(0) NULL,
    `updated_at` DATETIME(0) NULL,
    `created_by` INTEGER NULL,
    `updated_by` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
