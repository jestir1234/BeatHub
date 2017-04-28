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


# ARTISTS
wild_nothing = Artist.new(name: "Wild Nothing", genre: "Shoe-gaze", image_url: "https://s3.amazonaws.com/beathub-dev/pics/wild_nothing_artist.jpeg", banner_url: "https://s3.amazonaws.com/beathub-dev/pics/wildnothing_banner.jpg")
chvrches = Artist.new(name: "CHVRCHES", genre: "Synth-pop", image_url: "https://s3.amazonaws.com/beathub-dev/pics/chvrches_artist.jpeg", banner_url: "https://s3.amazonaws.com/beathub-dev/pics/chvrches_banner.jpg")
slowdive = Artist.new(name: "Slowdive", genre: "Shoe-gaze", image_url: "https://s3.amazonaws.com/beathub-dev/pics/slowdivepic.jpg", banner_url: "https://s3.amazonaws.com/beathub-dev/pics/slowdive_banner.jpg")
yumi = Artist.new(name: "Yumi Zouma", genre: "Dream-Pop", image_url: "https://s3.amazonaws.com/beathub-dev/songs/yumi_zouma/yumi_artist_art.png", banner_url: "https://s3.amazonaws.com/beathub-dev/songs/yumi_zouma/yumi_banner-mv2.jpg")
yung_bae = Artist.new(name: "Yung Bae", genre: "Vaporwave", image_url: "https://s3.amazonaws.com/beathub-dev/songs/yung_bae/yungbae_album_art.jpg", banner_url: "https://s3.amazonaws.com/beathub-dev/songs/yung_bae/yungbae_banner.jpg")
blood_orange = Artist.new(name: "Blood Orange", genre: "Soul", image_url: "https://s3.amazonaws.com/beathub-dev/songs/blood_orange/blood-orange_artist_img.jpg", banner_url: "https://s3.amazonaws.com/beathub-dev/songs/blood_orange/bloodorange_banner.jpg")
national = Artist.new(name: "The National", genre: "Indie-rock", image_url: "https://s3.amazonaws.com/beathub-dev/songs/the_national/national_artist_art.jpg", banner_url: "https://s3.amazonaws.com/beathub-dev/songs/the_national/national_banner.jpg")
thundercat = Artist.new(name: "Thundercat", genre: "Soul", image_url: "https://s3.amazonaws.com/beathub-dev/songs/thundercat/thundercat_artist_art.jpg", banner_url: "https://s3.amazonaws.com/beathub-dev/songs/thundercat/THUNDERCATbanner.jpg")
foals = Artist.new(name: "Foals", genre: "Indie-rock", image_url: "https://s3.amazonaws.com/beathub-dev/songs/foals/foals_artist_art.jpg", banner_url: "https://s3.amazonaws.com/beathub-dev/songs/foals/foals_banner.jpg")
diiv = Artist.new(name: "DIIV", genre: "Indie-rock", image_url: "https://s3.amazonaws.com/beathub-dev/songs/diiv/diiv_artist_art.jpg", banner_url: "https://s3.amazonaws.com/beathub-dev/songs/diiv/diiv_banner.jpg")
electric = Artist.new(name: "Electric Youth", genre: "Synth-pop", image_url: "https://s3.amazonaws.com/beathub-dev/songs/electric_youth/artist_electricyouth_art.jpg", banner_url: "https://s3.amazonaws.com/beathub-dev/songs/electric_youth/electriyouth_banner.jpg")
made_in_japan = Artist.new(name: "Made In Japan", genre: "Indie-rock", image_url: "https://s3.amazonaws.com/beathub-dev/songs/made_in_japan/made-in-japanartist_art.jpg", banner_url: "https://s3.amazonaws.com/beathub-dev/songs/made_in_japan/made_in_japan_banner.png")

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

blood_orange.save
artists.push(blood_orange)

national.save
artists.push(national)

