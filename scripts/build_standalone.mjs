import fs from 'fs';

const boardB64 = fs.readFileSync('assets/board.png').toString('base64');
const titleB64 = fs.readFileSync('assets/title.png').toString('base64');
const avatarB64 = fs.readFileSync('assets/avatar.png').toString('base64');

const boardDataUri = `data:image/png;base64,${boardB64}`;
const titleDataUri = `data:image/png;base64,${titleB64}`;
const avatarDataUri = `data:image/png;base64,${avatarB64}`;

let template = fs.readFileSync('template.html', 'utf-8');

template = template.replace('__BOARD_DATA_URI__', boardDataUri);
template = template.replace('__TITLE_DATA_URI__', titleDataUri);
template = template.replace('__AVATAR_DATA_URI__', avatarDataUri);

fs.writeFileSync('snake-learning-game-latest-edition.html', template);
console.log('Created snake-learning-game-latest-edition.html, size:', template.length);

fs.writeFileSync('index.html', template);
console.log('Updated index.html, size:', template.length);
