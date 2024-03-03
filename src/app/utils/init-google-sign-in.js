export const initGoogleSignIn = (setUser) => {
  window.gapi.load("auth2", () => {
    window.gapi.auth2
      .init({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_ID,
      })
      .then(() => {
        const authInstance = window.gapi.auth2.getAuthInstance();
        const isSignedIn = authInstance.isSignedIn.get();

        if (isSignedIn === false) {
          setUser(null);
          return;
        }

        const profile = authInstance.currentUser.get().getBasicProfile();
        const user = {
          id: profile.getId(),
          fullName: profile.getName(),
          givenName: profile.getGivenName(),
          familyName: profile.getFamilyName(),
          imageUrl: profile.getImageUrl(),
          email: profile.getEmail(),
          signOut: authInstance.signOut,
        };

        setUser(user);

        // little hack to trigger page reload. do NOT put this in useCallback hook.
        authInstance.isSignedIn.listen(() => {
          setUser(undefined);
        });
      });
  });
  window.gapi.load("signin2", () => {
    window.gapi.signin2.render("login-button", {
      theme: "dark",
    });
  });
};
