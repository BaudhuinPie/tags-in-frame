USE tags_in_frames;

CREATE TABLE album (
    `id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,
    `date` DATETIME,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    `last_update` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (`id`),
);

CREATE TABLE frame (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(60) NOT NULL,
    `date` DATETIME,
    --`album_index` INT UNSIGNED,
    `album_ID` FOREIGN KEY (`id`) REFERENCES `album` (`id`),
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    `tags_list` JSON,
    PRIMARY KEY (`id`),
);

CREATE TABLE tag (
    `id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,
    `subname` VARCHAR(40),

    `depht_index` TINYINT NOT NULL,
    `height` SMALLINT UNSIGNED NOT NULL,
    `ratio` DOUBLE,
    `top_anchor` INT NOT NULL,
    `left_anchor` INT NOT NULL,
    -- `location`  regex : [top,middle,bottom][left,center,right],
    -- `view_breakpoint` VARCHAR(5) NOT NULL,
    `frame_scalepoint` TINYINT UNSIGNED DEFAULT 0 NOT NULL, # 0 worth for original resolution of the frame

    --`frame_name` VARCHAR(60),
    `frame_ID` FOREIGN KEY (`id`) REFERENCES `frame` (`id`),,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    `last_update` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,

    PRIMARY KEY (`id`),
);

CREATE TABLE tag_frame_album (
    `id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `tag_name` VARCHAR(40) NOT NULL,
    `tag_subname` VARCHAR(40),
    `frame_name` VARCHAR(60) NOT NULL,
    `frame_date` DATETIME,
    `album_name` VARCHAR(40) NOT NULL,
    `album_date` DATETIME,
    PRIMARY KEY (`id`),
);

CREATE TABLE index_in_frame (
    `id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `index` TINYINT NOT NULL UNIQUE,
    `tags_ID_list`,
    `frames_ID_list`,
    `album_ID_list`,
    PRIMARY KEY (`id`),
);
/*
CREATE TABLE `position` (
  #idem avec position
);
CREATE TABLE `available_date` (
    #idem avec date
)
# cela permet d'éviter de filter toute une table en renvoyant dirrectement un JSON dans lequel ponctionner ce que l'on veut. On gagne le temps d'une boucle.
*/