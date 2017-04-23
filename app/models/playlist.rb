class Playlist < ActiveRecord::Base
  validates :name, :author, presence: true;

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: "User"
end
