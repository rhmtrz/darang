class ArticlesController < ApplicationController
  skip_before_action :verify_authenticity_token

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

  # def upload_image
  #   image_params[:image].open if image_params[:image].tempfile.closed?
  #
  #   @image = Image.new(image_params)
  #
  #   respond_to do |format|
  #     if @image.save
  #       format.json { render json: { url: @image.image_url }, status: :ok }
  #     else
  #       format.json { render json: @image.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  private

  def image_params
    params.require(:image).permit(:image)
  end

  def article_params
    params.require(:article).permit(:title, :body)
  end

end
