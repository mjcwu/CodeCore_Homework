class CommentsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  
  before_action :authorize_user!, only: [:destroy]

  def create
    @post = Post.find params[:post_id]
    @comment = Comment.new comment_params
    @comment.post = @post
    @comment.user = current_user
    if @comment.save
      redirect_to post_path(@comment.post.id)
    else
      render :post_comments_path
    end
  end
  def destroy
    @comment = Comment.find params[:id]
    @comment.destroy
    redirect_to post_path(@comment.post.id)
  end
  private
  def comment_params
    params.require(:comment).permit(:body)
  end

  def find_answer
    @answer = Answer.find params[:id]
  end

  def authorize_user!
    unless can? :crud, @comment
      flash[:danger] = "Access Denied"
      redirect_to root_path
    end
  end
end
