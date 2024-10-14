### Installing & Configuration

React-Native primarily using JavaScript to compile the code & run on various devices, making it cross-functional technology . Pre-Requisites are following softwares `Android Studio, Visual Studio Code, Git, Node.js, JDK ` . Check for the versions compatible with latest React-Native support . Add `local.properties file` inside android folder, add path `sdk.dir=C\:\\Users\\UserName\\AppData\\Local\\Android\\SDK`. Install the react-native project using command `npx react-native init ProjectName .`  Run your application using `npx react-native start.`

Folder structure includes **__ test __**  folder `used by the tester to write test cases for the application`, **.bundle** folder  `contains .config file, which we don't need to touch `, **android** folder ` resposible for storing android specific files & folders`, **ios** folder & **node modules.**  App registry file is responsible for converting one file into android & ios.

![React vs React-Native](./readme/react-vs-reactNative.png "React vs React-Native")

### React-Native Under the Hood

We write our logic in JSX, then, program is compiled into Real Native Application, but, actually components such as `<SafeAreaView, View, Text> are getting compiled into `  an Application. We can say, View is similar to `<div> tag` in Web-Browser. Logic written in JavaScript is not compiled, but, runned on a JS thread hosted by React-Native.
