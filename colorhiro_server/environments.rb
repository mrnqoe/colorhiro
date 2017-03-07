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
 db = URI.parse(ENV['DATABASE_URL'] || 'db/colorhiro.sqlite3')
 set :server, :puma
 set :database, {adapter: "sqlite3", database: ENV['DATABASE_URL'] || 'db/colorhiro.sqlite3'}
 ActiveRecord::Base.establish_connection(
   :adapter  => 'sqlite3',
   :host     => ENV['DATABASE_HOST'],
   :username => ENV['DATABASE_USER'],
   :password => ENV['DATABASE_PASS'],
   :database => ENV['DATABASE_DBURL'],
   :encoding => 'utf8'
 )
end
