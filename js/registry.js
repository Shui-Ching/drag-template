import { CATEGORIES } from './data/categories.js';
import headerBlocks  from './data/header.js';
import bannerBlocks  from './data/banner.js';
import columnsBlocks from './data/columns.js';
import ctaBlocks     from './data/cta.js';
import footerBlocks  from './data/footer.js';

export { CATEGORIES };

export const BLOCKS = {
  header:  headerBlocks,
  banner:  bannerBlocks,
  columns: columnsBlocks,
  cta:     ctaBlocks,
  footer:  footerBlocks,
};

export function getBlock(blockId) {
  for (const cat of Object.values(BLOCKS)) {
    const found = cat.find(b => b.id === blockId);
    if (found) return found;
  }
  return null;
}
