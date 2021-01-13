# This is a reproduce repo for a storybook issue

https://github.com/storybookjs/storybook/issues/12444#issuecomment-750545827

To reproduce:

```sh
yarn
yarn build-storybook
yarn serve
```

Vercel demo: https://storybook-issue-12444.vercel.app/

## Resolution

The problem is that the `build-storybook --docs` will remove the Storybook [Toolbar](https://storybook.js.org/docs/react/get-started/browse-stories#toolbar).

Just use `build-storybook` to build and host it could solve the issue.

To compare the outputs:

### `build-storybook --docs`

https://storybook-issue-12444-4kzv29ahb.vercel.app/storybook-static

### `build-storybook`

https://storybook-issue-12444-9n67cjj7u.vercel.app/storybook-static


PS: All above observation is based on Storybook `6.1.14`.

