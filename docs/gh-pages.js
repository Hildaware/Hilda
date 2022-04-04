import { publish } from 'gh-pages';

publish(
    'build',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/bferrari352/Hilda.git',
        user: {
            name: 'Brandon Ferrari',
            email: 'ferrari.l.brandon@gmail.com'
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);