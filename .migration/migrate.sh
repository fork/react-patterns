#!/bin/bash

# Arguments
DIR=${@%/}

# Variables
DEP="react react-dom styled-components prop-types lazysizes picturefill what-input js-cookie svg-sprite-loader"
DEVDEP=

PURPLE='\033[0;35m'
BLUE='\033[0;34m'
GREEN='\033[0;32m'
NC='\033[0m'

INSTALL="${PURPLE}installing${NC}"
INFO="${BLUE}info${NC}"
SUCCESS="${GREEN}success${NC}"

JEST=false
STORYBOOK=false
STATICPAGES=false

if [ -z "$DIR" ]
then
  echo "You have to provide a directory as an argument,"
  echo "e.g. bash import.sh /users/path/to/directory"
  set -e
else  
  # Ask if user wants to copy the custom hooks directory
  while true; do
      read -p "Do you want to copy the 'hooks' directory? " yn
      case $yn in
          [Yy]* ) 
            cp -r -n ./hooks $DIR; 
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
            cp -r -n ./.storybook $DIR; 
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
            cp -r -n ./__tests__ $DIR; 
            cp -r -n ./setup $DIR; 
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

  echo ""
  echo -e "$INFO Copying 'components', 'stylesheets' and 'public' directories to $DIR."
  cp -r -n ./components $DIR
  cp -r -n ./stylesheets $DIR
  cp -r -n ./tokens $DIR
  cp -r -n ./public $DIR


  # Check if package.json exists, else init project
  PACKAGE="$DIR/package.json"
  if [ -f "$PACKAGE" ]; then
    echo ""
    echo -e "$INSTALL package.json found"
  else
    echo ""
    echo -e "$INSTALL Init project:"
    yarn --cwd $DIR init
  fi

  # Install dependencies
  echo ""
  echo -e "$INSTALL dependencies:"
  echo $DEP
  echo ""
  yarn --cwd $DIR add $DEP

  # Check if dev dependencies need to be installed
  if [ -z "$DEVDEP" ]
  then
    echo ""
    echo -e "$INSTALL No dev dependencies to install."
  else
    echo ""
    echo -e "$INSTALL dev dependencies:"
    echo $DEVDEP
    echo ""
    yarn --cwd $DIR add -D $DEVDEP
  fi

  if [ "$STORYBOOK" = true ] || [ "$JEST" = true ] || [ "$STATICPAGES" = true ] ; then
    echo ""
    echo -e "$INFO Add the follwing scripts to your package.json file:"; 
    echo ""

    if [ "$STORYBOOK" = true ] ; then
      echo "\"storybook\": \"start-storybook -s ./public -p 8000\","; 
      echo "\"storybook:build\": \"build-storybook\","; 
    fi

    if [ "$STATICPAGES" = true ] ; then
      echo "\"deploy\": \"yarn storybook:build && staticpages-cli\","; 
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

  # svg-sprite-loader information
  echo ""
  echo -e "$INFO The components make use of the 'svg-sprite-loader'. Make sure you add the following rule to your webpack config:"; 
  echo ""
  echo "{";
  echo "  test: /\.svg$/,";
  echo "  loader: 'svg-sprite-loader'";
  echo "}";

  # Theme Provider Information
  echo ""
  echo -e "$INFO Also make sure that you wrap your React tree in a 'ThemeProvider':"; 
  echo ""
  echo "import React from 'react';"
  echo "import { ThemeProvider } from 'styled-components';"
  echo ""
  echo "import tokens from 'path/to/tokens';"
  echo ""
  echo "export default () => ("
  echo "  <ThemeProvider theme={tokens}>"
  echo "    <ReactTree />"
  echo "  </ThemeProvider>"
  echo ");"

  echo ""
  echo -e "$SUCCESS Everything was copied and installed!"
  echo ""
fi