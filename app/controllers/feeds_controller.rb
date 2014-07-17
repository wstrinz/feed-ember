class FeedsController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json { render json: { feeds: Feed.all } }
    end
  end
end
