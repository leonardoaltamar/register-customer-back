/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_type_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `user_type_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `user_types` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(10) NOT NULL,
    `description` VARCHAR(45) NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NULL,
    `deleted_at` DATETIME(0) NULL,

    UNIQUE INDEX `user_types_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `users_username_key` ON `users`(`username`);

-- CreateIndex
CREATE INDEX `fk_users_user_types1_idx` ON `users`(`user_type_id`);

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `fk_users_user_types1` FOREIGN KEY (`user_type_id`) REFERENCES `user_types`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
