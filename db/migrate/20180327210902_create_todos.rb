class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.integer :user_id

      t.timestamps
    end
  end
end
