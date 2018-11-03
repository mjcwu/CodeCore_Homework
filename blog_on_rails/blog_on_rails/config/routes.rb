Rails.application.routes.draw do
  resources :posts do
    resources :comments, only: [ :create, :destroy ]
  end
  resource :sessions, only: [:new, :destroy, :create]
  resources :users, only: [:new, :create, :edit, :update]
  root({ to: 'posts#index' })

  get("/users/:id/edit/edit_password", to: "users#edit_password", as: :edit_password)
  patch("/users/:id/edit", to: "users#update_password")
end
