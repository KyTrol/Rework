import path from 'path';

const root = path.join(__dirname, '..');
const src = path.join(root, 'src');

export const paths = {
  build: path.join(root, 'build'),
  css: name => path.join('css', `${name}.css`),
  favicon: path.join('assets', 'img', 'favicon'),
  js: name => path.join('js', `${name}.js`),
  public: path.join('build', '/'),
  pug: path.join(src, 'index.pug'),
  root,
  src
};
