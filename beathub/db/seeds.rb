# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!(User)

User.create(username: "Kobe", password: "password", email: "kobe@email.com")
User.create(username: "Shaq", password: "password", email: "shaq@email.com")
User.create(username: "Lebron", password: "password", email: "lebron@email.com")
User.create(username: "Durant", password: "password", email: "durant@email.com")
