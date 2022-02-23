# frozen_string_literal: true

class Bookmark < ApplicationRecord
  belongs_to :movie, dependent: :destroy
  belongs_to :list

  validates :list_id, uniqueness: { scope: :movie_id }
  validates :comment, length: { minimum: 6 }
end
