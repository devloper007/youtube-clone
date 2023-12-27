export const comments = [
    {
      id: 1,
      name: 'User1',
      comment: 'This is the main comment.',
      replies: [
        {
          id: 2,
          name: 'User2',
          comment: 'Reply to User1.',
          replies: [
            {
              id: 3,
              name: 'User1',
              comment: 'Reply to User2.',
              replies: [
                {
                  id: 4,
                  name: 'User2',
                  comment: 'Another reply to User1.',
                  replies: []
                }
              ]
            },
            {
              id: 5,
              name: 'User3',
              comment: 'Another reply to User2.',
              replies: [
                {
                  id: 6,
                  name: 'User4',
                  comment: 'Nested reply to User3.',
                  replies: []
                }
              ]
            }
          ]
        },
        {
          id: 7,
          name: 'User5',
          comment: 'Another reply to User1.',
          replies: []
        }
      ]
    },
    {
      id: 8,
      name: 'User6',
      comment: 'Another main comment.',
      replies: [
        {
          id: 9,
          name: 'User7',
          comment: 'Reply to User6.',
          replies: []
        }
      ]
    }
  ];

  