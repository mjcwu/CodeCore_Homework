class User < ApplicationRecord
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  has_secure_password
  validates :email, presence: true, uniqueness: true, format: VALID_EMAIL_REGEX
  validates :name, presence: true

  has_many :comments, dependent: :nullify  
  has_many :posts, dependent: :nullify
end
