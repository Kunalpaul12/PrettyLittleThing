# Overview

### This application is build on react native version 0.70.1 with node version 18.8.0 ⚛️

# Demo

Android

<!-- !["Android"](https://media.giphy.com/media/O7zJGYPNKvlM9lyf6i/giphy.gif) -->

!["Android"](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTM1OGZkYTU2YThmYWUyMzMxY2FhOGNkM2FmZTE5YTU0YWQ2NjI0NSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/00AgUF7IV0ZahNL4AW/giphy-downsized-large.gif)

IOS

!["IOS"](https://media.giphy.com/media/zldOte72aSrEXk4N1Q/giphy.gif)

# Installation Requirements

### Android

- Android Studio
- Jdk

### Ios

- Xcode ( >= version 13 )

### Homebrew for mac

- Open the Terminal app.
- Type ruby -e "\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" You’ll see messages in the Terminal explaining what you need to do to complete the installation process. You can learn more about Homebrew at the Homebrew website.

### Npm

brew install node

### Yarn

To install it npm install --global yarn

# Run

- In the root of project type yarn (this will install all the dependency)

- To run on android (cd android && ./gradlew clean && cd .. && npx react-native run-android)

- To run on ios (cd ios && pod deintegrate && npx pod-install && xcodebuild clean && cd .. && npx react-native run-ios)

# Debug Build

A debug build apk (assignment.apk) for android is at the root of the project

# Testing with Detox

- Install detox cli yarn global add detox-cli

### Android

detox build -c android.debug (to build the bundle for testing)

detox test -c android

### Ios

detox build -c ios.debug (to build the bundle for testing)

detox test -c ios

!["Testing"](https://media.giphy.com/media/X9eaalVjMMqSxSAph8/giphy.gif)
