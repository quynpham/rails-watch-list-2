class Movie < ApplicationRecord
  validates :title, :overview, uniqueness: true
end
