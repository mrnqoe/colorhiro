CREATE TABLE `schema_migrations` (`filename` varchar(255) NOT NULL PRIMARY KEY);
CREATE TABLE `colors` (`id` integer NOT NULL PRIMARY KEY AUTOINCREMENT, `created_at` timestamp NOT NULL, `updated_at` timestamp NOT NULL);
CREATE TABLE `session` (`id` primay_key, `share_key` varchar(255), `admin` varchar(255), `init_color` varchar(255), `created_at` timestamp, `updated_at` timestamp);
CREATE TABLE `sessions` (`id` integer NOT NULL PRIMARY KEY AUTOINCREMENT, `shared_key` varchar(255), `admin` varchar(255), `init_color` varchar(255), `created_at` timestamp, `updated_at` timestamp);
INSERT INTO "schema_migrations" VALUES('20170223153938_create_colors.rb');
INSERT INTO "schema_migrations" VALUES('20170223160500_create_session.rb');
INSERT INTO "schema_migrations" VALUES('20170223170802_create_sessions.rb');
