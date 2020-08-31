json.articles @articles do |article|
  json.id article.id
  json.title article.title
  json.body article.body.body.to_s
  json.createdAt article.created_at
end
