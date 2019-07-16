Rails.application.routes.draw do
    namespace :api, defaults: {format: :json} do
        resources :user, only: [:show, :create, :update]
        resource :session, only: [:create, :destroy] 
        resources :languages, only: [:index, :show, :create, :update]
        resources :language_data, only: [:index, :show, :create, :update]
        resources :skills, only: [:index, :show, :create, :update]
        resources :calendars, only: [:create, :update]
    end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root "static_pages#root"

end


