Todos::Application.routes.draw do
root to: 'notes#index'

resources :notes, only: [:create, :update, :destroy]

end
