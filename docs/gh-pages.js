import { publish } from 'gh-pages';

publish(
    'build',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/hildaware/Hilda.git',
        user: {
            name: 'Sel',
            email: 'BrandonFerrari@tutanota.com'
        },
        dotfiles: true
    },
    (e) => {
        console.log('Deploy Complete!');
        console.log(e);
    }
);