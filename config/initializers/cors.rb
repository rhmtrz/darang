# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do

    # YOU MUST READ AND UNDERSTAND the CORS https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    origins '*'
    resource '*',
             headers: :any,
             expose: %w(access-token uid client),
             methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end