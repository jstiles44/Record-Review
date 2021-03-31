# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Review.destroy_all
Album.destroy_all
User.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')

puts "#{User.count} users created"

Album.create!(title: 'Ride the Lightning', release_year: 1984, user: @admin, album_url: 'https://imgur.com/iR7CePs')

Album.create!(title: 'Cowboys From Hell', release_year: 1990, user: @admin, album_url: 'https://imgur.com/u0VAH36')

@still_bill = Album.create!(title: 'Still Bill', release_year: 1972, user: @admin, album_url: 'https://imgur.com/3xxkb6o')

Album.create!(title: 'Badmotorfinger', release_year: 1991, user: @admin, album_url: 'https://imgur.com/JkHzbL7')

Album.create!(title: 'American Recordings', release_year: 1994, user: @admin, album_url: 'https://imgur.com/eHN3VHO')

puts "#{Album.count} albums created"

Review.create!(review: 'This is Great!', user: @admin, album:@still_bill,  )

puts "#{Review.count} reviews created"
