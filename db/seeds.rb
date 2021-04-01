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

Album.create!(title: 'Ride the Lightning', release_year: 1984, user: @admin, album_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmannersofhate.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fmetallica-ride-the-lightning-cd-original-nuevo-D_NQ_NP_853811-MLM27403290989_052018-F-1024x1024.jpg&f=1&nofb=1')

Album.create!(title: 'Cowboys From Hell', release_year: 1990, user: @admin, album_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2FGlmvd_cdpU3LnOatdrPUGj1nvNo%3D%2Ffit-in%2F300x300%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(40)%2Fdiscogs-images%2FR-3794743-1344705499-7652.jpeg.jpg&f=1&nofb=1')

@still_bill = Album.create!(title: 'Still Bill', release_year: 1972, user: @admin, album_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F5127VPY7q1L._SX300_QL70_.jpg&f=1&nofb=1')

Album.create!(title: 'Badmotorfinger', release_year: 1991, user: @admin, album_url: 'https://www.udiscovermusic.com/wp-content/uploads/2018/08/Badmotorfinger-album-cover-web-optimised-820.jpg')

Album.create!(title: 'American Recordings', release_year: 1994, user: @admin, album_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fc%2Fc3%2FJohnnyCashAmericanRecordings.jpg&f=1&nofb=1')

puts "#{Album.count} albums created"

Review.create!(review: 'This is Great!', user: @admin, album:@still_bill,  )

puts "#{Review.count} reviews created"
