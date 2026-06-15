// Eagerly resolve all helmet/lifestyle images so JSON-referenced filenames work.
const modules = import.meta.glob('../assets/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' });
const map = {};
for (const path in modules) {
  const name = path.split('/').pop();
  map[name] = modules[path];
}
export function img(name) {
  return map[name] || '';
}
