import { generateUniqueId } from './utils';
import { User } from './user';
import { Like } from './like';
import { Reply } from './reply';

export class Tweet {
  id: string;
  content: string;
  type: 'normal' | 'reply';
  user: User;
  likes: Like[] = [];
  replies: Reply[] = [];

  constructor(user: User, content: string, type: 'normal' | 'reply') {
    this.id = generateUniqueId();
    this.content = content;
    this.type = type;
    this.user = user;
  }

  addLike(user: User) {
    const like = new Like(user, this);
    this.likes.push(like);
  }

  addReply(user: User, content: string) {
    const reply = new Reply(user, content, this);
    this.replies.push(reply);
  }

  showLikes() {
    if (this.likes.length === 0) {
      return;
    }

    if (this.likes.length === 1) {
      console.log(`@${this.likes[0].user.username} curtiu`);
    } else {
      const usernames = this.likes.map((like) => `@${like.user.username}`);
      console.log(`${usernames.join(', ')} e mais ${this.likes.length - 1} usuários curtiram`);
    }
  }

  showReplies() {
    if (this.replies.length > 0) {
      console.log('Replies:');
      this.replies.forEach((reply) => {
        console.log(`> @${reply.user.username}: ${reply.content}`);
      });
    }
  }
}




