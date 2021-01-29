class CreateTopics < ActiveRecord::Migration[6.1]
  def change
    create_table :topics do |t|
      t.integer :quiz_id
      t.integer :topic_type
      t.string :topic_title
      t.string :topic_body
      t.string :topic_answer

      t.timestamps
    end
  end
end
