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
(0..100).each do |n|
  @init_color = Faker::Color.hex_color
  @admin = Faker::StarWars.droid
  @share_key = Faker::Crypto.sha256
  Session.create!(
    share_key: @share_key,
    admin: @admin,
    init_color: @init_color
  )
end

User.destroy_all
(0..100).each do |n|
  @name = Faker::StarWars.droid
  @color = Faker::Color.hex_color
  User.create!(
    name: @name,
    user_color: @color
  )
end