thundercat.save
artists.push(thundercat)

foals.save
artists.push(foals)

diiv.save
artists.push(diiv)

electric.save
artists.push(electric)

made_in_japan.save
artists.push(made_in_japan)

# ALBUMS
nocturne = Album.new(name: "Nocturne", artist_id: wild_nothing.id, year: "01/2/2010", artist_name: "Wild Nothing", image_url: "https://s3.amazonaws.com/beathub-dev/pics/wild_nothing_nocturne_album.jpg")
bones = Album.new(name: "The Bones of What You Believe", artist_id: chvrches.id, year: "20/9/2013", artist_name: "CHVRCHES", image_url: "https://s3.amazonaws.com/beathub-dev/pics/chvrches_album.jpeg")
slowdive_ep = Album.new(name: "Slowdive EP", artist_id: slowdive.id, year: "10/02/1990", artist_name: "Slowdive", image_url: "https://s3.amazonaws.com/beathub-dev/pics/slowdive-ep.jpg")
gemini = Album.new(name: "Gemini", artist_id: wild_nothing.id, year: "01/02/2010", artist_name: "Wild Nothing", image_url: "https://s3.amazonaws.com/beathub-dev/songs/wild_nothing_gemini/gemini_album_art.jpg")
yoncalla = Album.new(name: "Yoncalla", artist_id: yumi.id, year: "01/02/2014", artist_name: "Yumi Zouma", image_url: "https://s3.amazonaws.com/beathub-dev/songs/yumi_zouma/yoncalla_albumart.jpg")
bae = Album.new(name: "Bae", artist_id: yung_bae.id, year: "01/02/2016", artist_name: "Yung Bae", image_url: "https://s3.amazonaws.com/beathub-dev/songs/yung_bae/yungbae_album_art.jpg")
cupid_deluxe = Album.new(name: "Cupid Deluxe", artist_id: blood_orange.id, year: "01/02/2013", artist_name: "Blood Orange", image_url: "https://s3.amazonaws.com/beathub-dev/songs/blood_orange/cupid_deluxe/cupid_deluxe_album_art.jpg")
freetown_sound = Album.new(name: "Freetown Sound", artist_id: blood_orange.id, year: "01/02/2016", artist_name: "Blood Orange", image_url: "https://s3.amazonaws.com/beathub-dev/songs/blood_orange/freetown_sound/freetown_art.jpg")
alligator = Album.new(name: "Alligator", artist_id: national.id, year: "01/02/2003", artist_name: "The National", image_url: "https://s3.amazonaws.com/beathub-dev/songs/the_national/alligator/alligator_album_art.jpg")
boxer = Album.new(name: "Boxer", artist_id: national.id, year: "01/02/2007", artist_name: "The National", image_url: "https://s3.amazonaws.com/beathub-dev/songs/the_national/boxer/boxer_album_art.jpg")
high_violet = Album.new(name: "High Violet", artist_id: national.id, year: "01/02/2010", artist_name: "The National", image_url: "https://s3.amazonaws.com/beathub-dev/songs/the_national/high_violet/high_violet_album_art.jpg")
trouble_will_find_me = Album.new(name: "Trouble Will Find Me", artist_id: national.id, year: "01/02/2013", artist_name: "The National", image_url: "https://s3.amazonaws.com/beathub-dev/songs/the_national/trouble_will_find_me/trouble_will_find_me_album_art.jpg")
apocalypse = Album.new(name: "Apocalypse", artist_id: thundercat.id, year: "01/02/2012", artist_name: "Thundercat", image_url: "https://s3.amazonaws.com/beathub-dev/songs/thundercat/apocalypse/thundercat_album_art.jpeg")
antidotes = Album.new(name: "Antidotes", artist_id: foals.id, year: "01/02/2007", artist_name: "Foals", image_url: "https://s3.amazonaws.com/beathub-dev/songs/foals/antidoate/antidote_album_art.jpg")
total_life_forever = Album.new(name: "Total Life Forever", artist_id: foals.id, year: "01/02/2010", artist_name: "Foals", image_url: "https://s3.amazonaws.com/beathub-dev/songs/foals/total_rife_forever/total_life_Album_art.jpg")
holy_fire = Album.new(name: "Holy Fire", artist_id: foals.id, year: "01/02/2013", artist_name: "Foals", image_url: "https://s3.amazonaws.com/beathub-dev/songs/foals/holyfir/holy_fire_album_Art.jpg")
oshin = Album.new(name: "Oshin", artist_id: diiv.id, year: "01/02/2014", artist_name: "DIIV", image_url: "https://s3.amazonaws.com/beathub-dev/songs/diiv/oshin/oshin_album_art.jpeg")
inner_world = Album.new(name: "Innerworld", artist_id: electric.id, year: "01/02/2014", artist_name: "Electric Youth", image_url: "https://s3.amazonaws.com/beathub-dev/songs/electric_youth/innerworld/innerworld_albumart.jpg")
sights_and_sounds = Album.new(name: "Sights and Sounds", artist_id: made_in_japan.id, year: "01/02/2012", artist_name: "Made In Japan", image_url: "https://s3.amazonaws.com/beathub-dev/songs/made_in_japan/sights_and_sounds/albun_art_sights_sounds.jpg")

