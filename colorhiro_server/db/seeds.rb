$LOAD_PATH << '.'
require 'colors'
include ColorLibrary

Color.destroy_all
NAMEHEX.each do |c|
  @hex = c[0]
  @name = c[1]
  Color.create!(
    name: @name,
    hex: @hex
  )
end

Room.destroy_all
(0..100).each do |n|
  @admin = Faker::StarWars.droid
  @key = Faker::Crypto.sha256
  Room.create!(
    key: @key,
    admin: @admin
  )
end

User.destroy_all
(0..100).each do |n|
  @name = Faker::StarWars.droid
  @tone = Faker::Boolean
  @room = Faker::Number.between(1, 100)
  @room = Room.find(Faker::Number.between(Room.first.id, Room.last.id))
  @color = Color.find_by(hex: Faker::Color.hex_color)
  User.create!(
    name: @name,
    tone: @tone,
    rooms_id: @room,
    colors_id: @color
  )
end

Post.destroy_all
(0..100).each do |n|
  @title = Faker::StarWars.character
  @body = Faker::StarWars.quote
  Post.create!(
  title: @title,
  body: @body
  )
end
