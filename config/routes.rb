Rails.application.routes.draw do
    namespace :api, defaults: {format: :json} do
        resource :user, only: [:create]
        resource :session, only: [:create, :destroy] 
        resource :languages, only: [:index, :show, :create,  :update]
    end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root "static_pages#root"

end


