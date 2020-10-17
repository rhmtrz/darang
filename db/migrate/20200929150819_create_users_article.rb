class CreateUsersArticle < ActiveRecord::Migration[6.0]
  def change
    create_table :users_articles do |t|
      t.boolean :public
      t.references :user, null: false, foreign_key: true
      t.references :article, null: false, foreign_key: true
    end
  end
end
