Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'admins/dashboard#index'
  namespace :admins do
    resources :quiz, only: [:index, :new]
    resources :events
  end
end
