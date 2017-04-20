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

ActiveRecord::Base.connection.reset_pk_sequence!(User)
ActiveRecord::Base.connection.reset_pk_sequence!(Artist)
ActiveRecord::Base.connection.reset_pk_sequence!(Album)
ActiveRecord::Base.connection.reset_pk_sequence!(Song)

User.create(username: "Kobe", password: "password", email: "kobe@email.com")
User.create(username: "Shaq", password: "password", email: "shaq@email.com")
User.create(username: "Lebron", password: "password", email: "lebron@email.com")
User.create(username: "Durant", password: "password", email: "durant@email.com")

wild_nothing = Artist.new(name: "Wild Nothing", genre: "Shoe-gaze")
chvrches = Artist.new(name: "CHVRCHES", genre: "Synth-pop")

wild_nothing.save
chvrches.save

nocturne = Album.new(name: "Nocturne", artist_id: wild_nothing.id, year: "01/2/2010")
bones = Album.new(name: "The Bones of What You Believe", artist_id: chvrches.id, year: "20/9/2013")

nocturne.save
bones.save

noc1 = Song.new(name: "Shadow", album_id: nocturne.id, album_ord: 1, genre: "Shoe-gaze")
noc2 = Song.new(name: "Midnight Song", album_id: nocturne.id, album_ord: 2, genre: "Shoe-gaze")
noc3 = Song.new(name: "Nocturne", album_id: nocturne.id, album_ord: 3, genre: "Shoe-gaze")
noc4 = Song.new(name: "Through the Grass", album_id: nocturne.id, album_ord: 4, genre: "Shoe-gaze")
noc5 = Song.new(name: "Only Heather", album_id: nocturne.id, album_ord: 5, genre: "Shoe-gaze")
noc6 = Song.new(name: "This Chain Won't Break", album_id: nocturne.id, album_ord: 6, genre: "Shoe-gaze")
noc7 = Song.new(name: "Disappear Always", album_id: nocturne.id, album_ord: 7, genre: "Shoe-gaze")
noc8 = Song.new(name: "Paradise", album_id: nocturne.id, album_ord: 8, genre: "Shoe-gaze")
noc9 = Song.new(name: "Counting Days", album_id: nocturne.id, album_ord: 9, genre: "Shoe-gaze")
noc10 = Song.new(name: "The Blue Dress", album_id: nocturne.id, album_ord: 10, genre: "Shoe-gaze")
noc11 = Song.new(name: "Rheya", album_id: nocturne.id, album_ord: 11, genre: "Shoe-gaze")

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



bones1 = Song.new(name: "The Mother We Share", album_id: bones.id, album_ord: 1, genre: "Synth-pop")
bones2 = Song.new(name: "We Sink", album_id: bones.id, album_ord: 1, genre: "Synth-pop")
bones3 = Song.new(name: "Gun", album_id: bones.id, album_ord: 1, genre: "Synth-pop")
bones4 = Song.new(name: "Tether", album_id: bones.id, album_ord: 1, genre: "Synth-pop")
bones5 = Song.new(name: "Lies", album_id: bones.id, album_ord: 1, genre: "Synth-pop")
bones6 = Song.new(name: "Under the Tide", album_id: bones.id, album_ord: 1, genre: "Synth-pop")
bones7 = Song.new(name: "Recover", album_id: bones.id, album_ord: 1, genre: "Synth-pop")
bones8 = Song.new(name: "Night Sky", album_id: bones.id, album_ord: 1, genre: "Synth-pop")
bones9 = Song.new(name: "Science/Visions", album_id: bones.id, album_ord: 1, genre: "Synth-pop")
bones10 = Song.new(name: "Lungs", album_id: bones.id, album_ord: 1, genre: "Synth-pop")
bones11 = Song.new(name: "By the Throat", album_id: bones.id, album_ord: 1, genre: "Synth-pop")
bones12 = Song.new(name: "You Caught the Light", album_id: bones.id, album_ord: 1, genre: "Synth-pop")

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
