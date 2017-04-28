# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Artist.destroy_all
Album.destroy_all
Song.destroy_all

artists = [];
albums = [];
songs = [];

ActiveRecord::Base.connection.reset_pk_sequence!(User)
ActiveRecord::Base.connection.reset_pk_sequence!(Artist)
ActiveRecord::Base.connection.reset_pk_sequence!(Album)
ActiveRecord::Base.connection.reset_pk_sequence!(Song)

User.create(username: "Kobe", password: "password", email: "kobe@email.com", default_image_url: "https://pixel.nymag.com/imgs/daily/intelligencer/2016/04/13/13-kobe-bryant-2016.w710.h473.2x.jpg")
User.create(username: "Shaq", password: "password", email: "shaq@email.com", default_image_url: "https://i2.wp.com/thenypost.files.wordpress.com/2015/01/tv_shaq1a.jpg?quality=90&strip=all&ssl=1")
User.create(username: "Lebron", password: "password", email: "lebron@email.com", default_image_url: "http://akns-images.eonline.com/eol_images/Entire_Site/201271/634.ab.lebron.080112.jpg")
User.create(username: "Durant", password: "password", email: "durant@email.com", default_image_url: "http://www.slamonline.com/wp-content/uploads/2015/11/kevin-durant.jpg")

wild_nothing = Artist.new(name: "Wild Nothing", genre: "Shoe-gaze", image_url: "https://s3.amazonaws.com/beathub-dev/pics/wild_nothing_artist.jpeg", banner_url: "https://s3.amazonaws.com/beathub-dev/pics/wildnothing_banner.jpg")
chvrches = Artist.new(name: "CHVRCHES", genre: "Synth-pop", image_url: "https://s3.amazonaws.com/beathub-dev/pics/chvrches_artist.jpeg", banner_url: "https://s3.amazonaws.com/beathub-dev/pics/chvrches_banner.jpg")
slowdive = Artist.new(name: "Slowdive", genre: "Shoe-gaze", image_url: "https://s3.amazonaws.com/beathub-dev/pics/slowdivepic.jpg", banner_url: "https://s3.amazonaws.com/beathub-dev/pics/slowdive_banner.jpg")
yumi = Artist.new(name: "Yumi Zouma", genre: "Dream-Pop", image_url: "https://s3.amazonaws.com/beathub-dev/songs/yumi_zouma/yumi_artist_art.png", banner_url: "https://s3.amazonaws.com/beathub-dev/songs/yumi_zouma/yumi_banner-mv2.jpg")
yung_bae = Artist.new(name: "Yung Bae", genre: "Vaporwave", image_url: "https://s3.amazonaws.com/beathub-dev/songs/yung_bae/yungbae_album_art.jpg", banner_url: "https://s3.amazonaws.com/beathub-dev/songs/yung_bae/yungbae_banner.jpg")

wild_nothing.save
artists.push(wild_nothing)

chvrches.save
artists.push(chvrches)

slowdive.save
artists.push(slowdive)

yumi.save
artists.push(yumi)

yung_bae.save
artists.push(yung_bae)

nocturne = Album.new(name: "Nocturne", artist_id: wild_nothing.id, year: "01/2/2010", artist_name: "Wild Nothing", image_url: "https://s3.amazonaws.com/beathub-dev/pics/wild_nothing_nocturne_album.jpg")
bones = Album.new(name: "The Bones of What You Believe", artist_id: chvrches.id, year: "20/9/2013", artist_name: "CHVRCHES", image_url: "https://s3.amazonaws.com/beathub-dev/pics/chvrches_album.jpeg")
slowdive_ep = Album.new(name: "Slowdive EP", artist_id: slowdive.id, year: "10/02/1990", artist_name: "Slowdive", image_url: "https://s3.amazonaws.com/beathub-dev/pics/slowdive-ep.jpg")
gemini = Album.new(name: "Gemini", artist_id: wild_nothing.id, year: "01/02/2010", artist_name: "Wild Nothing", image_url: "https://s3.amazonaws.com/beathub-dev/songs/wild_nothing_gemini/gemini_album_art.jpg")
yoncalla = Album.new(name: "Yoncalla", artist_id: yumi.id, year: "01/02/2014", artist_name: "Yumi Zouma", image_url: "https://s3.amazonaws.com/beathub-dev/songs/yumi_zouma/yoncalla_albumart.jpg")
bae = Album.new(name: "Bae", artist_id: yung_bae.id, year: "01/02/2016", artist_name: "Yung Bae", image_url: "https://s3.amazonaws.com/beathub-dev/songs/yung_bae/yungbae_album_art.jpg")

nocturne.save
bones.save
slowdive_ep.save
gemini.save
yoncalla.save
bae.save

albums.push(nocturne)
albums.push(bones)
albums.push(slowdive_ep)
albums.push(gemini)
albums.push(yoncalla)
albums.push(bae)


