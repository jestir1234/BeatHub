class Follow < ActiveRecord::Base
  belongs_to :followable, polymorphic: true
  belongs_to :follower, class_name: "User"
end
