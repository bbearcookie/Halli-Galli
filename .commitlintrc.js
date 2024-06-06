module.exports = {
  rules: {
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'design',
        'style',
        'refactor',
        'comment',
        'docs',
        'test',
        'chore',
        'rename',
        'remove',
        'deploy',
        'init',
      ],
    ],
  },
};
