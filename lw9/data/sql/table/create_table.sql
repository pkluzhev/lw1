CREATE TABLE 
    post (
        `id` 			    INT NOT NULL AUTO_INCREMENT,
        `is_feautured`	    TINYINT(1) DEFAULT 0 NOT NULL,
        `image_url` 	    VARCHAR(255) NOT NULL,
        `image_preview_url` VARCHAR(255) NOT NULL,
        `image_alt`         VARCHAR(255) NOT NULL,
        `title` 		    VARCHAR(255) NOT NULL,
        `subtitle` 		    VARCHAR(255) NOT NULL,
        `text`			    TEXT NOT NULL,
        `avatar_url` 	    VARCHAR(255) NOT NULL,
        `author` 		    VARCHAR(255) NOT NULL,
        `time_stamp` 	    INT NOT NULL,
        `sticker` 		    VARCHAR(255) NOT NULL,
        PRIMARY KEY (`id`)
    )
ENGINE = InnoDB
CHARACTER SET = utf8mb4
COLLATE utf8mb4_unicode_ci;