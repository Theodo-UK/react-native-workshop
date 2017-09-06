# React Native deployment workshop

Deploying a React Native app to a staging platform quicker than...

## Start here

`git clone git@github.com:Theodo-UK/react-native-workshop.git`
(or `git clone https://github.com/Theodo-UK/react-native-workshop.git`)

## Steps already done

These are steps already taken to setup a basic app that we can use to test the deployment tools.

- node and npm installed
- Ruby installed
- React Native installed
- `react-native init deploymentWorkshop`
- Changed the text and added an image to index.ios.js and index.android.js

To check that your setup is working correctly: `react-native run-ios`

## Setting up for deployment

### Setup Fastlane for this project

`yo rn-toolbox:fastlane-setup`

- Choose a project name
- Confirm to commit the keystore file
- Say yes to all conflicts (we haven't changed anything else yet so we can safely override any conflicts)

`yo rn-toolbox:fastlane-env`

- ...more to come!



