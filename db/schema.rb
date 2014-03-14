
ActiveRecord::Schema.define(version: 20140314185546) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "notes", force: true do |t|
    t.boolean  "completed"
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
