# frozen_string_literal: true

class Bookmark < ApplicationRecord
  belongs_to :movie, dependent: :destroy
  belongs_to :list

  validates :movie_id, uniqueness: { scope: :list_id, message: 'Is already in the list' }
  validates :comment, length: { minimum: 6 }
end
