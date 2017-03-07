# this has to come first, or settings isn't built up for the bundler call.
require 'sinatra'
require 'sinatra/base'
# require 'sinatra/contrib'
require 'sinatra/activerecord'
# require 'sinatra/mapping'
require './environments'
require 'dotenv'
require 'json'
require 'faker'
require 'rubygems'
Dotenv.load

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
  # set :protection, :session => true
  # set :protection, :except => :path_traversal

  before do
    @admin = false
    @visitor = true
    # request.secure? #|| request.host == 'localhost'
    content_type 'application/json'
    headers 'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST']
    headers 'Access-Control-Allow-Origin' => '*'


   @oreo = request.cookies

    if request.host == 'localhost' || @oreo.include?(ENV['COLORHIRO_KEY'])
      puts request.host
      puts 'ADMIN YES'
      @admin = true
    else
      puts 'NOT ADMIN'
    end

  end

  get '/' do
    unless @admin
      redirect '/posts'
    end
    stream do |out|
      out << "It's gonna be legen -\n"
      sleep 0.5
      out << " (wait for it) \n"
      sleep 1
      out << "- dary!\n"
    end
    colors = []
    Color.all.each do |i|
      colors << {
        name: i.name,
        hex: i.hex
      }
    end
    @color_id = Color.find_by(hex: '000000')
    puts @color_id
    response.set_cookie(:colorhiroADM, :value => ENV['COLORHIRO_KEY'], :expires => Time.now + 3600*48)
    JSON :colors => colors
  end
  # MAKE THIS PRIVATE AND AUTHENTICATED
  get '/rooms' do
    rooms = []
    Room.all.each do |i|
      rooms << {
        admin: i.admin,
        key: i.key
      }
    end
    JSON :rooms => rooms
  end

  get '/users' do
    unless @admin
      redirect '/posts'
    end
    users = []
    User.all.each do |i|
      users << {
        room: i.rooms_id,
        color: i.colors_id,
        tone: i.tone,
        name: i.name
      }
    end
    JSON :users => users
  end

  get '/color/:name' do
    @data_in = params[:name]
    @color = Color.where("hex LIKE ?", "%#{@data_in}%")
    if @color.any?
      JSON :color => @color
    else
      colors = []
      @colors = Color.where("name LIKE ?", "#{@data_in}%")
      @colors.each do |i|
        colors << {
          name: i.name,
          hex: i.hex
        }
      end
      JSON :color => colors
    end
  end

  # MAKE THIS SECUURE
  get '/room/:share_key' do
    @room = Room.find_by(key: params[:share_key])
    JSON :room => @room
  end

  post '/room' do
    unless @admin || request.secure?
      redirect '/posts'
    end
    @data_in = request.params
    @room = Room.create!(
      key: @data_in['share_key'],
    )
    JSON :room => @room
  end

  post '/user' do
    unless @admin || request.secure?
      redirect '/posts'
    end
    @data_in = request.params
    @color_id = Color.find_by(hex: @data_in['hex'])
    puts @color_id
    @user = User.create!(
      colors_id: @colors_id,
      name: @data_in['name'],
      color: Faker::Crypto.sha256
    )
    response.set_cookie(:userKey, :value => @user.color, :expires => Time.now + 3600*48)
    JSON :color => @color
  end

end
