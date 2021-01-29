class Admins::ApplicationController < ActionController::Base
  layout "admins_layout"

  protected
  def authenticate_request!
    # Rails.logger.info '-----Authorization-----'
    # http_token = request.headers['Authorization'].split(' ').last rescue nil
    # success, admin = AuthService.auth_token(http_token)
  end

end
