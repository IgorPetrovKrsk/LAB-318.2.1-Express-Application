import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

//router.use('/images', express.static(path.join(__dirname,'..','images')));

console.log(`Static folder mapped: ${path.join(__dirname, '../images')}`);
router.get('/', (req, res) => {
    const data = { author: "This is Me. THE Author", imgSrc: "/images/author.gif", authorDescription: "THE BEST AUTHOR THAT HAS EVER BEEN OR EVER WILL BE!!!" };
        res.render("author", data);
});

export default router;