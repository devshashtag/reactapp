#!/usr/bin/env bash

# configurable variables for user
project_name=$(basename $(pwd))
html_folder="../${project_name}/pages/"
js_folder="../${project_name}/assets/js/pages/"
scss_folder="../${project_name}/assets/scss/pages/"

# colors
nc="\e[0m"
black="\e[30m"
red="\e[31m"
green="\e[32m"
yellow="\e[33m"
blue="\e[34m"
magenta="\e[35m"
cyan="\e[36m"
light_gray="\e[37m"
dark_gray="\e[90m"
light_red="\e[91m"
light_green="\e[92m"
light_yellow="\e[93m"
light_blue="\e[94m"
light_magenta="\e[95m"
light_cyan="\e[96m"
white="\e[97m"

# script ui
path_color=$light_magenta
text_color=$green
input_color=$light_magenta
error_color=$red
success_color=$light_yellow
sep_color=$light_blue
sep_line="${sep_color}$(echo ={1..40}| tr -d '[0-9 ]')"

# functions
function display_sep(){ echo -e "$sep_line"; }

: ' no needed for now
function depth(){ grep '/' -o <<< "$1" |wc -l; }

function back_depth(){ 
  times=$1
  seq -s../ "$times"|tr -d '[0-9]'
}
'

function html_template(){
  html_file="$1"
  html_path="$2"
  html_name="$(basename "$html_path"|sed 's|.html *$||')"
  [[ ! -f "$html_file" ]] && {
cat <<EOL >> "${html_file}"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- styles -->
    <link rel="stylesheet" href="/assets/css/styles.css" />
    <title>${project_name} ${html_name}</title>
  </head>

  <body>
    <h1>${project_name} ${html_name}</h1>

    <!-- script loader -->
    <script type="module" src="/assets/js/index.js"></script>
  </body>
</html>
EOL

  echo -e "${success_color}html file successfully created at:\n>${path_color}${html_file}${nc}" 
  display_sep
  }||{
    echo -e "${error_color}html file already exist!\n> ${path_color}${html_file}.${nc}" 
    exit 1
  }
}

function scss_template(){ 
  scss_file="$1"
  html_path="$2"
  scss_path="$(dirname "$1")"
  mkdir -p "$scss_path"
  [[ ! -f "$scss_file" ]] && {
cat <<EOL >> "${scss_file}"
  //** ${project_name}
  //*For> ${project_name}${html_path}
EOL

  echo -e "${success_color}scss file successfully created at:\n>${path_color}${scss_file}${nc}" 
  display_sep
  }||{
    echo -e "${error_color}scss file already exist!\n> ${path_color}${scss_file}.${nc}" 
    exit 1
  }
}

function js_template(){ 
  js_file="$1"
  html_path="$2"
  scss_path="$(dirname "$1")"
  mkdir -p "$scss_path"
  [[ ! -f "$js_file" ]] && {
cat <<EOL >> "${js_file}"
//* ${project_name}
//* for: ${project_name}${html_path}

// import {  } from "";

//* display items when page load
window.addEventListener("DOMContentLoaded", function () {
  
});

EOL
  echo -e "${success_color}js file successfully created at:\n>${path_color}${js_file}${nc}" 
  display_sep
  }||{
    echo -e "${error_color}js file already exist!\n> ${path_color}${scss_file}.${nc}" 
    exit 1
  }
}

# get html file path from user
while true; do 
  echo -ne "${text_color}Enter html path (example: ${light_green}folder_name/file_name.html${text_color}):\n${magenta}${html_folder}${input_color}"
  read html_path
  html_path=$(sed 's|^[\/]||' <<< "$html_path")
  grep -q "\.html *$" <<< "$html_path" && {
    display_sep
    break
  } || echo -e "${error_color}path file should end with .html extension!"
  display_sep
done

# find directory path of file
dir_path=$(dirname "${html_folder}$html_path")
html_file="${html_folder}${html_path}"

# check if path exists
[[ ! -e $dir_path ]] && [[ $dir_path != "." ]] && {
  # ask to try create path
  echo -ne "${path_color}"${dir_path}"\n^${text_color}folder doesn't exist! do you want to create it (y/n):${input_color} "
  read -n1 answer ;echo 
  display_sep
  # if yes then create path
  [[ $answer == "y" ]] && {
    mkdir -p "$dir_path"
    # status of mkdir 
    status=$?
  } || {
    # without path we cant create file
    echo -e "${error_color}can't create files because path dosen't exist!\n> ${path_color}${dir_path}.${nc}" 
    display_sep
    exit 1
  }

  [[ $status -ne 0 ]] && {
    # if mkdir failed return error
    echo -e "${error_color}not a valid path!\n> ${path_color}${dir_path}.${nc}" 
    display_sep
    exit 1
  }
} 

# create scss & js files
file_name=$(sed 's|.html *$||' <<< "$html_path")
html_name="/$(basename $html_folder)/$html_path"
scss_path="${scss_folder}${file_name}.scss"
scss_path="$(dirname "$scss_path")/_$(basename "$scss_path")"
js_path="${js_folder}${file_name}.js"

# create html file
html_template "$html_file" "$html_name" 
# display scss & js paths to show you where we create files at
echo -e "${text_color}scss path: ${path_color}${scss_path}"
echo -e "${text_color}js   path: ${path_color}${js_path}"
display_sep
echo -e "${text_color}for ${path_color}scss ${text_color}file Enter ${sep_color}1"
echo -e "${text_color}for ${path_color}js   ${text_color}file Enter ${sep_color}2"
echo -e "${text_color}for ${path_color}both ${text_color}file Enter ${sep_color}3"
echo -e "${text_color}for ${path_color}exit ${text_color}Enter ${sep_color}other numbers"
echo -ne "${text_color}Enter a number:${input_color} "
read -n1 answer
echo ;display_sep

[[ $answer -eq 1 ]] &&  scss_template "$scss_path" "$html_path" 
[[ $answer -eq 2 ]] &&  js_template   "$js_path"   "$html_path"
[[ $answer -eq 3 ]] && {  
  scss_template "$scss_path" "$html_path" 
  js_template   "$js_path"   "$html_path" 
}




# new features 
#html_folders=($(find $html_folder -type d))
#html_files=($(find $html_folder -type f -name "*.html"))
#scss_files=("${html_files[@]/.html/.scss\\n}");
#js_files=("${html_files[@]/.html/.js\\n}");

#echo -e ${html_folders[@]}
#echo -e ${html_files[@]}
#echo -e ${scss_files[@]}

