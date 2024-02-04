import type { DocumentNode } from 'graphql';

export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'DateTime', loc: { start: 7, end: 15 } },
      directives: [],
      loc: { start: 0, end: 15 }
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'JSON', loc: { start: 24, end: 28 } },
      directives: [],
      loc: { start: 17, end: 28 }
    },
    {
      kind: 'ScalarTypeDefinition',
      name: {
        kind: 'Name',
        value: 'EmailAddress',
        loc: { start: 37, end: 49 }
      },
      directives: [],
      loc: { start: 30, end: 49 }
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'Cuid', loc: { start: 58, end: 62 } },
      directives: [],
      loc: { start: 51, end: 62 }
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 69, end: 74 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 64, end: 74 }
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 81, end: 89 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 76, end: 89 }
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Bookmark', loc: { start: 95, end: 103 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 108, end: 110 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Cuid',
                loc: { start: 112, end: 116 }
              },
              loc: { start: 112, end: 116 }
            },
            loc: { start: 112, end: 117 }
          },
          directives: [],
          loc: { start: 108, end: 117 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'user', loc: { start: 120, end: 124 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 126, end: 130 }
            },
            loc: { start: 126, end: 130 }
          },
          directives: [],
          loc: { start: 120, end: 130 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'post', loc: { start: 133, end: 137 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Post',
                loc: { start: 139, end: 143 }
              },
              loc: { start: 139, end: 143 }
            },
            loc: { start: 139, end: 144 }
          },
          directives: [],
          loc: { start: 133, end: 144 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 147, end: 156 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 158, end: 166 }
              },
              loc: { start: 158, end: 166 }
            },
            loc: { start: 158, end: 167 }
          },
          directives: [],
          loc: { start: 147, end: 167 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'updatedAt',
            loc: { start: 170, end: 179 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 181, end: 189 }
              },
              loc: { start: 181, end: 189 }
            },
            loc: { start: 181, end: 190 }
          },
          directives: [],
          loc: { start: 170, end: 190 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'deletedAt',
            loc: { start: 193, end: 202 }
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'DateTime',
              loc: { start: 204, end: 212 }
            },
            loc: { start: 204, end: 212 }
          },
          directives: [],
          loc: { start: 193, end: 212 }
        }
      ],
      loc: { start: 90, end: 214 }
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'CreateBookmarkInput',
        loc: { start: 222, end: 241 }
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'userId',
            loc: { start: 246, end: 252 }
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Cuid',
                loc: { start: 254, end: 258 }
              },
              loc: { start: 254, end: 258 }
            },
            loc: { start: 254, end: 259 }
          },
          directives: [],
          loc: { start: 246, end: 259 }
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'postId',
            loc: { start: 262, end: 268 }
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Cuid',
                loc: { start: 270, end: 274 }
              },
              loc: { start: 270, end: 274 }
            },
            loc: { start: 270, end: 275 }
          },
          directives: [],
          loc: { start: 262, end: 275 }
        }
      ],
      loc: { start: 216, end: 277 }
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 291, end: 296 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'bookmarks',
            loc: { start: 301, end: 310 }
          },
          arguments: [],
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Bookmark',
                  loc: { start: 313, end: 321 }
                },
                loc: { start: 313, end: 321 }
              },
              loc: { start: 313, end: 322 }
            },
            loc: { start: 312, end: 323 }
          },
          directives: [],
          loc: { start: 301, end: 323 }
        }
      ],
      loc: { start: 279, end: 325 }
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 339, end: 347 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createBookmark',
            loc: { start: 352, end: 366 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 367, end: 372 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'CreateBookmarkInput',
                    loc: { start: 374, end: 393 }
                  },
                  loc: { start: 374, end: 393 }
                },
                loc: { start: 374, end: 394 }
              },
              directives: [],
              loc: { start: 367, end: 394 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Bookmark',
                loc: { start: 397, end: 405 }
              },
              loc: { start: 397, end: 405 }
            },
            loc: { start: 397, end: 406 }
          },
          directives: [],
          loc: { start: 352, end: 406 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'deleteBookmark',
            loc: { start: 409, end: 423 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 424, end: 426 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Cuid',
                    loc: { start: 428, end: 432 }
                  },
                  loc: { start: 428, end: 432 }
                },
                loc: { start: 428, end: 433 }
              },
              directives: [],
              loc: { start: 424, end: 433 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Cuid',
                loc: { start: 436, end: 440 }
              },
              loc: { start: 436, end: 440 }
            },
            loc: { start: 436, end: 441 }
          },
          directives: [],
          loc: { start: 409, end: 441 }
        }
      ],
      loc: { start: 327, end: 443 }
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Comment', loc: { start: 449, end: 456 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 461, end: 463 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Cuid',
                loc: { start: 465, end: 469 }
              },
              loc: { start: 465, end: 469 }
            },
            loc: { start: 465, end: 470 }
          },
          directives: [],
          loc: { start: 461, end: 470 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'content',
            loc: { start: 473, end: 480 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 482, end: 488 }
              },
              loc: { start: 482, end: 488 }
            },
            loc: { start: 482, end: 489 }
          },
          directives: [],
          loc: { start: 473, end: 489 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'author',
            loc: { start: 492, end: 498 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 500, end: 504 }
              },
              loc: { start: 500, end: 504 }
            },
            loc: { start: 500, end: 505 }
          },
          directives: [],
          loc: { start: 492, end: 505 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'post', loc: { start: 508, end: 512 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Post',
                loc: { start: 514, end: 518 }
              },
              loc: { start: 514, end: 518 }
            },
            loc: { start: 514, end: 519 }
          },
          directives: [],
          loc: { start: 508, end: 519 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 522, end: 531 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 533, end: 541 }
              },
              loc: { start: 533, end: 541 }
            },
            loc: { start: 533, end: 542 }
          },
          directives: [],
          loc: { start: 522, end: 542 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'updatedAt',
            loc: { start: 545, end: 554 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 556, end: 564 }
              },
              loc: { start: 556, end: 564 }
            },
            loc: { start: 556, end: 565 }
          },
          directives: [],
          loc: { start: 545, end: 565 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'deletedAt',
            loc: { start: 568, end: 577 }
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'DateTime',
              loc: { start: 579, end: 587 }
            },
            loc: { start: 579, end: 587 }
          },
          directives: [],
          loc: { start: 568, end: 587 }
        }
      ],
      loc: { start: 444, end: 589 }
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'CreateCommentInput',
        loc: { start: 597, end: 615 }
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'content',
            loc: { start: 620, end: 627 }
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 629, end: 635 }
              },
              loc: { start: 629, end: 635 }
            },
            loc: { start: 629, end: 636 }
          },
          directives: [],
          loc: { start: 620, end: 636 }
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'postId',
            loc: { start: 639, end: 645 }
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Cuid',
                loc: { start: 647, end: 651 }
              },
              loc: { start: 647, end: 651 }
            },
            loc: { start: 647, end: 652 }
          },
          directives: [],
          loc: { start: 639, end: 652 }
        }
      ],
      loc: { start: 591, end: 654 }
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UpdateCommentInput',
        loc: { start: 662, end: 680 }
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'content',
            loc: { start: 685, end: 692 }
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 694, end: 700 }
              },
              loc: { start: 694, end: 700 }
            },
            loc: { start: 694, end: 701 }
          },
          directives: [],
          loc: { start: 685, end: 701 }
        }
      ],
      loc: { start: 656, end: 703 }
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 717, end: 725 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createComment',
            loc: { start: 730, end: 743 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 744, end: 749 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'CreateCommentInput',
                    loc: { start: 751, end: 769 }
                  },
                  loc: { start: 751, end: 769 }
                },
                loc: { start: 751, end: 770 }
              },
              directives: [],
              loc: { start: 744, end: 770 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Comment',
                loc: { start: 773, end: 780 }
              },
              loc: { start: 773, end: 780 }
            },
            loc: { start: 773, end: 781 }
          },
          directives: [],
          loc: { start: 730, end: 781 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'updateComment',
            loc: { start: 784, end: 797 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 798, end: 800 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Cuid',
                    loc: { start: 802, end: 806 }
                  },
                  loc: { start: 802, end: 806 }
                },
                loc: { start: 802, end: 807 }
              },
              directives: [],
              loc: { start: 798, end: 807 }
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 809, end: 814 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'UpdateCommentInput',
                    loc: { start: 816, end: 834 }
                  },
                  loc: { start: 816, end: 834 }
                },
                loc: { start: 816, end: 835 }
              },
              directives: [],
              loc: { start: 809, end: 835 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Comment',
                loc: { start: 838, end: 845 }
              },
              loc: { start: 838, end: 845 }
            },
            loc: { start: 838, end: 846 }
          },
          directives: [],
          loc: { start: 784, end: 846 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'deleteComment',
            loc: { start: 849, end: 862 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 863, end: 865 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Cuid',
                    loc: { start: 867, end: 871 }
                  },
                  loc: { start: 867, end: 871 }
                },
                loc: { start: 867, end: 872 }
              },
              directives: [],
              loc: { start: 863, end: 872 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Cuid',
                loc: { start: 875, end: 879 }
              },
              loc: { start: 875, end: 879 }
            },
            loc: { start: 875, end: 880 }
          },
          directives: [],
          loc: { start: 849, end: 880 }
        }
      ],
      loc: { start: 705, end: 882 }
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Like', loc: { start: 888, end: 892 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 897, end: 899 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Cuid',
                loc: { start: 901, end: 905 }
              },
              loc: { start: 901, end: 905 }
            },
            loc: { start: 901, end: 906 }
          },
          directives: [],
          loc: { start: 897, end: 906 }
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'user', loc: { start: 909, end: 913 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 915, end: 919 }
              },
              loc: { start: 915, end: 919 }
            },
            loc: { start: 915, end: 920 }
          },
          directives: [],
          loc: { start: 909, end: 920 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 923, end: 932 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 934, end: 942 }
              },
              loc: { start: 934, end: 942 }
            },
            loc: { start: 934, end: 943 }
          },
          directives: [],
          loc: { start: 923, end: 943 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'updatedAt',
            loc: { start: 946, end: 955 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 957, end: 965 }
              },
              loc: { start: 957, end: 965 }
            },
            loc: { start: 957, end: 966 }
          },
          directives: [],
          loc: { start: 946, end: 966 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'deletedAt',
            loc: { start: 969, end: 978 }
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'DateTime',
              loc: { start: 980, end: 988 }
            },
            loc: { start: 980, end: 988 }
          },
          directives: [],
          loc: { start: 969, end: 988 }
        }
      ],
      loc: { start: 883, end: 990 }
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'CreateLikeInput',
        loc: { start: 998, end: 1013 }
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'postId',
            loc: { start: 1018, end: 1024 }
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Cuid',
                loc: { start: 1026, end: 1030 }
              },
              loc: { start: 1026, end: 1030 }
            },
            loc: { start: 1026, end: 1031 }
          },
          directives: [],
          loc: { start: 1018, end: 1031 }
        }
      ],
      loc: { start: 992, end: 1033 }
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1047, end: 1052 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'likes',
            loc: { start: 1057, end: 1062 }
          },
          arguments: [],
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Like',
                  loc: { start: 1065, end: 1069 }
                },
                loc: { start: 1065, end: 1069 }
              },
              loc: { start: 1065, end: 1070 }
            },
            loc: { start: 1064, end: 1071 }
          },
          directives: [],
          loc: { start: 1057, end: 1071 }
        }
      ],
      loc: { start: 1035, end: 1073 }
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Mutation',
        loc: { start: 1087, end: 1095 }
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createLike',
            loc: { start: 1100, end: 1110 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 1111, end: 1116 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'CreateLikeInput',
                    loc: { start: 1118, end: 1133 }
                  },
                  loc: { start: 1118, end: 1133 }
                },
                loc: { start: 1118, end: 1134 }
              },
              directives: [],
              loc: { start: 1111, end: 1134 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Like',
                loc: { start: 1137, end: 1141 }
              },
              loc: { start: 1137, end: 1141 }
            },
            loc: { start: 1137, end: 1142 }
          },
          directives: [],
          loc: { start: 1100, end: 1142 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'deleteLike',
            loc: { start: 1145, end: 1155 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 1156, end: 1158 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Cuid',
                    loc: { start: 1160, end: 1164 }
                  },
                  loc: { start: 1160, end: 1164 }
                },
                loc: { start: 1160, end: 1165 }
              },
              directives: [],
              loc: { start: 1156, end: 1165 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Cuid',
                loc: { start: 1168, end: 1172 }
              },
              loc: { start: 1168, end: 1172 }
            },
            loc: { start: 1168, end: 1173 }
          },
          directives: [],
          loc: { start: 1145, end: 1173 }
        }
      ],
      loc: { start: 1075, end: 1175 }
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Post', loc: { start: 1181, end: 1185 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1190, end: 1192 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Cuid',
                loc: { start: 1194, end: 1198 }
              },
              loc: { start: 1194, end: 1198 }
            },
            loc: { start: 1194, end: 1199 }
          },
          directives: [],
          loc: { start: 1190, end: 1199 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'title',
            loc: { start: 1202, end: 1207 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1209, end: 1215 }
              },
              loc: { start: 1209, end: 1215 }
            },
            loc: { start: 1209, end: 1216 }
          },
          directives: [],
          loc: { start: 1202, end: 1216 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'content',
            loc: { start: 1219, end: 1226 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1228, end: 1234 }
              },
              loc: { start: 1228, end: 1234 }
            },
            loc: { start: 1228, end: 1235 }
          },
          directives: [],
          loc: { start: 1219, end: 1235 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'author',
            loc: { start: 1238, end: 1244 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 1246, end: 1250 }
              },
              loc: { start: 1246, end: 1250 }
            },
            loc: { start: 1246, end: 1251 }
          },
          directives: [],
          loc: { start: 1238, end: 1251 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'comments',
            loc: { start: 1254, end: 1262 }
          },
          arguments: [],
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Comment',
                  loc: { start: 1265, end: 1272 }
                },
                loc: { start: 1265, end: 1272 }
              },
              loc: { start: 1265, end: 1273 }
            },
            loc: { start: 1264, end: 1274 }
          },
          directives: [],
          loc: { start: 1254, end: 1274 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'likes',
            loc: { start: 1277, end: 1282 }
          },
          arguments: [],
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Like',
                  loc: { start: 1285, end: 1289 }
                },
                loc: { start: 1285, end: 1289 }
              },
              loc: { start: 1285, end: 1290 }
            },
            loc: { start: 1284, end: 1291 }
          },
          directives: [],
          loc: { start: 1277, end: 1291 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'likesCount',
            loc: { start: 1294, end: 1304 }
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
              loc: { start: 1306, end: 1309 }
            },
            loc: { start: 1306, end: 1309 }
          },
          directives: [],
          loc: { start: 1294, end: 1309 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 1312, end: 1321 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 1323, end: 1331 }
              },
              loc: { start: 1323, end: 1331 }
            },
            loc: { start: 1323, end: 1332 }
          },
          directives: [],
          loc: { start: 1312, end: 1332 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'updatedAt',
            loc: { start: 1335, end: 1344 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 1346, end: 1354 }
              },
              loc: { start: 1346, end: 1354 }
            },
            loc: { start: 1346, end: 1355 }
          },
          directives: [],
          loc: { start: 1335, end: 1355 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'deletedAt',
            loc: { start: 1358, end: 1367 }
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'DateTime',
              loc: { start: 1369, end: 1377 }
            },
            loc: { start: 1369, end: 1377 }
          },
          directives: [],
          loc: { start: 1358, end: 1377 }
        }
      ],
      loc: { start: 1176, end: 1379 }
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'CreatePostInput',
        loc: { start: 1387, end: 1402 }
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'title',
            loc: { start: 1407, end: 1412 }
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1414, end: 1420 }
              },
              loc: { start: 1414, end: 1420 }
            },
            loc: { start: 1414, end: 1421 }
          },
          directives: [],
          loc: { start: 1407, end: 1421 }
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'content',
            loc: { start: 1424, end: 1431 }
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1433, end: 1439 }
              },
              loc: { start: 1433, end: 1439 }
            },
            loc: { start: 1433, end: 1440 }
          },
          directives: [],
          loc: { start: 1424, end: 1440 }
        }
      ],
      loc: { start: 1381, end: 1442 }
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UpdatePostInput',
        loc: { start: 1450, end: 1465 }
      },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'title',
            loc: { start: 1470, end: 1475 }
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1477, end: 1483 }
              },
              loc: { start: 1477, end: 1483 }
            },
            loc: { start: 1477, end: 1484 }
          },
          directives: [],
          loc: { start: 1470, end: 1484 }
        },
        {
          kind: 'InputValueDefinition',
          name: {
            kind: 'Name',
            value: 'content',
            loc: { start: 1487, end: 1494 }
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1496, end: 1502 }
              },
              loc: { start: 1496, end: 1502 }
            },
            loc: { start: 1496, end: 1503 }
          },
          directives: [],
          loc: { start: 1487, end: 1503 }
        }
      ],
      loc: { start: 1444, end: 1505 }
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1519, end: 1524 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'post',
            loc: { start: 1529, end: 1533 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 1534, end: 1536 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Cuid',
                    loc: { start: 1538, end: 1542 }
                  },
                  loc: { start: 1538, end: 1542 }
                },
                loc: { start: 1538, end: 1543 }
              },
              directives: [],
              loc: { start: 1534, end: 1543 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Post',
                loc: { start: 1546, end: 1550 }
              },
              loc: { start: 1546, end: 1550 }
            },
            loc: { start: 1546, end: 1551 }
          },
          directives: [],
          loc: { start: 1529, end: 1551 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'posts',
            loc: { start: 1554, end: 1559 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'page',
                loc: { start: 1560, end: 1564 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Int',
                    loc: { start: 1566, end: 1569 }
                  },
                  loc: { start: 1566, end: 1569 }
                },
                loc: { start: 1566, end: 1570 }
              },
              directives: [],
              loc: { start: 1560, end: 1570 }
            }
          ],
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Post',
                  loc: { start: 1574, end: 1578 }
                },
                loc: { start: 1574, end: 1578 }
              },
              loc: { start: 1574, end: 1579 }
            },
            loc: { start: 1573, end: 1580 }
          },
          directives: [],
          loc: { start: 1554, end: 1580 }
        }
      ],
      loc: { start: 1507, end: 1582 }
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Mutation',
        loc: { start: 1596, end: 1604 }
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createPost',
            loc: { start: 1609, end: 1619 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 1620, end: 1625 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'CreatePostInput',
                    loc: { start: 1627, end: 1642 }
                  },
                  loc: { start: 1627, end: 1642 }
                },
                loc: { start: 1627, end: 1643 }
              },
              directives: [],
              loc: { start: 1620, end: 1643 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Post',
                loc: { start: 1646, end: 1650 }
              },
              loc: { start: 1646, end: 1650 }
            },
            loc: { start: 1646, end: 1651 }
          },
          directives: [],
          loc: { start: 1609, end: 1651 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'updatePost',
            loc: { start: 1654, end: 1664 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 1665, end: 1667 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Cuid',
                    loc: { start: 1669, end: 1673 }
                  },
                  loc: { start: 1669, end: 1673 }
                },
                loc: { start: 1669, end: 1674 }
              },
              directives: [],
              loc: { start: 1665, end: 1674 }
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'input',
                loc: { start: 1676, end: 1681 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'UpdatePostInput',
                    loc: { start: 1683, end: 1698 }
                  },
                  loc: { start: 1683, end: 1698 }
                },
                loc: { start: 1683, end: 1699 }
              },
              directives: [],
              loc: { start: 1676, end: 1699 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Post',
                loc: { start: 1702, end: 1706 }
              },
              loc: { start: 1702, end: 1706 }
            },
            loc: { start: 1702, end: 1707 }
          },
          directives: [],
          loc: { start: 1654, end: 1707 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'deletePost',
            loc: { start: 1710, end: 1720 }
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 1721, end: 1723 }
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Cuid',
                    loc: { start: 1725, end: 1729 }
                  },
                  loc: { start: 1725, end: 1729 }
                },
                loc: { start: 1725, end: 1730 }
              },
              directives: [],
              loc: { start: 1721, end: 1730 }
            }
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Cuid',
                loc: { start: 1733, end: 1737 }
              },
              loc: { start: 1733, end: 1737 }
            },
            loc: { start: 1733, end: 1738 }
          },
          directives: [],
          loc: { start: 1710, end: 1738 }
        }
      ],
      loc: { start: 1584, end: 1740 }
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'UserRole',
        loc: { start: 1746, end: 1754 }
      },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'USER',
            loc: { start: 1759, end: 1763 }
          },
          directives: [],
          loc: { start: 1759, end: 1763 }
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'ADMIN',
            loc: { start: 1766, end: 1771 }
          },
          directives: [],
          loc: { start: 1766, end: 1771 }
        }
      ],
      loc: { start: 1741, end: 1773 }
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 1780, end: 1784 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1789, end: 1791 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Cuid',
                loc: { start: 1793, end: 1797 }
              },
              loc: { start: 1793, end: 1797 }
            },
            loc: { start: 1793, end: 1798 }
          },
          directives: [],
          loc: { start: 1789, end: 1798 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'email',
            loc: { start: 1801, end: 1806 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'EmailAddress',
                loc: { start: 1808, end: 1820 }
              },
              loc: { start: 1808, end: 1820 }
            },
            loc: { start: 1808, end: 1821 }
          },
          directives: [],
          loc: { start: 1801, end: 1821 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'role',
            loc: { start: 1824, end: 1828 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'UserRole',
                loc: { start: 1830, end: 1838 }
              },
              loc: { start: 1830, end: 1838 }
            },
            loc: { start: 1830, end: 1839 }
          },
          directives: [],
          loc: { start: 1824, end: 1839 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1842, end: 1846 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1848, end: 1854 }
              },
              loc: { start: 1848, end: 1854 }
            },
            loc: { start: 1848, end: 1855 }
          },
          directives: [],
          loc: { start: 1842, end: 1855 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'createdAt',
            loc: { start: 1858, end: 1867 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 1869, end: 1877 }
              },
              loc: { start: 1869, end: 1877 }
            },
            loc: { start: 1869, end: 1878 }
          },
          directives: [],
          loc: { start: 1858, end: 1878 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'updatedAt',
            loc: { start: 1881, end: 1890 }
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DateTime',
                loc: { start: 1892, end: 1900 }
              },
              loc: { start: 1892, end: 1900 }
            },
            loc: { start: 1892, end: 1901 }
          },
          directives: [],
          loc: { start: 1881, end: 1901 }
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'deletedAt',
            loc: { start: 1904, end: 1913 }
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'DateTime',
              loc: { start: 1915, end: 1923 }
            },
            loc: { start: 1915, end: 1923 }
          },
          directives: [],
          loc: { start: 1904, end: 1923 }
        }
      ],
      loc: { start: 1775, end: 1925 }
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1939, end: 1944 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'me', loc: { start: 1949, end: 1951 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'User',
              loc: { start: 1953, end: 1957 }
            },
            loc: { start: 1953, end: 1957 }
          },
          directives: [],
          loc: { start: 1949, end: 1957 }
        }
      ],
      loc: { start: 1927, end: 1959 }
    }
  ],
  loc: { start: 0, end: 1960 }
} as unknown as DocumentNode;
