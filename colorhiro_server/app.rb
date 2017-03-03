# this has to come first, or settings isn't built up for the bundler call.
require 'faker'
require 'json'
require 'rubygems'
require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/base'
require 'sinatra-websocket'
require './environments'

# set :sockets, []
class Room < ActiveRecord::Base
end

class Post < ActiveRecord::Base
end

class Session < ActiveRecord::Base
end

class User < ActiveRecord::Base
end

class App < Sinatra::Application

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

  set :protection, false

  get '/' do
    @key = request.params[:share_key]
    rooms = []
    @rooms = Room.all
    @rooms.each do |i|
      rooms << {
        admin: i.admin,
        share_key: i.share_key,
        init_color: i.init_color
      }
    end
    json :rooms => rooms
  end

  get '/room/:share_key' do
    @session = Room.find_by(share_key: params[:share_key])
    json :rooms => @session
  end

  post '/rooms' do
    @data_in = request.params
    puts @data_in
    Room.create!(
      init_color: @data_in['color'],
      admin: @data_in['name']
    )
  end

end
