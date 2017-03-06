$LOAD_PATH << '.'
require 'colors'
include ColorLibrary

Color.destroy_all
NAMEHEX.each do |c|
  @hex = c[0]
  @name = c[1]
  @p = Color.create!(
    name: @name,
    hex: @hex
  )
  puts @p.inspect
end

Room.destroy_all
(0..100).each do |n|
  @admin = Faker::StarWars.droid
  @key = Faker::Crypto.sha256
  @p = Room.create!(
    key: @key,
    admin: @admin
  )
  puts @p.inspect
end

User.destroy_all
(0..100).each do |n|
  @name = Faker::StarWars.droid
  @FakeColorNumber = Faker::Number.between(Color.first.id, Color.last.id)
  @FakeTone = Faker::Boolean
  @FakeRoomNumber = Faker::Number.between(Room.first.id, Room.last.id)
  # @room = Room.find_by(id: @FakeRoomNumber).pluck(:id)
  # @color = Color.find_by(id: @FakeColorNumber).pluck(:id)
  @p = User.create!(
    name: @name,
    tone: @FakeTone,
    rooms_id: @FakeRoomNumber,
    colors_id: @FakeColorNumber
  )
  puts @p.inspect
end

Post.destroy_all
(0..100).each do |n|
  @title = Faker::StarWars.character
  @body = Faker::StarWars.quote
  @p = Post.create!(
  title: @title,
  body: @body
  )
  puts @p.inspect
end
