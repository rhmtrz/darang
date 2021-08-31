class Article < ApplicationRecord
  has_rich_text :body

  has_one :users_article
  has_one :user, through: :users_article, dependent: :destroy
end
