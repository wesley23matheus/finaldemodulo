import { generateUniqueId } from './utils';
import { Tweet } from './tweet';

export class User {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  followers: User[] = [];
  tweets: Tweet[] = [];

  constructor(name: string, email: string, username: string, password: string) {
    this.id = generateUniqueId();
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password;
  }

  follow(user: User) {
    if (user !== this) {
      this.followers.push(user);
    }
  }

  createTweet(content: string, type: 'normal' | 'reply') {
    const tweet = new Tweet(this, content, type);
    this.tweets.push(tweet);
    return tweet;
  }

  showFeed() {
    this.tweets.forEach((tweet) => {
      console.log(`@${tweet.user.username}: ${tweet.content}`);
      tweet.showLikes();
      tweet.showReplies();
    });
  }
}





