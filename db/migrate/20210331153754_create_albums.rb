class CreateAlbums < ActiveRecord::Migration[6.1]
  def change
    create_table :albums do |t|
      t.string :title
      t.integer :release_year
      t.string :album_url
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