noc1 = Song.new(name: "Shadow", album_id: nocturne.id, album_ord: 1, genre: "Shoe-gaze", duration: 261, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/wild_nothing_nocturne/shadow.mp3")
noc2 = Song.new(name: "Midnight Song", album_id: nocturne.id, album_ord: 2, genre: "Shoe-gaze", duration: 187, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/wild_nothing_nocturne/midnight_song.mp3")
noc3 = Song.new(name: "Nocturne", album_id: nocturne.id, album_ord: 3, genre: "Shoe-gaze", duration: 320, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/wild_nothing_nocturne/nocturne.mp3")
noc4 = Song.new(name: "Through the Grass", album_id: nocturne.id, album_ord: 4, genre: "Shoe-gaze", duration: 270, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/wild_nothing_nocturne/through_the_grass.mp3")
noc5 = Song.new(name: "Only Heather", album_id: nocturne.id, album_ord: 5, genre: "Shoe-gaze", duration: 196, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/wild_nothing_nocturne/only_heater.mp3")
noc6 = Song.new(name: "This Chain Won't Break", album_id: nocturne.id, album_ord: 6, genre: "Shoe-gaze", duration: 280, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/wild_nothing_nocturne/this_chain_wont_break.mp3")
noc7 = Song.new(name: "Disappear Always", album_id: nocturne.id, album_ord: 7, genre: "Shoe-gaze", duration: 271, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/wild_nothing_nocturne/disappear_always.mp3")
noc8 = Song.new(name: "Paradise", album_id: nocturne.id, album_ord: 8, genre: "Shoe-gaze", duration: 333, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/wild_nothing_nocturne/paradise.mp3")
noc9 = Song.new(name: "Counting Days", album_id: nocturne.id, album_ord: 9, genre: "Shoe-gaze", duration: 234, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/wild_nothing_nocturne/counting_days.mp3")
noc10 = Song.new(name: "The Blue Dress", album_id: nocturne.id, album_ord: 10, genre: "Shoe-gaze", duration: 270, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/wild_nothing_nocturne/the_blue_dress.mp3")
noc11 = Song.new(name: "Rheya", album_id: nocturne.id, album_ord: 11, genre: "Shoe-gaze", duration: 235, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/wild_nothing_nocturne/rheya.mp3")

noc1.save
noc2.save
noc3.save
noc4.save
noc5.save
noc6.save
noc7.save
noc8.save
noc9.save
noc10.save
noc11.save

songs << noc1
songs << noc2
songs << noc3
songs << noc4
songs << noc5
songs << noc6
songs << noc7
songs << noc8
songs << noc9
songs << noc10
songs << noc11


bones1 = Song.new(name: "The Mother We Share", album_id: bones.id, album_ord: 1, genre: "Synth-pop", duration: 192, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/chvv%26rcjes/te_madra_we_sheek.mp3")
bones2 = Song.new(name: "We Sink", album_id: bones.id, album_ord: 2, genre: "Synth-pop", duration: 214, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/chvv%26rcjes/we_swink.mp3")
bones3 = Song.new(name: "Gun", album_id: bones.id, album_ord: 3, genre: "Synth-pop", duration: 233, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/chvv%26rcjes/goon.mp3")
bones4 = Song.new(name: "Tether", album_id: bones.id, album_ord: 4, genre: "Synth-pop", duration: 286, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/chvv%26rcjes/tetherr.mp3")
bones5 = Song.new(name: "Lies", album_id: bones.id, album_ord: 5, genre: "Synth-pop", duration: 221, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/chvv%26rcjes/lieeeeeezzzzz66565.mp3")
bones6 = Song.new(name: "Under the Tide", album_id: bones.id, album_ord: 6, genre: "Synth-pop", duration: 272, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/chvv%26rcjes/under_the_tider5.mp3")
bones7 = Song.new(name: "Recover", album_id: bones.id, album_ord: 7, genre: "Synth-pop", duration: 225, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/chvv%26rcjes/recooobber.mp3")
bones8 = Song.new(name: "Night Sky", album_id: bones.id, album_ord: 8, genre: "Synth-pop", duration: 231, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/chvv%26rcjes/nirt_skact.mp3")
bones9 = Song.new(name: "Science/Visions", album_id: bones.id, album_ord: 9, genre: "Synth-pop", duration: 238, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/chvv%26rcjes/sakanc_and_beezion.mp3")
bones10 = Song.new(name: "Lungs", album_id: bones.id, album_ord: 10, genre: "Synth-pop", duration: 182, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/chvv%26rcjes/looooongs.mp3")
bones11 = Song.new(name: "By the Throat", album_id: bones.id, album_ord: 11, genre: "Synth-pop", duration: 249, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/chvv%26rcjes/be_ze_troat.mp3")
bones12 = Song.new(name: "You Caught the Light", album_id: bones.id, album_ord: 12, genre: "Synth-pop", duration: 337, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/chvv%26rcjes/yer_kot_der_light.mp3")

bones1.save
bones2.save
bones3.save
bones4.save
bones5.save
bones6.save
bones7.save
bones8.save
bones9.save
bones10.save
bones11.save
bones12.save

songs << bones1
songs << bones2
songs << bones3
songs << bones4
songs << bones5
songs << bones6
songs << bones7
songs << bones8
songs << bones9
songs << bones10
songs << bones11
songs << bones12

slowdive1 = Song.new(name: "Slowdive", album_id: slowdive_ep.id, album_ord: 1, genre: "Shoe-gaze", duration: 316, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/slowdive/01+Slowdive+-+Slowdive.mp3")
slowdive2 = Song.new(name: "Avalyn I", album_id: slowdive_ep.id, album_ord: 2, genre: "Shoe-gaze", duration: 256, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/slowdive/02+Slowdive+-+Avalyn+I.mp3")
slowdive3 = Song.new(name: "Avalyn II", album_id: slowdive_ep.id, album_ord: 3, genre: "Shoe-gaze", duration: 480, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/slowdive/03+Slowdive+-+Avalyn+II.mp3")

slowdive1.save
slowdive2.save
slowdive3.save

songs << slowdive1
songs << slowdive2
songs << slowdive3

gemini1 = Song.new(name: "Live In Dreams", album_id: gemini.id, album_ord: 1, genre: "Shoe-gaze", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/wild_nothing_gemini/WILD+NOTHING+-+LIVE+IN+DREAMS.mp3")
gemini2 = Song.new(name: "Drifter", album_id: gemini.id, album_ord: 2, genre: "Shoe-gaze", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/wild_nothing_gemini/Wild+Nothing+-+Gemini+-+Drifter.mp3")
gemini3 = Song.new(name: "Gemini", album_id: gemini.id, album_ord: 3, genre: "Shoe-gaze", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/wild_nothing_gemini/Wild+Nothing+-+Gemini+-+Gemini.mp3")
gemini4 = Song.new(name: "My Angel Lonely", album_id: gemini.id, album_ord: 4, genre: "Shoe-gaze", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/wild_nothing_gemini/Wild+Nothing+-+Gemini+-+My+Angel+Lonely.mp3")
gemini5 = Song.new(name: "Summer Holidays", album_id: gemini.id, album_ord: 5, genre: "Shoe-gaze", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/wild_nothing_gemini/Wild+Nothing+-+Summer+Holiday.mp3")

gemini1.save
gemini2.save
gemini3.save
gemini4.save
gemini5.save

songs << gemini1
songs << gemini2
songs << gemini3
songs << gemini4
songs << gemini5

yoncalla1 = Song.new(name: "Alena", album_id: yoncalla.id, album_ord: 1, genre: "Dream-pop", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/yumi_zouma/Yumi+Zouma+-+Alena.mp3")
yoncalla2 = Song.new(name: "Barricade", album_id: yoncalla.id, album_ord: 2, genre: "Dream-pop", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/yumi_zouma/Yumi+Zouma+-+Barricade.mp3")
yoncalla3 = Song.new(name: "Dodi", album_id: yoncalla.id, album_ord: 3, genre: "Dream-pop", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/yumi_zouma/Yumi+Zouma+-+Dodi.mp3")
yoncalla4 = Song.new(name: "Song For Zoe and Gwen", album_id: yoncalla.id, album_ord: 4, genre: "Dream-pop", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/yumi_zouma/Yumi+Zouma+-+Song+For+Zoe+%26+Gwen.mp3")
yoncalla5 = Song.new(name: "The Brae", album_id: yoncalla.id, album_ord: 5, genre: "Dream-pop", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/yumi_zouma/Yumi+Zouma+-+The+Brae.mp3")
yoncalla6 = Song.new(name: "Catastrophe", album_id: yoncalla.id, album_ord: 6, genre: "Dream-pop", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/yumi_zouma/Yumi+Zouma+-+Catastrophe.mp3")

yoncalla1.save
yoncalla2.save
yoncalla3.save
yoncalla4.save
yoncalla5.save
yoncalla6.save

bae1 = Song.new(name: "Fly With Me", album_id: bae.id, album_ord: 1, genre: "Vaporwave", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/yung_bae/YUNG+BAE+-+Fly+With+Me.mp3")
bae2 = Song.new(name: "Bae City Rollaz", album_id: bae.id, album_ord: 2, genre: "Vaporwave", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/yung_bae/bae_city_rollaz.mp3")
bae3 = Song.new(name: "It's a Sing", album_id: bae.id, album_ord: 3, genre: "Vaporwave", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/yung_bae/its_a_sing.mp3")
bae4 = Song.new(name: "Miami Wicked", album_id: bae.id, album_ord: 4, genre: "Vaporwave", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/yung_bae/miami_wicked.mp3")


bae1.save
bae2.save
bae3.save
bae4.save

artists.each do |artist|
  search_document = artist.pg_search_document
  search_document.searchable
end

albums.each do |album|
  search_document = album.pg_search_document
  search_document.searchable
end

songs.each do |song|
  search_document = song.pg_search_document
  search_document.searchable
end
