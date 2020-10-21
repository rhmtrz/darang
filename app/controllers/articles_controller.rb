class ArticlesController < ApplicationController
  # before_action :authenticate_user!, only: [:create]
  skip_before_action :verify_authenticity_token
  def index
    @articles = Article.all.order("created_at DESC")
    render 'index', status: 200, :format => [:json], :handler => :jbuilder
  end

  def create
    @articles = Article.new(article_params)
    # debugger
    if @articles.save
      UsersArticle.create({user_id: params[:user_id], article_id: article.id})
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
