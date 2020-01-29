class CreateEpisodes < ActiveRecord::Migration[5.2]
  def change
    create_table :episodes do |t|
      t.string :title
      t.string :description
      t.string :url
      t.belongs_to :section, foreign_key: true

      t.timestamps
    end
  end
end
