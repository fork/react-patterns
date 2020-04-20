#!/bin/bash

dir=$1

dependencies="react react-dom styled-components prop-types lazysizes picturefill what-input js-cookies svg-sprite-loader"
devDependencies=""
if [ -z "$dir" ]
then
  echo "You have to provide a directory as an argument,"
  echo "e.g. bash import.sh /users/path/to/directory"
  set -e
else
  echo ""

  echo "Copying 'components' and 'stylesheets' directory to $dir."
  cp -r ./components $dir/components
  cp -r ./stylesheets $dir/stylesheets
  
  echo ""

  while true; do
      read -p "Do you want to copy the 'hooks' directory? " yn
      case $yn in
          [Yy]* ) cp -r ./hooks $dir/hooks; break;;
          [Nn]* ) break;;
          * ) echo "Please answer yes or no.";;
      esac
  done

  while true; do
      read -p "Do you want to add Storybook to your directory? " yn
      case $yn in
          [Yy]* ) cp -r ./.storybook $dir/.storybook; devDependencies=$devDependencies" @storybook/react @storybook/addon-a11y @storybook/theming @storybook/addon-docs @storybook/addon-viewport babel-loader @babel/core"; break;;
          [Nn]* ) break;;
          * ) echo "Please answer yes or no.";;
      esac
  done


  while true; do
      read -p "Do you want to add Jest tests to your directory? " yn
      case $yn in
          [Yy]* ) cp -r ./__tests__ $dir/__tests__; 
                  cp -r ./setup $dir/setup; 
                  cp ./jest.config.json $dir; 
                  
                  echo "";
                  echo "Add the follwing scripts to your package.json file:"; 
                  echo "";
                  echo "\"test\": \"jest --config ./jest.config.json\","; 
                  echo "\"test:update\": \"jest --config ./jest.config.json -u\""; 
                  echo "";
                  devDependencies=$devDependencies" babel-jest enzyme enzyme-adapter-react-16 enzyme-to-json jest react-is react-test-renderer"; break;;
          [Nn]* ) break;;
          * ) echo "Please answer yes or no.";;
      esac
  done

  echo ""
  echo "Installing following dependecies: $dependencies"
  echo ""
  yarn --cwd $dir add $dependencies

  echo ""
  echo "Installing following devDependencies: $devDependencies"
  echo ""
  yarn --cwd $dir add -D $devDependencies
fi