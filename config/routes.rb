Rails.application.routes.draw do
  namespace :api do
    resources :todos, only: [:index, :create, :show, :update, :destroy]
  end

  root to: 'static_pages#root'

end
