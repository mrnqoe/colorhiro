require 'sinatra'

configure :development do
  set :server, :puma
  set :show_exceptions, true
  set :database, {adapter: "sqlite3", database: ENV['DATABASE_URL'] || 'db/colorhiro.sqlite3'}
end

configure :test do
  set :database, {adapter: "sqlite3", database: 'db/colorhiro.sqlite3'}
end

configure :production do
 set :server, :puma
 set :database, {adapter: "sqlite3", database: ENV['DATABASE_URL'] || 'db/colorhiro.sqlite3'}
end
