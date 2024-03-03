# This is some starter code in React with Google Auth

# Adding code to Github
For new repos, you can fork into a new Github repository by clicking "Fork" at the top of this screen.

For existing repos, add a starter branch into your local .git file by doing these commands.
1) "git remote add starter [https://github.com/vincentktieu101/ReactGoogleAuthStarter.git](https://github.com/vincentktieu101/react-google-auth-starter.git)"
2) "git pull starter master --allow-unrelated-histories"

You need the flag "--allow-unrelated-histories" if you have a README.md in your existing repo. There will then be a merge conflict where you must resolve by editing the README.md accordingly. Finally...

3) push your code to Github!

# Video
I made a video of how to set up React in CRA while I was a teaching assistant at UCSB. This video is a little outdated but should still be useful: https://www.youtube.com/watch?v=XZceEXlYC1w

# Adding Google Authentication

You should now have an instance of the app running on "localhost:3000/". Awesome! You may now be wondering why the app looks so bare-bones. You aren't even able to click on "Login."

The next step to setup the "client_id" for your app in the ".env". Go to this link: https://console.cloud.google.com/apis/credentials and create a project. In the OAuth consent screen, you should set the user type to "external." Now go ahead to the "credentials" screen and add a new "OAuth Client ID."

**When adding an "OAuth Client ID," add it for a "web application" and remember to set the "Authorized JavaScript origins" and "Authorized redirect URIs" to "http://localhost:3000" and "https://localhost:3000".**

In your folder, copy a file called ".env.SAMPLE" into ".env". Finally add your "client_id" into your ".env" file and do "npm run start". You should now have the React app running locally on your computer!
