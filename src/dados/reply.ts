import { generateUniqueId } from './utils';
import { User } from './user';
import { Tweet } from './tweet';

export class Reply {
  id: string;
  content: string;
  user: User;
  tweet: Tweet;

  constructor(user: User, content: string, tweet: Tweet) {
    this.id = generateUniqueId();
    this.content = content;
    this.user = user;
    this.tweet = tweet;
  }
}

