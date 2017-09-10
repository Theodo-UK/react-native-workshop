# React Native Deployment workshop

Deploying a React Native app to a staging platform quicker than...

## Start here

`git clone git@github.com:Theodo-UK/react-native-workshop.git`
(or `git clone https://github.com/Theodo-UK/react-native-workshop.git`)

## Before we start

### What you should have done

- [ ] Node > `6` installed
- [ ] Ruby > `2.2.3` (and < `2.4`*)
- [ ] Bundler installed (`gem install bundler`)
- [ ] Yeoman installed (`npm i -g yo`)
- [ ] Yarn installed (`npm i -g yarn`)
- [ ] react-native-cli installed (`npm i -g react-native-cli`)
- [ ] The RN-Toolbox Yeoman generator installed (`npm install -g yo generator-rn-toolbox`)

### What we did for you <3

These are steps already taken to setup a basic app that we can use to test the deployment tools.

- [ x ] `react-native init deploymentWorkshop`
- [ x ] Changed the text and added an image to index.ios.js and index.android.js

## Setting up locally

```
cd deploymentWorkshop
yarn
```

And check that your setup is working correctly: `react-native run-ios`

## Setting up for deployment

### Setup Fastlane for this project

`yo rn-toolbox:fastlane-setup`

- Choose a project name
- Confirm to commit the keystore file
- Say yes to all conflicts (we haven't changed anything else yet so we can safely override any conflicts)

`yo rn-toolbox:fastlane-env`

- ...more to come!



