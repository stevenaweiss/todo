class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.boolean :completed
      t.string :description

      t.timestamps
    end
  end
end
