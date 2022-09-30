project_name="reactapp"
temp_dir="template"
mkdir -p "$temp_dir"

cp    "${project_name}/index.html" "$temp_dir"
cp -r "${project_name}/pages"      "$temp_dir"
cp -r "${project_name}/assets"     "$temp_dir"

sass "${temp_dir}/assets/scss/styles.scss" "${temp_dir}/assets/css/styles.css"

rm -rf "${temp_dir}/assets/scss"
rm     "${temp_dir}/assets/css/styles.css.map"

cd "$project_name"

git checkout node

rm -rf public
mkdir -p public

mv "../${temp_dir}/"* "public"
rm -rf "../${temp_dir}"

fandogh login
fandogh source run

git add .
git commit -m "template updated"
git push origin node
git checkout dev


