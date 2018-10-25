# Cleaning up existing data
Post.destroy_all
Comment.destroy_all


NUM_OF_POSTS = 75

NUM_OF_POSTS.times do
  p = Post.create(
    title: Faker::Games::Pokemon.name,
    body: Faker::GameOfThrones.quote
  )
  if p.valid?
    rand(0..15).times do
      p.comments << Comment.new(
        body: Faker::GreekPhilosophers.quote,
      )
    end
  end
end

puts ("Generated #{Post.count} posts")
puts ("Generated #{Comment.count} comments")