class ArticlesController < ApplicationController
  before_action :authenticate_user!, only: [:create]

  def index
    @articles = Article.all.order("created_at DESC")
    # debugger
    render 'index', status: 200, :format => [:json], :handler => :jbuilder
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      render status: 204, json: {message: "success"}
    end
  end


  private

  def image_params
    params.require(:image).permit(:image)
  end

  def article_params
    params.require(:article).permit(:title, :body)
  end

end
