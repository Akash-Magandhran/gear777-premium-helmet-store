export const formatPrice = (n) => `$${Number(n).toLocaleString('en-US', { minimumFractionDigits: 0 })}`;
export const slug = (s) => s.toLowerCase().replace(/\s+/g, '-');
