class NotesController < ApplicationController
  def index

  end

  def create
    # binding.pry
    @note = Note.create(description: params[:description], completed: false)
    render json: @note
  end

  def update
  end

  def destroy
  end

end
