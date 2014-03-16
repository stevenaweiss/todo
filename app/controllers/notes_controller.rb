class NotesController < ApplicationController
  def index

  end

  def allnotes
    @notes = Note.all
    render json: @notes
  end

  def create
    # binding.pry
    @note = Note.create(description: params[:description], completed: false)
    render json: @note
  end

  def update
    @note = Note.find(params[:id])
    @note.update(completed: params[:completed])
    render json: @notes
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy
    render json: @notes
  end

end
