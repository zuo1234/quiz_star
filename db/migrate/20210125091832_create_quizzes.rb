class CreateQuizzes < ActiveRecord::Migration[6.1]
  def change
    create_table :quizzes do |t|
      t.integer :admin_id
      t.string :quiz_title

      t.timestamps
    end
  end
end
