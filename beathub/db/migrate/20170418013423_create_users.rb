class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :session_token
      t.string :image_url

      t.timestamps null: false
    end
  end
end
