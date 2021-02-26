class Admins::EventsController < Admins::ApplicationController
  def index
    render json: Event.all
  end

  def create
    event = Event.new(event_params)
    if event.save
      render json: event
    else
      render nothing: true, status: :bad_request
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    head :no_content
  end 

  private
  def event_params
    params.require(:event).permit(:name, :description, :event_date, :place)
  end
end