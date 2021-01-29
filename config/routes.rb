Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :admins do
    resources :quiz, only: [:index, :new]
  end
end
