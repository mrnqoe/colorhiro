require 'bundler/setup'
require 'hanami/setup'
require 'hanami/model'
<<<<<<< HEAD
require_relative '../lib/colorhiro'
=======
require_relative '../lib/example2'
>>>>>>> d313a6a67e5fa8b2d8312cf20879394b624c5548
require_relative '../apps/web/application'

Hanami.configure do
  mount Web::Application, at: '/'

  model do
    ##
    # Database adapter
    #
    # Available options:
    #
    #  * SQL adapter
<<<<<<< HEAD
    #    adapter :sql, 'sqlite://db/colorhiro_development.sqlite3'
    #    adapter :sql, 'postgresql://localhost/colorhiro_development'
    #    adapter :sql, 'mysql://localhost/colorhiro_development'
=======
    #    adapter :sql, 'sqlite://db/example2_development.sqlite3'
    #    adapter :sql, 'postgresql://localhost/example2_development'
    #    adapter :sql, 'mysql://localhost/example2_development'
>>>>>>> d313a6a67e5fa8b2d8312cf20879394b624c5548
    #
    adapter :sql, ENV['DATABASE_URL']

    ##
    # Migrations
    #
    migrations 'db/migrations'
    schema     'db/schema.sql'
  end

  mailer do
<<<<<<< HEAD
    root 'lib/colorhiro/mailers'
=======
    root 'lib/example2/mailers'
>>>>>>> d313a6a67e5fa8b2d8312cf20879394b624c5548

    # See http://hanamirb.org/guides/mailers/delivery
    delivery :test
  end

  environment :development do
    # See: http://hanamirb.org/guides/projects/logging
    logger level: :debug
  end

  environment :production do
    logger level: :info, formatter: :json

    mailer do
      delivery :smtp, address: ENV['SMTP_HOST'], port: ENV['SMTP_PORT']
    end
  end
end
