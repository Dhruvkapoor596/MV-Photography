/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'portfolioData.ts');

const categories = [
  { slug: "portraits", title: "Family & Portraits", description: "Intimate and candid family moments." },
  { slug: "celebrations", title: "Birthday Celebrations", description: "Capturing the joy of special milestones." },
  { slug: "nature", title: "Botanical Studies", description: "The intricate beauty of the natural world." }
];

let fileContent = `export interface Photo {
  id: string;
  src: string;
  categorySlug: string;
  caption: string;
}

export const categories = ${JSON.stringify(categories, null, 2)};

export const getPhotosByCategory = (slug: string): Photo[] => {
  return photos.filter(p => p.categorySlug === slug);
};

export const photos: Photo[] = [
`;

categories.forEach(cat => {
  const dir = path.join(__dirname, 'public', 'portfolio', cat.slug);
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir).filter(file => /\.(jpg|jpeg|png)$/i.test(file));
    files.forEach((file, index) => {
      const id = `${cat.slug.charAt(0)}${index + 1}`;
      fileContent += `  { id: "${id}", src: "/portfolio/${cat.slug}/${file}", categorySlug: "${cat.slug}", caption: "${cat.title} ${index + 1}" },\n`;
    });
  }
});

fileContent += `];`;

fs.writeFileSync(dataPath, fileContent);
console.log("Portfolio data updated successfully!");