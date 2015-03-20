Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'static_pages#home'
  get 'js/home' => 'static_pages#homejs'
  get 'jqwidgets/jqxtabs' => 'static_pages#jqxtabsjs'
  get 'jqwidgets/jqxgauge' => 'static_pages#jqxgaugejs'
  get 'jqwidgets/jqxchart' => 'static_pages#jqxchartjs'
  get 'jqwidgets/jqxexpander' => 'static_pages#jqxexpanderjs'
  get 'jqwidgets/jqxdata' => 'static_pages#jqxdatajs'
  get 'jqwidgets/jqxcore' => 'static_pages#jqxcorejs'
  get 'scripts/gettheme' => 'static_pages#getthemejs'
  get 'js/bootstrap.min.js' => 'static_pages#boot'
  get 'css/bootstrap.min.css' => 'static_pages#bootcss'
  get 'css/custom.css' => 'static_pages#customcss'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