nocturne.save
bones.save
slowdive_ep.save
gemini.save
yoncalla.save
bae.save
cupid_deluxe.save
freetown_sound.save
alligator.save
boxer.save
high_violet.save
trouble_will_find_me.save
apocalypse.save
antidotes.save
total_life_forever.save
holy_fire.save
oshin.save
inner_world.save
sights_and_sounds.save

albums.push(nocturne)
albums.push(bones)
albums.push(slowdive_ep)
albums.push(gemini)
albums.push(yoncalla)
albums.push(bae)
albums.push(cupid_deluxe)
albums.push(freetown_sound)
albums.push(alligator)
albums.push(boxer)
albums.push(high_violet)
albums.push(trouble_will_find_me)
albums.push(apocalypse)
albums.push(antidotes)
albums.push(total_life_forever)
albums.push(holy_fire)
albums.push(oshin)
albums.push(inner_world)
albums.push(sights_and_sounds)


# SONGS
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

cupid_deluxe1 = Song.new(name: "Chamakay", album_id: cupid_deluxe.id, album_ord: 1, genre: "Soul", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/blood_orange/cupid_deluxe/Blood+Orange+-+Chamakay.mp3")
cupid_deluxe2 = Song.new(name: "Chosen", album_id: cupid_deluxe.id, album_ord: 2, genre: "Soul", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/blood_orange/cupid_deluxe/Blood+Orange+-+Chosen.mp3")
cupid_deluxe3 = Song.new(name: "It Is What It Is", album_id: cupid_deluxe.id, album_ord: 3, genre: "Soul", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/blood_orange/cupid_deluxe/Blood+Orange+-+It+Is+What+It+Is.mp3")
cupid_deluxe4 = Song.new(name: "You're Not Good Enough", album_id: cupid_deluxe.id, album_ord: 4, genre: "Soul", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/blood_orange/cupid_deluxe/Blood+Orange+-+Youre+Not+Good+Enough.mp3")

cupid_deluxe1.save
cupid_deluxe2.save
cupid_deluxe3.save
cupid_deluxe4.save

free_town1 = Song.new(name: "Hadron Collider", album_id: freetown_sound.id, album_ord: 1, genre: "Soul", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/blood_orange/freetown_sound/Blood+Orange+%26+Nelly+Furtado+-+Hadron+Collider.mp3")
free_town2 = Song.new(name: "Augustine", album_id: freetown_sound.id, album_ord: 2, genre: "Soul", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/blood_orange/freetown_sound/Blood+Orange+-+Augustine.mp3")
free_town3 = Song.new(name: "Best To You", album_id: freetown_sound.id, album_ord: 3, genre: "Soul", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/blood_orange/freetown_sound/Blood+Orange+-+Best+To+You.mp3")

free_town1.save
free_town2.save
free_town3.save

alligator1 = Song.new(name: "About Today", album_id: alligator.id, album_ord: 1, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/the_national/alligator/The+National+-+-About+Today-.mp3")
alligator2 = Song.new(name: "All The Wine", album_id: alligator.id, album_ord: 2, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/the_national/alligator/The+National+All+the+wine.mp3")

alligator1.save
alligator2.save

boxer1 = Song.new(name: "Apartment Story", album_id: boxer.id, album_ord: 1, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/the_national/boxer/The+National+-+-Apartment+Story-.mp3")
boxer2 = Song.new(name: "Mistaken For Strangers", album_id: boxer.id, album_ord: 2, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/the_national/boxer/The+National+-+Mistaken+for+Strangers.mp3")
boxer3 = Song.new(name: "Slow Show", album_id: boxer.id, album_ord: 3, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/the_national/boxer/The+National+-+Slow+Show.mp3")

boxer1.save
boxer2.save
boxer3.save

high_violet1 = Song.new(name: "Afraid of Everyone", album_id: high_violet.id, album_ord: 1, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/the_national/high_violet/The+National+-+Afraid+of+Everyone.mp3")
high_violet2 = Song.new(name: "Lemon World", album_id: high_violet.id, album_ord: 2, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/the_national/high_violet/The+National-Lemon+World.mp3")
high_violet3 = Song.new(name: "Bloodbuzz Ohio", album_id: high_violet.id, album_ord: 3, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/the_national/high_violet/The+National+-+Bloodbuzz+Ohio.mp3")
high_violet4 = Song.new(name: "Little Faith", album_id: high_violet.id, album_ord: 4, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/the_national/high_violet/The+National-+Little+Faith.mp3")
high_violet5 = Song.new(name: "Anyone's Ghoust", album_id: high_violet.id, album_ord: 5, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/the_national/high_violet/The+National+-+Anyones+Ghost.mp3")
high_violet6 = Song.new(name: "Conversation 16", album_id: high_violet.id, album_ord: 6, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/the_national/high_violet/The+National+-+Conversation+16.mp3")

high_violet1.save
high_violet2.save
high_violet3.save
high_violet4.save
high_violet5.save
high_violet6.save

trouble_will_find_me1 = Song.new(name: "Demons", album_id: trouble_will_find_me.id, album_ord: 3, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/the_national/trouble_will_find_me/The+National+-+-Demons-.mp3")
trouble_will_find_me2 = Song.new(name: "Don't Swallow The Cap", album_id: trouble_will_find_me.id, album_ord: 1, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/the_national/trouble_will_find_me/The+National+-+-Dont+Swallow+the+Cap-.mp3")
trouble_will_find_me3 = Song.new(name: "I Need My Girl", album_id: trouble_will_find_me.id, album_ord: 2, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/the_national/trouble_will_find_me/The+National+-+-I+Need+My+Girl-.mp3")
trouble_will_find_me4 = Song.new(name: "Humiliation", album_id: trouble_will_find_me.id, album_ord: 5, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/the_national/trouble_will_find_me/The+National+-+Humiliation.mp3")
trouble_will_find_me5 = Song.new(name: "This Is The Last Time", album_id: trouble_will_find_me.id, album_ord: 4, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/the_national/trouble_will_find_me/The+National+-+This+Is+The+Last+Time.mp3")

trouble_will_find_me1.save
trouble_will_find_me2.save
trouble_will_find_me3.save
trouble_will_find_me4.save
trouble_will_find_me5.save

apocalypse1 = Song.new(name: "Heartbreaks + Setbacks", album_id: apocalypse.id, album_ord: 1, genre: "Soul", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/thundercat/apocalypse/Thundercat+-+Heartbreaks+%2B+Setbacks.mp3")
apocalypse2 = Song.new(name: "Tenfold", album_id: apocalypse.id, album_ord: 2, genre: "Soul", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/thundercat/apocalypse/Thundercat+-+Tenfold.mp3")
apocalypse3 = Song.new(name: "Tron Song", album_id: apocalypse.id, album_ord: 3, genre: "Soul", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/thundercat/apocalypse/Tron+Song+-+Thundercat.mp3")

apocalypse1.save
apocalypse2.save
apocalypse3.save

antidotes1 = Song.new(name: "The French Open", album_id: antidotes.id, album_ord: 1, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/foals/antidoate/Foals+-+The+French+Open+-+Antidotes.mp3")
antidotes2 = Song.new(name: "Cassius", album_id: antidotes.id, album_ord: 2, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/foals/antidoate/Foals+-+Cassius.mp3")
antidotes3 = Song.new(name: "Electric Bloom", album_id: antidotes.id, album_ord: 3, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/foals/antidoate/Foals+-+Electric+Bloom+-+Antidotes.mp3")
antidotes4 = Song.new(name: "Hummer", album_id: antidotes.id, album_ord: 4, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/foals/antidoate/Foals+-+Hummer.mp3")
antidotes5 = Song.new(name: "Olympic Airways", album_id: antidotes.id, album_ord: 5, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/foals/antidoate/Foals+-+Olympic+Airways.mp3")
antidotes6 = Song.new(name: "Balloon", album_id: antidotes.id, album_ord: 6, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/foals/antidoate/Balloons+-+Foals.mp3")

antidotes1.save
antidotes2.save
antidotes3.save
antidotes4.save
antidotes5.save
antidotes6.save


total_life_forever1 = Song.new(name: "Alabaster", album_id: total_life_forever.id, album_ord: 1, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/foals/total_rife_forever/Foals+-+Alabaster+\(%2Blyrics+in+description\).mp3")
total_life_forever2 = Song.new(name: "Black Gold", album_id: total_life_forever.id, album_ord: 4, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/foals/total_rife_forever/Foals+-+Black+Gold.mp3")
total_life_forever3 = Song.new(name: "Blue Blood", album_id: total_life_forever.id, album_ord: 5, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/foals/total_rife_forever/Foals+-+Blue+Blood+Lyrics.mp3")
total_life_forever4 = Song.new(name: "This Orient", album_id: total_life_forever.id, album_ord: 3, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/foals/total_rife_forever/Foals+-+This+Orient.mp3")
total_life_forever5 = Song.new(name: "Total Life Forever", album_id: total_life_forever.id, album_ord: 6, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/foals/total_rife_forever/Foals+-+Total+Life+Forever.mp3")
total_life_forever6 = Song.new(name: "Miami", album_id: total_life_forever.id, album_ord: 2, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/foals/total_rife_forever/Miami+-+Foals.mp3")

total_life_forever1.save
total_life_forever2.save
total_life_forever3.save
total_life_forever4.save
total_life_forever5.save
total_life_forever6.save



holy_fire1 = Song.new(name: "Bad Habit", album_id: holy_fire.id, album_ord: 1, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/foals/holyfir/Foals+-+Bad+Habit.mp3")
holy_fire2 = Song.new(name: "Inhaler", album_id: holy_fire.id, album_ord: 2, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/foals/holyfir/Foals+-+Inhaler+02+-+\(Holy+Fire\).mp3")
holy_fire3 = Song.new(name: "Late Night", album_id: holy_fire.id, album_ord: 3, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/foals/holyfir/Foals+-+Late+Night.mp3")
holy_fire4 = Song.new(name: "My Number", album_id: holy_fire.id, album_ord: 4, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/foals/holyfir/My+Number+-+FOALS+\(lyrics+on-screen\).mp3")

holy_fire1.save
holy_fire2.save
holy_fire3.save
holy_fire4.save

oshin1 = Song.new(name: "Doused", album_id: oshin.id, album_ord: 1, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/diiv/oshin/DIIV+-+Doused.mp3")
oshin2 = Song.new(name: "Follow", album_id: oshin.id, album_ord: 2, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/diiv/oshin/DIIV+-+Follow.mp3")
oshin3 = Song.new(name: "How Long Have You Known", album_id: oshin.id, album_ord: 3, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/diiv/oshin/DIIV+-+How+Long+Have+You+Known-.mp3")
oshin4 = Song.new(name: "Subsume", album_id: oshin.id, album_ord: 4, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/diiv/oshin/DIIV+-+Oshin+\(Subsume\).mp3")

oshin1.save
oshin2.save
oshin3.save
oshin4.save

inner_world1 = Song.new(name: "A Real Hero", album_id: inner_world.id, album_ord: 1, genre: "Synth-pop", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/electric_youth/innerworld/Electric+Youth+-+A+Real+Hero.mp3")
inner_world2 = Song.new(name: "Before Life", album_id: inner_world.id, album_ord: 2, genre: "Synth-pop", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/electric_youth/innerworld/Electric+Youth+-+Before+Life.mp3")
inner_world3 = Song.new(name: "If All She Has Is You", album_id: inner_world.id, album_ord: 3, genre: "Synth-pop", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/electric_youth/innerworld/Electric+Youth+-+If+All+She+Has+Is+You.mp3")
inner_world4 = Song.new(name: "Innocence", album_id: inner_world.id, album_ord: 4, genre: "Synth-pop", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/electric_youth/innerworld/Electric+Youth+-+Innocence.mp3")
inner_world5 = Song.new(name: "The Best Thing", album_id: inner_world.id, album_ord: 5, genre: "Synth-pop", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/electric_youth/innerworld/Electric+Youth+-+The+Best+Thing.mp3")
inner_world6 = Song.new(name: "Tomorrow", album_id: inner_world.id, album_ord: 6, genre: "Synth-pop", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/electric_youth/innerworld/Electric+Youth+-+Tomorrow.mp3")
inner_world7 = Song.new(name: "WeAreTheYouth", album_id: inner_world.id, album_ord: 7, genre: "Synth-pop", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/electric_youth/innerworld/Electric+Youth+-+WeAreTheYouth.mp3")
inner_world8 = Song.new(name: "Without You", album_id: inner_world.id, album_ord: 8, genre: "Synth-pop", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/electric_youth/innerworld/Electric+Youth+-+Without+You.mp3")

inner_world1.save
inner_world2.save
inner_world3.save
inner_world4.save
inner_world5.save
inner_world6.save
inner_world7.save
inner_world8.save

sights_and_sounds1 = Song.new(name: "Evening Weather", album_id: sights_and_sounds.id, album_ord: 1, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/made_in_japan/sights_and_sounds/Evening+Weather+-+Made+in+Japan.mp3")
sights_and_sounds2 = Song.new(name: "Pairs", album_id: sights_and_sounds.id, album_ord: 2, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/made_in_japan/sights_and_sounds/Made+in+Japan+-+Pairs.mp3")
sights_and_sounds3 = Song.new(name: "What It Is", album_id: sights_and_sounds.id, album_ord: 3, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/made_in_japan/sights_and_sounds/Made+in+Japan+-+What+it+is.mp3")
sights_and_sounds4 = Song.new(name: "Time Flies", album_id: sights_and_sounds.id, album_ord: 4, genre: "Indie-rock", duration: 300, audio_url: "https://s3.amazonaws.com/beathub-dev/songs/made_in_japan/sights_and_sounds/Made+in+Japan+Time+Flies.mp3")

sights_and_sounds1.save
sights_and_sounds2.save
sights_and_sounds3.save
sights_and_sounds4.save


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
