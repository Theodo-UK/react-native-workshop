# React Native Deployment Workshop

Deploying a React Native app to a staging platform faster than lightning ⚡️. 

![Take Off!](https://media.giphy.com/media/3oriNYQX2lC6dfW2Ji/giphy.gif "Logo Title Text 1")
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

### What we did for you <3

These are steps already taken to setup a basic app that we can use to test the deployment tools.

- [x] `react-native init deploymentWorkshop`
- [x] Changed the text and added an amazing image to `index.ios.js` and `index.android.js`

## Setting up locally

```
cd deploymentWorkshop
yarn
```

And check that your setup is working correctly: `react-native run-ios`

## Setting up for deployment

###  🚘 Setup Fastlane for this project

`yo rn-toolbox:fastlane-setup`

- Choose a project name
- Confirm to commit the keystore file
- Say yes to all conflicts (we haven't changed anything else yet so we can safely override any conflicts)

`yo rn-toolbox:fastlane-env`

- [ ] Confirm your project name
- [ ] Set `staging` as the name of the first environment we will configure. This environment will be used to test your features as they are developed
- [ ] At Theodo we use the convention `{NameOfMyApp} S` for the staging environment
- [ ] Choose `HockeyApp` as the platform. This is the one we'll show you how to use in this workshop.
- [ ] When asked which type of certificate you want to use, chose `In House` if you have an Apple Enterprise account, AdHoc otherwise.
- [ ] Create a repository called `certificates` in your organization Github account (or in your own private account if you don't have an organization). Make sure all your team members have READ access to this Git repository.
- [ ] Give the URL of this repository to Fastlane and give a passphrase to encrypt the repository. Keep this passphrase somewhere as you may need it in the future.
- [ ] When asked for the TeamID, provide the identifier of the organization you enrolled as.
- [ ] Give the email you use for your Apple Developer Account when asked for your Apple ID
- [ ] Confirm the given keystore password and save it somewhere (or specify your own).
- [ ] In your [HockeyApp account](https://rink.hockeyapp.net/manage/auth_tokens), go to `Account Settings > Api Tokens` and create a new token will full access to all your apps.
- [ ] Copy the token and paste it when the generator asks for a valid HockeyApp token.

### ⚙ Generating the provisioning profiles for iOS

If you don't know what provision profiles are, I highly recommend you read the following article written by our own Hari: https://www.theodo.fr/blog/2017/02/a-beginners-guide-to-ios-provisioning-profiles/

```
bundle exec fastlane ios setup --env=staging
```

- You should see your `certificates` Git repository updated.

### 🍏 Deploy the iOS version

Run `npm run deploy:staging:ios` and wait for the magic to happen.

- You should see the app created in your HockeyApp account


Now to allow your iPhone to download and install the app, go on HockeyApp under "Users" and invite yourself. From your iPhone, check the email and sign-in to HockeyApp from there. 

### 🤖 Deploy the Android version

Run `npm run deploy:staging:android` and wait for the magic to happen

- You should see the Android app created in your HockeyApp account

### 🖼 BONUS: Update the app icon

We're going to use the generator again. First, you need a `192x192` image (we provided you with a very nice one but you're free to use your own).

You also need to install `imagemagick`

```
brew install imagemagick
```

And then

```
yo rn-toolbox:assets --icon theodo-rn-appicon.png
```

Finally, the change will only apply to Android if we bump the version, so you need to update the version in the `android/app/build.gradle` to `1.1.0`

Now you can deploy this new version with the icon to Hockeyapp:

```
npm run deploy:staging:ios && npm run deploy:staging:android
```

Your icons should have been updated on https://rink.hockeyapp.net/manage/dashboard


