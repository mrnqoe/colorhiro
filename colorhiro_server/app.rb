# this has to come first, or settings isn't built up for the bundler call.
require 'faker'
require 'json'
require 'rubygems'
require 'sinatra'
require 'sinatra/base'
require 'sinatra/activerecord'
require 'sinatra/authorization'
require 'sinatra/mapping'
# require './environments'

# ACTIVERECORD CLASSES
class User < ActiveRecord::Base
  belongs_to :rooms
  belongs_to :colors
end
class Room < ActiveRecord::Base
  has_many :users
end
class Color < ActiveRecord::Base
  has_many :users
end
class Post < ActiveRecord::Base
end

class ColorhiroAPI < Sinatra::Base
  set :authorization_realm, "Protected zone"
  set :namespace, '/admin'
  set :protection, :except => :path_traversal
  set :sessions => true
  set :protection, false

  helpers do
    def authorize(login, password)
      login == "admin" && password == "secret"
    end
  end

  before do
    content_type 'application/json'
    headers 'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST']
    headers 'Access-Control-Allow-Origin' => '*'
  end

  options "*" do
    response.headers["Allow"] = "HEAD,GET,PUT,DELETE,OPTIONS"

    # Needed for AngularJS
    response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"

    halt 200
  end

  # MAKE THIS PRIVATE AND AUTHENTICATED
  get '/rooms' do
    rooms = []
    @rooms = Room.all
    @rooms.each do |i|
      rooms << {
        admin: i.admin,
        key: i.key
      }
    end
    json :rooms => @rooms
  end

  # MAKE THIS SECUURE
  get '/room/:share_key' do
    @room = Room.find_by(key: params[:share_key])
    json :room => @room
  end

  post '/room' do
    @data_in = request.params
    puts @data_in
    @room = Room.create!(
      key: @data_in['share_key'],
      admin: @data_in['admin']
    )
    json :room => @room
  end

  post '/user' do
    @data_in = request.params
    @user = User.create!(
      color: @data_in['color'],
      name: @data_in['name']
    )
    @color = Color.where("name LIKE ?", "%#{@user.color}%")
    json :color => @color
  end

  get '/color' do
    json :color => Color.all
    # @color = Color.all
  end

  get '/users' do
    json :users => User.all
  end

  get '/color/:name' do
    @data_in = params[:name]
    @color = Color.where("name LIKE ?", "%#{@data_in}%")
    if (@color.count < 1)
      json :color => Color.all
    else
      json :color => @color
    end

  end

end
