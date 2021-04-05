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

Album.create!(title: 'Ride the Lightning', release_year: 1984, user: @admin, album_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.w82lJLcknhD7rdSaBE53twHaE7%26pid%3DApi&f=1')

Album.create!(title: 'Cowboys From Hell', release_year: 1990, user: @admin, album_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.u068IqFzTBOtYiCyULkssAAAAA%26pid%3DApi&f=1')

@still_bill = Album.create!(title: 'Still Bill', release_year: 1972, user: @admin, album_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F5127VPY7q1L._SX300_QL70_.jpg&f=1&nofb=1')

Album.create!(title: 'Badmotorfinger', release_year: 1991, user: @admin, album_url: 'https://www.udiscovermusic.com/wp-content/uploads/2018/08/Badmotorfinger-album-cover-web-optimised-820.jpg')

Album.create!(title: 'American Recordings', release_year: 1994, user: @admin, album_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fc%2Fc3%2FJohnnyCashAmericanRecordings.jpg&f=1&nofb=1')

Album.create!(title: 'Ten', release_year: 1991, user: @admin, album_url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.genius.com%2F8aaa6056d909ce698a5d2dc3a78f88bd.1000x1000x1.jpg&f=1&nofb=1')

Album.create!(title: 'dirt', release_year: 1992, user: @admin, album_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6Bn_EwJVV3mAeiEUUByWjwHaHa%26pid%3DApi&f=1')

Album.create!(title: 'Wanted! The Outlaws', release_year: 1976, user: @admin, album_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4_Iee6afyLGuRogMU2wiEwHaHa%26pid%3DApi&f=1')

Album.create!(title: 'Purgatory', release_year: 2017, user: @admin, album_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gc2ZemjPwnuYANmDKydabQHaHa%26pid%3DApi&f=1')

Album.create!(title: 'Sound & Fury', release_year: 2019, user: @admin, album_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pzJXTA1Al-BEjZWTxdr9TwHaHa%26pid%3DApi&f=1')

Album.create!(title: 'The Wall', release_year: 1979, user: @admin, album_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.BmCUH-juYuhV9fsy1MO05QHaGq%26pid%3DApi&f=1')

puts "#{Album.count} albums created"

Review.create!(review: 'This is Great!', user: @admin, album:@still_bill,  )

puts "#{Review.count} reviews created"
