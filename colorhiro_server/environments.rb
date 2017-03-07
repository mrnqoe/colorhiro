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

 ActiveRecord::Base.establish_connection(
   :adapter  => db.scheme == 'sqlite3' ? 'sqlite3' : db.scheme,
   :host     => db.host,
   :username => db.user,
   :password => db.password,
   :database => db.path[1..-1],
   :encoding => 'utf8'
 )
end
