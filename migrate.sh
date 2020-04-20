#!/bin/bash

# Arguments
DIR=${@%/}

# Variables
DEP="react react-dom styled-components prop-types lazysizes picturefill what-input js-cookie svg-sprite-loader"
DEVDEP=""

YELLOW='\033[1;33m'
BLUE='\033[1;34m'
GREEN='\033[0;32m'
NC='\033[0m'

QUESTIONS="${YELLOW}QUESTIONS${NC}"
INSTALL="${GREEN}INSTALLING${NC}"
INFO="${BLUE}INFO${NC}"
SUCCESS="${GREEN}SUCCESS${NC}"

JEST=false
STORYBOOK=false
STATICPAGES=false

if [ -z "$DIR" ]
then
  echo "You have to provide a directory as an argument,"
  echo "e.g. bash import.sh /users/path/to/directory"
  set -e
else
  echo ""
  echo "Starting the copying process..."

  echo "Copying 'components', 'stylesheets' and 'public' directories to $DIR."
  cp -r ./components $DIR
  cp -r ./stylesheets $DIR
  cp -r ./public $DIR
  
  echo ""
  echo -e $QUESTIONS

  # Ask if user wants to copy the custom hooks directory
  while true; do
      read -p "Do you want to copy the 'hooks' directory? " yn
      case $yn in
          [Yy]* ) 
            cp -r ./hooks $DIR; 
            break;;
          [Nn]* ) break;;
          
          * ) echo "Please insert yes or no";
      esac
  done

  # Ask if user wants to add storybook to their project
  while true; do
      read -p "Do you want to add Storybook to your directory? " yn
      case $yn in
          [Yy]* )
            cp -r ./.storybook $DIR; 
            STORYBOOK=true
            DEVDEP=$DEVDEP" @storybook/react @storybook/addon-a11y @storybook/theming @storybook/addon-docs @storybook/addon-viewport babel-loader @babel/core"; 
            break;;
          
          [Nn]* ) break;;
          
          * ) echo "Please insert yes or no";
      esac
  done

  # Ask if user wants to copy and add jest testing to new project
  while true; do
      read -p "Do you want to add Jest tests to your directory? " yn
      case $yn in
          [Yy]* ) 
            cp -r ./__tests__ $DIR; 
            cp -r ./setup $DIR; 
            cp ./jest.config.json $DIR; 
            
            JEST=true
            DEVDEP=$DEVDEP" babel-jest enzyme enzyme-adapter-react-16 enzyme-to-json jest react-is react-test-renderer";
            
            break;;
          
          [Nn]* ) break;;
          
          * ) echo "Please insert yes or no";
      esac
  done

  # Ask if user wants to add staticpages-cli to their project
  while true; do
      read -p "Do you want to add the staticpages-cli for deployment? " yn
      case $yn in
          [Yy]* ) 
            STATICPAGES=true
            DEVDEP=$DEVDEP" @4rk/staticpages-cli";
            break;;
          
          [Nn]* ) break;;
          
          * ) echo "Please insert yes or no";
      esac
  done


  PACKAGE="$DIR/package.json"
  if [ -f "$PACKAGE" ]; then
    echo ""
    echo -e "$INSTALL package.json found"
  else
    echo ""
    echo -e "$INSTALL Init project:"
    yarn --cwd $DIR init
  fi

  echo ""
  echo -e "$INSTALL dependencies:"
  echo $DEP
  echo ""
  yarn --cwd $DIR add $DEP

  echo ""
  echo -e "$INSTALL dev dependencies:"
  echo $DEVDEP
  echo ""
  yarn --cwd $DIR add -D $DEVDEP

  if [ "$STORYBOOK" = true ] || [ "$JEST" = true ] || [ "$STATICPAGES" = true ] ; then
    echo ""
    echo -e "$INFO Add the follwing scripts to your package.json file:"; 
    echo ""

    if [ "$STORYBOOK" = true ] ; then
      echo "\"storybook\": \"start-storybook -s ./public -p 8000\","; 
      echo "\"storybook:build\": \"build-storybook && cp -r ./public/. ./storybook-static/public/\","; 
    fi

    if [ "$STATICPAGES" = true ] ; then
      echo "\"deploy\": \"yarn build && staticpages-cli\","; 
    fi

      
    if [ "$JEST" = true ] ; then
      echo "\"test\": \"jest --config ./jest.config.json\","; 
      echo "\"test:update\": \"jest --config ./jest.config.json -u\""; 
    fi
  fi


  if [ "$STATICPAGES" = true ] ; then
    echo ""
    echo -e "$INFO Add the follwing variables to your .env file:"; 
    echo ""
    echo "DEPLOY_KEY=staticpages-deploy-key";
    echo "DEPLOY_SRC=storybook-static";
  fi

  echo ""
  echo -e "$SUCCESS Everything was copied and installed!"
  echo ""
fi