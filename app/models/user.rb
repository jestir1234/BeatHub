class User < ActiveRecord::Base
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  has_many :playlists,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "Playlist"

  has_many :out_follows,
    foreign_key: :follower_id,
    class_name: "Follow"

  has_many :in_follows, as: :followable,
    foreign_key: :followable_id,
    class_name: "Follow"

  has_many :followed_artists,
    through: :out_follows,
    source: :followable,
    source_type: "Artist"

  has_many :followed_albums,
    through: :out_follows,
    source: :followable,
    source_type: "Album"

  has_many :followed_playlists,
   through: :out_follows,
   source: :followable,
   source_type: "Playlist"

   has_many :followed_users,
    through: :out_follows,
    source: :followable,
    source_type: "User"


  has_many :followers,
    through: :in_follows,
    source: :follower

  has_many :playlist_songs,
    through: :playlists,
    source: :songs

  has_many :followed_playlist_songs,
    through: :followed_playlists,
    source: :songs


  after_initialize :ensure_session_token
  attr_reader :password

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= reset_session_token!
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    if user && user.is_password?(password)
      return user
    end
    nil
  end

end
