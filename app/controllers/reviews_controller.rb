class ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]
  before_action :authorize_request, only: :create
  # GET /reviews
  def index
    @album = Album.find(params[:album_id])
    @user = User.find(params[:user_id])
    @reviews = Review.where(album_id: @album.id).all
    
    render json: @reviews, include:[:album, :user], status: :ok
  end

  # GET /reviews/1
  def show
    render json: @review
  end

  # POST /reviews
  def create
    @album = Album.find(params[:album_id])
    # @review = Review.new(review_params)
    # @review.album = @album
    @review = Review.where(user_id: @current_user.id).new(review_params)
    @review.album = @album
    # @review.user_id = @current_user
    # @review = Review.new(review_params)
    # @review.user_id = current_user.id if user_signed_in?

    if @review.save
      render json: @review, status: :created
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/1
  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reviews/1
  def destroy
    @review.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:review, :user_id, :album_id)
    end
end
