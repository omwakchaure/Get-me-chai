import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import mongoose from 'mongoose';
import User from 'app/models/User'; // Adjust the path based on your directory structure

const connectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect("mongodb://localhost:27017/chai", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
};

export const authOptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === 'github') {
        await connectDB();

        const existingUser = await User.findOne({ email: profile.email });

        if (!existingUser) {
          const newUser = new User({
            email: profile.email,
            username: profile.login || profile.email.split('@')[0],
            name: profile.name || profile.login,
          });

          await newUser.save();
          user.name = newUser.username;
        } else {
          user.name = existingUser.username;
        }

        return true;
      }
      return false;
    },
  },
});

export { authOptions as GET, authOptions as POST };
