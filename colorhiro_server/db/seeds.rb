Post.destroy_all
(0..100).each do |n|
  @title = Faker::StarWars.character
  @body = Faker::StarWars.quote
  Post.create!(
    title: @title,
    body: @body
  )
end

Session.destroy_all

User.destroy_all
(0..100).each do |n|
  @name = Faker::StarWars.droid
  @color = Faker::Color.hex_color
  User.create!(
    name: @name,
    user_color: @color
  )
end

Room.destroy_all
(0..100).each do |n|
  @admin = Faker::StarWars.droid
  @share_key = Faker::Crypto.sha256
  Room.create!(
    key: @share_key,
    admin: @admin
  )
end
