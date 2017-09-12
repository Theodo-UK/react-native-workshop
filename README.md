# React Native Deployment Workshop

Deploying a React Native app to a staging platform in a blink.

![Take Off!](images/rocket-takeoff.jpg "Logo Title Text 1")


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
- [ ] Created an account for your company (or you as a single developer) on [HockeyApp](https://hockeyapp.net/)
- [ ] Register your iPhone by logging in on https://hockeyapp.net/ (if you have an iPhone)

### What we did for you <3

These are steps already taken to setup a basic app that we can use to test the deployment tools.

- [ x ] `react-native init deploymentWorkshop`
- [ x ] Changed the text and added an amazing image to `index.ios.js` and `index.android.js`

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

- [ ] Confirm your project name
- [ ] Set `staging` as the name of the first environment we will configure. This environment will be used to test your features as they are developed
- [ ] At Theodo we use the convention `{NameOfMyApp} S` for the staging environment
- [ ] Choose `HockeyApp` as the platform. This is the one we'll show you how to use in this workshop.
- [ ] When asked which type of certificate you want to use, chose `In House` if you have an Apple Enterprise account, AdHoc otherwise. (TODO: Explain the difference between the two types of certificate?)
- [ ] Create a repository called `certificates` in your organization Github account (or in your own private account if you don't have an organization). Make sure all your team members have READ access to this git repository.

- [ ] When asked for the TeamID, provide ....
- [ ] Set your Apple ID with the email you use for your Apple Developer Account
- [ ] Confirm the given keystore password and save it somewhere (or specify your own)
- [ ] In your HockeyApp account, go to `Account Settings > Api Tokens` and create a new token to READ and WRITE all your apps. Call it "All apps"
- [ ] Copy the token and paste it when the generator asks for a valid HockeyApp token


### Deploy the iOS version

Run `npm run deploy:staging:ios` and wait for the magic to happen.

- You should see the app created in your HockeyApp account
- You should see your `certificates` Git repository updated.


Now to allow your iPhone to download and install the app, go on HockeyApp under "Users" and invite yourself. From your iPhone, check the email and sign-in to HockeyApp from there. 

### Deploy the Android version

Run `npm run deploy:staging:android` and wait for the magic to happen

- You should see the Android app created in your HockeyApp account





