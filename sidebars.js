/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Overview',
      items: [
        'overview/welcome',
        'overview/quick-look',
        'overview/getting-started',
        'overview/data-types',
        'overview/sdk',
      ],
    },
    {
      type: 'category',
      label: 'Quickstarts',
      items: ['quickstart/react'],
    },
    {
      type: 'category',
      label: 'Auth',
      items: [
        'auth/register',
        'auth/login',
        'auth/logout',
        'auth/user',
        'auth/update',
        // 'auth/reset-password',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Auth (Server Only)',
    //   items: [
    //     'auth-server/generate-link',
    //     'auth-server/invite-user-by-email',
    //     'auth-server/send-mobile-otp',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Users',
    //   items: [
    //     'users/find',
    //     'users/find-by-id',
    //     'users/create',
    //     'users/update-by-id',
    //     'users/delete-by-id',
    //   ],
    // },
    {
      type: 'category',
      label: 'Service',
      items: [
        'service/find',
        {
          type: 'category',
          label: 'Modifiers',
          items: [
            'service/modifiers/limit',
            'service/modifiers/sort',
            'service/modifiers/skip',
          ],
        },
        {
          type: 'category',
          label: 'Filters',
          items: [
            'service/filters/select',
            'service/filters/lookup',
            'service/filters/where',
            'service/filters/ne',
            'service/filters/contains',
            'service/filters/not-contains',
            'service/filters/in',
            'service/filters/nin',
            'service/filters/lt',
            'service/filters/lte',
            'service/filters/gt',
            'service/filters/gte',
            'service/filters/or',
          ],
        },
        'service/get-by-id',
        'service/create',
        // 'service/update',
        'service/update-by-id',
        // 'service/delete',
        'service/delete-by-id',
        'service/link',
        'service/unlink',
        'service/count',
      ],
    },
    {
      type: 'category',
      label: 'Realtime',
      items: ['realtime/subscribe', 'realtime/unsubscribe'],
    },
    {
      type: 'category',
      label: 'Storage',
      items: ['storage/upload'],
    },
    {
      type: 'category',
      label: 'Tutorial',
      items: [
        'tutorials/blog',
        // 'tutorials/todos',
        // 'tutorials/chat',
      ],
    },
  ],
};

module.exports = sidebars;
