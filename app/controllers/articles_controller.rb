class ArticlesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @articles = Article.all.with_rich_text_content.order("created_at DESC")
    render status: 200, json: @articles
  end

  def create
    @article = Article.new({content: article_params})
    if @article.save
      render status: 204, json: {message: "success"}
    end
  end

  private

  def article_params
    params.require(:content).to_s
  end

end
